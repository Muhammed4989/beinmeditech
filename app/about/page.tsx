import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/content/PageIntro';
import SiteCTA from '@/components/content/SiteCTA';
import ServiceIcon from '@/components/ServiceIcon';

export const metadata: Metadata = {
  title: 'About Us', description: 'Meet beIN Meditech: medical equipment sourcing and healthcare IT support, with a practical approach to configuration, quotations and handover.',
  alternates: { canonical: 'https://beinmeditech.com/about' },
};
const principles = [
  { icon: 'equipment', title: 'Configuration first', text: 'We start with the intended use, model and accessories, so the enquiry describes the complete requirement.' },
  { icon: 'check', title: 'Clear commercial scope', text: 'Equipment, delivery and service responsibilities should be visible in the quotation, not left to assumption.' },
  { icon: 'integration', title: 'Connected thinking', text: 'We consider how equipment and software fit into the facility’s existing technical environment.' },
  { icon: 'support', title: 'Planned handover', text: 'Training, technical acceptance and support are discussed as defined parts of the requested scope.' },
];
export default function AboutPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About beIN Meditech', url: 'https://beinmeditech.com/about', mainEntity: { '@id': 'https://beinmeditech.com/#organization' } }) }} />
    <PageIntro title="Medical technology. A practical partnership." eyebrow="About beIN Meditech" description="Helping healthcare facilities turn equipment and technology requirements into a clear next step." crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
    <section className="site-section"><div className="site-container split-section">
      <figure className="editorial-figure"><Image src="/images/site/equipment-consultation.webp" alt="AI-generated editorial scene of a medical equipment planning discussion" width={1440} height={960} sizes="(max-width: 959px) 100vw, 560px" /><figcaption>Editorial illustration — not a photograph of our staff or premises.</figcaption></figure>
      <div><p className="section-label">What we do</p><h2 className="section-title">Equipment sourcing meets healthcare IT.</h2><p className="section-copy">beIN Meditech works with equipment enquiries, software and hardware consultation, training and system integration. Our contact points in Germany and Türkiye support discussions with hospitals, clinics and equipment buyers.</p><p className="section-copy">We focus on the details that make an enquiry useful: intended application, required configuration, condition, accessories and handover expectations. Availability and the precise scope of each offer are confirmed in the quotation.</p></div>
    </div></section>
    <section className="site-section surface-tint"><div className="site-container"><p className="section-label">Our approach</p><h2 className="section-title">Clarity at every stage.</h2><div className="principles-grid">{principles.map((item) => <article className="service-card" key={item.title}><span className="icon-tile"><ServiceIcon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="site-section"><div className="site-container"><p className="section-label">Working together</p><h2 className="section-title">A straightforward starting point.</h2><div className="process-grid">{[
      ['Define the requirement', 'Tell us about the equipment, facility and intended use, including any existing systems.'],
      ['Clarify the package', 'Review model, accessories, condition and the services requested as one written scope.'],
      ['Agree the next steps', 'Confirm commercial terms and responsibilities for delivery, acceptance and any follow-up.'],
    ].map(([title, text], index) => <article className="process-card" key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <SiteCTA />
  </>;
}
