'use client';
import { useState } from 'react';
import Link from 'next/link';
import { companyPhone } from '@/lib/company-contact';

const fieldClass = 'w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-900 focus:border-primary-600';

export default function ContactForm({ initialSubject = '' }: { initialSubject?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<'sent' | 'email' | null>(null);
  const [emailDraft, setEmailDraft] = useState('');
  const [whatsappDraft, setWhatsappDraft] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    setSubmitting(true);
    setError('');
    setResult(null);
    const body = ['Name: ' + data.firstName + ' ' + data.lastName, 'Email: ' + data.email, 'Phone: ' + data.phone, 'Subject: ' + data.subject, '', data.message].join('\n');
    setEmailDraft('mailto:info@beinmeditech.com?subject=' + encodeURIComponent(data.subject || 'Equipment enquiry') + '&body=' + encodeURIComponent(body));
    setWhatsappDraft(companyPhone.whatsapp + '?text=' + encodeURIComponent(body));
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), signal: AbortSignal.timeout(55000) });
      const json = await response.json().catch(() => null);
      if (response.ok && json?.success === true) {
        setResult('sent');
      } else if (json?.error === 'no_key' || json?.error === 'delivery_not_configured') {
        setResult('email');
      } else {
        setError('We could not confirm submission. Your entries are preserved. Use a contact option below; resending may create a duplicate.');
        setResult('email');
      }
    } catch {
      setError('We could not confirm submission. Your entries are preserved. Use a contact option below; resending may create a duplicate.');
      setResult('email');
    } finally { setSubmitting(false); }
  }

  if (result === 'sent') return <div role="status" className="rounded-2xl border border-primary-200 bg-white p-8">
    <p className="section-label">Enquiry submitted</p><h3 className="mt-3 text-2xl font-bold text-primary-600">Thank you for getting in touch.</h3><p className="mt-4 text-gray-600">Your enquiry was accepted by our email service for delivery to the team. Please keep a copy of your message until you receive a reply.</p><button type="button" className="btn-outline mt-6" onClick={() => setResult(null)}>Write another message</button>
  </div>;

  return <form onSubmit={handleSubmit}>
    <fieldset disabled={submitting} className="space-y-5">
      <legend className="sr-only">Your enquiry details</legend>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="firstName" className="form-label">First name *</label><input id="firstName" name="firstName" type="text" autoComplete="given-name" maxLength={80} required className={fieldClass} /></div>
        <div><label htmlFor="lastName" className="form-label">Last name</label><input id="lastName" name="lastName" type="text" autoComplete="family-name" maxLength={80} className={fieldClass} /></div>
      </div>
      <div><label htmlFor="email" className="form-label">Email address *</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required className={fieldClass} /></div>
      <div><label htmlFor="phone" className="form-label">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={50} className={fieldClass} /></div>
      <div><label htmlFor="subject" className="form-label">What can we help with?</label><select id="subject" name="subject" defaultValue={initialSubject} className={fieldClass}>
        <option value="">Select a topic</option>{initialSubject && <option value={initialSubject}>{initialSubject}</option>}
        {['Medical Equipment Sourcing & Delivered Quote', 'Medical Devices Trading', 'Software & Hardware Consultation', 'Training & Support Services', 'Custom IT Solutions for Healthcare', 'Integration Services', 'General Enquiry'].filter((option) => option !== initialSubject).map((option) => <option key={option}>{option}</option>)}
      </select></div>
      <div><label htmlFor="message" className="form-label">Your requirements *</label><textarea id="message" name="message" rows={5} maxLength={10000} required className={fieldClass + ' resize-y'} placeholder="Equipment, configuration, intended use and delivery requirements…" /></div>
      {error && <p role="alert" className="text-red-700 text-sm leading-6">{error}</p>}
      {result === 'email' && <div role="status" className="rounded-xl border border-primary-200 bg-white p-5 text-sm leading-7">
        <p className="font-bold text-primary-600">{error ? 'Delivery has not been confirmed.' : 'Your message has not been sent yet.'}</p><p className="mt-2 text-gray-600">{error ? 'You can contact us directly using your prepared message.' : 'Online delivery is not configured yet. Please use one of the options below.'} Review the prepared message and press Send in your chosen app. Your entries are still here.</p><div className="flex flex-wrap gap-3 mt-4"><a className="btn-outline" href={emailDraft}>Open prepared email <span aria-hidden="true">↗</span></a><a className="btn-outline" href={whatsappDraft} target="_blank" rel="noopener noreferrer">Open WhatsApp draft <span aria-hidden="true">↗</span></a></div><p className="mt-3">Alternatively, call <a className="underline" href={companyPhone.href}>{companyPhone.display}</a>.</p>
      </div>}
      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">{submitting ? 'Sending your enquiry…' : 'Send enquiry'}</button>
      <p className="text-xs text-gray-600 leading-6">Please do not send patient or sensitive medical information. <Link href="/privacy" className="underline underline-offset-4">Read our privacy policy</Link>.</p>
    </fieldset>
  </form>;
}
