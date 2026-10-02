import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageIntro from '@/components/content/PageIntro';
export const metadata: Metadata = { title: 'Contact Us', description: 'Contact beIN Meditech about medical equipment and healthcare IT. Reach our team by email, phone or an enquiry form.', alternates: { canonical: 'https://beinmeditech.com/contact' } };
export default function ContactPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact beIN Meditech', url: 'https://beinmeditech.com/contact', mainEntity: { '@id': 'https://beinmeditech.com/#organization' } }) }} />
    <PageIntro title="Tell us what you’re working on." eyebrow="Contact our team" description="Equipment enquiry, technical question or a new project — start the conversation with beIN Meditech." crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
    <section className="site-section"><div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div><h2 className="section-title">A direct line to our team.</h2><p className="section-copy">Share the equipment or service you need, along with the details that matter to your facility. For a quotation, include the intended configuration and delivery requirements.</p>
        <div className="space-y-5 mt-8"><div className="card"><p className="section-label mb-2">Email</p><a className="text-link" href="mailto:info@beinmeditech.com">info@beinmeditech.com</a></div><div className="card"><p className="section-label mb-2">Phone</p><a className="text-link" href="tel:+4917641963598">+49 176 419 63598</a></div></div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm leading-7 text-gray-600"><address className="not-italic"><h3 className="font-bold text-primary-600 mb-2">Germany</h3>Kirchwerderstraße 12<br />23556 Lübeck</address><address className="not-italic"><h3 className="font-bold text-primary-600 mb-2">Türkiye</h3>Bahçeşehir 34488<br />Istanbul</address></div>
        <a className="text-link mt-6" href="https://www.google.com/maps/search/?api=1&query=Kirchwerderstra%C3%9Fe+12+23556+L%C3%BCbeck" target="_blank" rel="noopener noreferrer">View Lübeck location <span aria-hidden="true">↗</span></a>
      </div>
      <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8"><h2 className="text-2xl font-bold text-primary-600 mb-2">Send an enquiry</h2><p className="text-sm text-gray-600 mb-7">Fields marked * are required. Please do not include patient information.</p><ContactForm /></div>
    </div></section>
  </>;
}
