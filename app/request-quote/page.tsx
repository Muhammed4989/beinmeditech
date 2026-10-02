import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { SITE_URL } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Request a Medical Equipment Quote | beIN MediTech',
  description: 'Request medical equipment sourcing and a delivered-price quotation from Germany to your destination country.',
  alternates: { canonical: `${SITE_URL}/request-quote` },
};

export default function RequestQuotePage({ searchParams }: { searchParams?: { equipment?: string } }) {
  const equipment = typeof searchParams?.equipment === 'string' ? searchParams.equipment.slice(0, 120) : '';
  const subject = equipment ? `Delivered quote: ${equipment}` : 'Medical Equipment Sourcing & Delivered Quote';
  const schema = {
    '@context': 'https://schema.org', '@type': 'ContactPage',
    name: 'Request a Medical Equipment Quote', url: `${SITE_URL}/request-quote`,
    about: { '@type': 'Service', name: 'Medical equipment sourcing and international delivery quotation', provider: { '@type': 'Organization', name: 'beIN MediTech', url: SITE_URL } },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="bg-primary-900 text-white pt-28 pb-14"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="text-sm text-primary-200 mb-6"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span><Link href="/medical-equipment" className="hover:text-white">Medical Equipment</Link><span className="mx-2">/</span><span>Request Quote</span></nav>
      <p className="text-orange text-xs font-bold uppercase tracking-widest">International sourcing</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Request a Delivered-Price Quote</h1>
      <p className="text-primary-100 text-lg leading-relaxed mt-5 max-w-3xl">Tell us the equipment, required configuration and destination. We will confirm availability and prepare a clear commercial quotation.</p>
    </div></section>
    <main className="py-16 bg-[#F3F6FD]"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-10">
      <aside><h2 className="text-2xl font-bold text-primary-900">Information that helps us quote accurately</h2><ul className="mt-6 space-y-4 text-gray-700">
        {['Equipment type, brand or model', 'Clinical application and required probes/accessories', 'Preferred year, condition and budget', 'Destination country and city', 'Required delivery timeline'].map((item) => <li key={item} className="flex gap-3"><span className="text-orange font-bold">✓</span><span>{item}</span></li>)}
      </ul><p className="mt-8 text-sm text-gray-600">A catalogue page does not guarantee current stock. Availability and the exact configuration are confirmed in your quotation.</p></aside>
      <div className="bg-white rounded-2xl shadow-sm border border-primary-100 p-6 md:p-8"><ContactForm initialSubject={subject} /></div>
    </div></main>
  </>;
}
