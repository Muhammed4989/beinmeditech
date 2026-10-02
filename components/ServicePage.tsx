import Link from 'next/link';
import Image from 'next/image';
import PageIntro from './content/PageIntro';
import SiteCTA from './content/SiteCTA';
import ServiceIcon from './ServiceIcon';

interface FAQ { q: string; a: string; }
interface ServicePageProps {
  title: string; intro: string; sectionLabel: string; featuresTitle: string;
  bullets: string[]; highlights: string[]; faqs: FAQ[]; imageUrl: string; imageAlt: string; schema: Record<string, unknown>;
}
export default function ServicePage({ title, intro, sectionLabel, featuresTitle, bullets, highlights, faqs, imageUrl, imageAlt, schema }: ServicePageProps) {
  const path = typeof schema.url === 'string' ? new URL(schema.url).pathname : '/services';
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageIntro title={title} eyebrow="Healthcare services" crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: title, href: path }]} />
    <section className="site-section"><div className="site-container split-section">
      <div><p className="section-copy">{intro}</p><ul className="feature-list">{highlights.map((highlight) => <li key={highlight}><ServiceIcon name="check" />{highlight}</li>)}</ul><Link href={'/request-quote?equipment=' + encodeURIComponent(title)} className="btn-primary">Discuss your requirements <span aria-hidden="true">↗</span></Link><p className="mt-5 text-sm text-gray-600">Prefer email? <a href="mailto:info@beinmeditech.com" className="text-link">info@beinmeditech.com</a></p></div>
      <figure className="editorial-figure"><Image src={imageUrl} alt={imageAlt} width={1440} height={960} sizes="(max-width: 959px) 100vw, 560px" /><figcaption>AI-generated editorial illustration — not actual staff, equipment stock or premises.</figcaption></figure>
    </div></section>
    <section className="site-section surface-tint"><div className="site-container"><p className="section-label">{sectionLabel}</p><h2 className="section-title">{featuresTitle}</h2><div className="grid gap-4 mt-8 md:grid-cols-2">{bullets.map((bullet, index) => <div key={bullet} className="flex gap-4 rounded-2xl border border-primary-100 bg-white p-6"><span className="shrink-0 text-orange-700 font-bold text-sm pt-1">0{index + 1}</span><p className="text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: bullet }} /></div>)}</div></div></section>
    <section className="site-section"><div className="site-container"><p className="section-label">Working together</p><h2 className="section-title">A clear route from brief to handover.</h2><div className="process-grid">{[
      ['Define your requirements', 'Share your intended use, existing systems and the scope you need help with.'],
      ['Agree the project scope', 'Clarify the proposed configuration, deliverables and responsibilities in writing.'],
      ['Plan delivery and support', 'Confirm the acceptance process and any training or ongoing support required.'],
    ].map(([heading, text], index) => <article className="process-card" key={heading}><span className="step-number">0{index + 1}</span><h3>{heading}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="site-section surface-tint"><div className="site-container"><div className="max-w-3xl mx-auto"><p className="section-label">Before you enquire</p><h2 className="section-title">Frequently asked questions.</h2><div className="mt-8 space-y-3">{faqs.map((faq) => <details className="faq-item group bg-white" key={faq.q}><summary className="flex gap-5 justify-between items-start cursor-pointer p-5 font-semibold text-primary-600">{faq.q}<span className="group-open:rotate-45 shrink-0 text-orange-700" aria-hidden="true">+</span></summary><p className="px-5 pb-5 text-gray-600 leading-8">{faq.a}</p></details>)}</div></div></div></section>
    <SiteCTA title="Let’s discuss your requirements." description="Tell us about your facility and the equipment or technical project you have in mind." href="/contact" label="Contact our team" />
  </>;
}
