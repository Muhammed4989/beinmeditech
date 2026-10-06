import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import { createHash } from 'node:crypto';

export const runtime = 'nodejs';
export const maxDuration = 60;

// Bounded per-instance backstop, not a distributed limiter. Enforce the public
// /api/contact rule at Vercel's firewall too; serverless instances do not share this map.
const attempts = new Map<string, { count: number; expires: number }>();
const windowMs = 15 * 60 * 1000;
function reserveAttempt(req: NextRequest) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const address = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim().slice(0, 128);
  const key = createHash('sha256').update(address).digest('hex');
  const current = attempts.get(key);
  if (current && current.count >= 5) return false;
  if (!current && attempts.size >= 1024) return false;
  attempts.set(key, { count: (current?.count || 0) + 1, expires: current?.expires || now + windowMs });
  return true;
}

async function readEnquiry(req: NextRequest) {
  const reader = req.body?.getReader();
  if (!reader) return null;
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 65536) {
        await reader.cancel();
        return 'too_large';
      }
      chunks.push(value);
    }
    const bytes = Buffer.concat(chunks);
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

export async function POST(req: NextRequest) {
  try {
    if (req.headers.get('origin') !== new URL(req.url).origin) return NextResponse.json({ error: 'This form must be submitted from this website.' }, { status: 403 });
    if (req.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') return NextResponse.json({ error: 'JSON is required.' }, { status: 415 });
    const input = await readEnquiry(req);
    if (input === 'too_large') return NextResponse.json({ error: 'Enquiry is too large.' }, { status: 413 });
    if (!input || typeof input !== 'object' || Array.isArray(input)) return NextResponse.json({ error: 'Invalid enquiry.' }, { status: 400 });
    if (input.website !== undefined && (typeof input.website !== 'string' || input.website.trim())) return NextResponse.json({ error: 'Invalid enquiry.' }, { status: 400 });
    const limits: Record<string, number> = { firstName: 80, lastName: 80, email: 254, phone: 50, subject: 240, message: 10000 };
    if (Object.entries(limits).some(([key, limit]) => input[key] !== undefined && (typeof input[key] !== 'string' || input[key].length > limit))) {
      return NextResponse.json({ error: 'Invalid enquiry fields.' }, { status: 400 });
    }
    const replyEmail = (input.email || '').trim();
    if (!input.firstName?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyEmail)) {
      return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 });
    }
    if (!input.message?.trim()) return NextResponse.json({ error: 'A message is required.' }, { status: 400 });
    const sender = process.env.RACKSPACE_SMTP_USER?.trim();
    const password = process.env.RACKSPACE_SMTP_PASSWORD;
    if (!sender || !password || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(sender) || sender.split('@')[1].toLowerCase() !== 'beinmeditech.com') {
      return NextResponse.json({ error: 'delivery_not_configured' }, { status: 503 });
    }
    if (!reserveAttempt(req)) return NextResponse.json({ error: 'Too many enquiries. Please wait or contact us directly.' }, { status: 429, headers: { 'Retry-After': '900' } });
    const escape = (value: string) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!));
    const { firstName, lastName, email, phone, subject, message } = Object.fromEntries(Object.keys(limits).map((key) => [key, escape((input[key] || '').trim())]));

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
        <div style="background: #28214C; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact — beIN Meditech</h1>
          <p style="color: #94a3b8; margin: 6px 0 0; font-size: 14px;">Website contact form submission</p>
        </div>
        <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600; font-size: 14px;">${firstName} ${lastName || ''}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${email}" style="color: #FF6400; font-weight: 600; font-size: 14px; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${phone}</td>
            </tr>` : ''}
            ${subject ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${subject}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px; line-height: 1.6;">${message ? message.replace(/\n/g, '<br>') : ''}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const transport = createTransport({
      host: 'secure.emailsrvr.com',
      port: 465,
      secure: true,
      auth: { user: sender, pass: password },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      disableFileAccess: true,
      disableUrlAccess: true,
      tls: { minVersion: 'TLSv1.2', rejectUnauthorized: true },
    });
    let receipt;
    try {
      receipt = await transport.sendMail({
        from: { name: 'beIN Meditech', address: sender },
        to: ['info@beinmeditech.com'],
        replyTo: replyEmail,
        subject: '[beIN Meditech] Website enquiry',
        html,
        text: ['Website enquiry', `Name: ${input.firstName.trim()} ${(input.lastName || '').trim()}`, `Email: ${replyEmail}`, `Phone: ${(input.phone || '').trim()}`, `Subject: ${(input.subject || '').trim()}`, '', input.message.trim()].join('\n'),
      });
    } finally {
      transport.close();
    }
    if (!receipt.accepted?.some((address) => String(address).toLowerCase() === 'info@beinmeditech.com')) {
      console.error('Rackspace did not accept the enquiry recipient.');
      return NextResponse.json({ error: 'Unable to confirm message submission.' }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    // Never log submitted personal data or provider credentials.
    console.error('Contact route could not confirm message submission.');
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
