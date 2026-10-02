import Link from 'next/link';

export default function SiteCTA({ title = 'Let’s define the right equipment for your facility.', description = 'Share the model, configuration and delivery requirements. We’ll help you turn them into a clear enquiry.', href = '/request-quote', label = 'Request a quotation' }: { title?: string; description?: string; href?: string; label?: string }) {
  return <section className="site-cta"><div className="site-container site-cta-inner">
    <div><p className="section-label">Your next step</p><h2>{title}</h2><p>{description}</p></div>
    <Link href={href} className="btn-primary">{label}<span aria-hidden="true">↗</span></Link>
  </div></section>;
}
