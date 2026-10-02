import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCards from '@/components/blog/ArticleCards';
import SiteCTA from '@/components/content/SiteCTA';
import ServiceIcon from '@/components/ServiceIcon';
import { blogArticles } from '@/lib/blog';
import { serviceDirectory } from '@/lib/services';

export const metadata: Metadata = {
  title: { absolute: 'Medical Equipment & Healthcare IT | beIN Meditech' },
  description: 'Explore medical equipment sourcing, healthcare IT and integration with beIN Meditech. Compare configurations and request a quotation for your facility.',
  alternates: { canonical: 'https://beinmeditech.com' },
  openGraph: { title: 'Medical Equipment & Healthcare IT | beIN Meditech', description: 'Equipment sourcing, clear configurations and healthcare technology support.', url: 'https://beinmeditech.com', images: [{ url: '/images/site/medical-equipment-hero.webp', width: 1440, height: 960, alt: 'Editorial illustration of medical equipment in a clinical room' }] },
};
const categories = [
  { title: 'Ultrasound systems', href: '/medical-equipment/ultrasound', image: '/images/blog/ultrasound.webp', description: 'Compare platforms, probes and the options included in each configuration.' },
  { title: 'Endoscopy equipment', href: '/medical-equipment/endoscopy', image: '/images/blog/endoscopy.webp', description: 'Define the scope, processor, light source and accessories in your package.' },
  { title: 'Patient monitors', href: '/medical-equipment/patient-monitors', image: '/images/blog/monitoring.webp', description: 'Explore measurements, modules and accessories for your intended setting.' },
];
const steps = [
  { title: 'Tell us what you need', text: 'Share the equipment, intended use, configuration and budget you have in mind.' },
  { title: 'Review a defined offer', text: 'Confirm the model, condition, accessories and commercial scope before deciding.' },
  { title: 'Plan the handover', text: 'Agree packing, delivery responsibilities and any requested training or integration.' },
];

export default function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Medical Equipment & Healthcare IT', url: 'https://beinmeditech.com', description: metadata.description, isPartOf: { '@id': 'https://beinmeditech.com/#website' } }) }} />
    <section className="home-hero"><div className="site-container home-hero-grid">
      <div className="home-hero-copy">
        <p className="section-label">Medical equipment · Healthcare IT</p>
        <h1>The right technology.<br /><span>A clearer path to care.</span></h1>
        <p className="home-lead">Medical equipment sourcing and healthcare IT, built around your facility’s needs. From the first specification to a clearly defined quotation.</p>
        <div className="hero-actions"><Link href="/medical-equipment" className="btn-primary">Explore equipment <span aria-hidden="true">↗</span></Link><Link href="/request-quote" className="btn-outline">Request a quotation</Link></div>
        <div className="hero-points"><span><ServiceIcon name="check" />Configuration-led sourcing</span><span><ServiceIcon name="check" />International enquiries</span></div>
      </div>
      <figure className="home-hero-figure">
        <Image src="/images/site/medical-equipment-hero.webp" alt="AI-generated editorial view of ultrasound and monitoring equipment in a clinical room" width={1440} height={960} priority sizes="(max-width: 959px) 100vw, 600px" />
        <figcaption>Medical technology, in context. <span>AI-generated editorial illustration.</span></figcaption>
      </figure>
    </div></section>

    <section className="site-section"><div className="site-container">
      <div className="section-heading"><div><p className="section-label">Explore the catalogue</p><h2 className="section-title">Start with your equipment category.</h2></div><Link href="/medical-equipment" className="text-link">View all equipment <span aria-hidden="true">↗</span></Link></div>
      <div className="category-grid">{categories.map((category) => <article key={category.href} className="equipment-category-card">
        <Link href={category.href} tabIndex={-1} aria-hidden="true"><Image src={category.image} alt="" width={1200} height={800} sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 400px" /></Link>
        <div><h3><Link href={category.href}>{category.title}</Link></h3><p>{category.description}</p><Link href={category.href} className="text-link">Explore category <span aria-hidden="true">↗</span></Link></div>
      </article>)}</div>
      <p className="image-note">Category images are illustrative. The current catalogue contains clearly labelled demonstration listings, not live stock offers.</p>
    </div></section>

    <section className="site-section surface-tint"><div className="site-container split-section">
      <figure className="editorial-figure"><Image src="/images/site/equipment-consultation.webp" alt="AI-generated editorial scene of an equipment planning discussion" width={1440} height={960} sizes="(max-width: 959px) 100vw, 560px" /><figcaption>Editorial illustration — not a photograph of our staff.</figcaption></figure>
      <div><p className="section-label">A practical approach</p><h2 className="section-title">More than a model name.<br />A complete requirement.</h2><p className="section-copy">The right enquiry makes the important details visible: equipment condition, included accessories, required options and the work needed for delivery.</p>
        <ul className="feature-list">{['Equipment and accessories described together', 'Technical questions clarified before quotation', 'Delivery and support scope agreed in writing'].map((item) => <li key={item}><ServiceIcon name="check" />{item}</li>)}</ul><Link href="/about" className="text-link">Get to know beIN Meditech <span aria-hidden="true">↗</span></Link>
      </div>
    </div></section>

    <section className="site-section"><div className="site-container">
      <div className="section-heading"><div><p className="section-label">How we can help</p><h2 className="section-title">Equipment and expertise, connected.</h2></div><Link href="/services" className="text-link">All services <span aria-hidden="true">↗</span></Link></div>
      <div className="service-grid">{serviceDirectory.map((service) => <article key={service.href} className="service-card"><span className="icon-tile"><ServiceIcon name={service.icon} /></span><h3><Link href={service.href}>{service.title}</Link></h3><p>{service.description}</p><Link href={service.href} className="text-link" aria-label={'Explore ' + service.title}>Explore service <span aria-hidden="true">↗</span></Link></article>)}</div>
    </div></section>

    <section className="site-section surface-tint"><div className="site-container"><p className="section-label">From enquiry to handover</p><h2 className="section-title">Three clear steps.</h2><div className="process-grid">{steps.map((step, index) => <article key={step.title} className="process-card"><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="site-section"><div className="site-container"><div className="section-heading"><div><p className="section-label">The journal</p><h2 className="section-title">Make a more informed equipment decision.</h2></div><Link href="/blog" className="text-link">All insights <span aria-hidden="true">↗</span></Link></div><ArticleCards articles={[blogArticles[0], blogArticles[8], blogArticles[9]]} layout="related" /></div></section>
    <SiteCTA />
  </>;
}
