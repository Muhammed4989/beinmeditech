import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageIntro from '@/components/content/PageIntro';
import SiteCTA from '@/components/content/SiteCTA';
import ServiceIcon from '@/components/ServiceIcon';
import { serviceDirectory } from '@/lib/services';

export const metadata: Metadata = { title: 'Healthcare Services', description: 'Explore medical device sourcing, healthcare IT consultation, training, custom software and integration services from beIN Meditech.', alternates: { canonical: 'https://beinmeditech.com/services' } };
export default function ServicesPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Healthcare Services', url: 'https://beinmeditech.com/services', hasPart: serviceDirectory.map((service) => ({ '@type': 'Service', name: service.title, description: service.description, url: 'https://beinmeditech.com' + service.href, provider: { '@id': 'https://beinmeditech.com/#organization' } })) }) }} />
    <PageIntro title="Support for the technology behind care." eyebrow="Healthcare services" description="From sourcing a device to planning its place in your facility. Explore the expertise available for your next project." crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
    <section className="site-section"><div className="site-container services-list">{serviceDirectory.map((service) => <article key={service.href} className="service-row">
      <div><span className="icon-tile"><ServiceIcon name={service.icon} /></span><h2>{service.title}</h2><p className="section-copy">{service.description}</p><ul className="feature-list">{service.features.map((feature) => <li key={feature}><ServiceIcon name="check" />{feature}</li>)}</ul><Link href={service.href} className="btn-outline">Explore service <span aria-hidden="true">↗</span></Link></div>
      <figure className="editorial-figure"><Image src={service.image} alt={service.alt} width={1200} height={800} sizes="(max-width: 959px) 100vw, 560px" /><figcaption>AI-generated editorial illustration.</figcaption></figure>
    </article>)}</div></section>
    <SiteCTA title="Have an equipment or technology project in mind?" description="Tell us what you want to achieve and which parts of the project you need help with." href="/contact" label="Discuss your project" />
  </>;
}
