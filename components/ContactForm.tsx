'use client';
import { useState } from 'react';
import Link from 'next/link';

const fieldClass = 'w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-900 focus:border-primary-600';

export default function ContactForm({ initialSubject = '' }: { initialSubject?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<'sent' | 'email' | null>(null);
  const [emailDraft, setEmailDraft] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    setSubmitting(true);
    setError('');
    setResult(null);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await response.json();
      if (response.ok && json.success) {
        setResult('sent');
      } else if (json.error === 'no_key') {
        const body = ['Name: ' + data.firstName + ' ' + data.lastName, 'Email: ' + data.email, 'Phone: ' + data.phone, 'Subject: ' + data.subject, '', data.message].join('\n');
        setEmailDraft('mailto:info@beinmeditech.com?subject=' + encodeURIComponent(data.subject || 'Equipment enquiry') + '&body=' + encodeURIComponent(body));
        setResult('email');
      } else {
        setError('Your message was not sent. Please try again or email info@beinmeditech.com.');
      }
    } catch {
      setError('We could not send your message. Check your connection or email info@beinmeditech.com.');
    } finally { setSubmitting(false); }
  }

  if (result === 'sent') return <div role="status" className="rounded-2xl border border-primary-200 bg-white p-8">
    <p className="section-label">Enquiry received</p><h3 className="mt-3 text-2xl font-bold text-primary-600">Thank you for getting in touch.</h3><p className="mt-4 text-gray-600">Your message was sent successfully. Our team will review your enquiry and reply to the email address you provided.</p><button type="button" className="btn-outline mt-6" onClick={() => setResult(null)}>Write another message</button>
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
      <div><label htmlFor="message" className="form-label">Your requirements</label><textarea id="message" name="message" rows={5} maxLength={10000} className={fieldClass + ' resize-y'} placeholder="Equipment, configuration, intended use and delivery requirements…" /></div>
      {error && <p role="alert" className="text-red-700 text-sm leading-6">{error}</p>}
      {result === 'email' && <div role="status" className="rounded-xl border border-primary-200 bg-white p-5 text-sm leading-7">
        <p className="font-bold text-primary-600">Your message has not been sent yet.</p><p className="mt-2 text-gray-600">Online delivery is not configured. Open the prepared email below, review it and press Send in your email app. Your entries are still here.</p><a className="btn-outline mt-4" href={emailDraft}>Open prepared email <span aria-hidden="true">↗</span></a>
      </div>}
      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">{submitting ? 'Sending your enquiry…' : 'Send enquiry'}</button>
      <p className="text-xs text-gray-600 leading-6">Please do not send patient or sensitive medical information. <Link href="/privacy" className="underline underline-offset-4">Read our privacy policy</Link>.</p>
    </fieldset>
  </form>;
}
