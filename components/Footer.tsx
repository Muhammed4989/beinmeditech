import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { serviceDirectory } from '@/lib/services';

export default function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-grid">
      <div><Link href="/" className="footer-logo" aria-label="beIN Meditech home"><BrandLogo /></Link><p>Medical equipment sourcing and healthcare technology, with clarity from enquiry to handover.</p></div>
      <div><h2>Explore</h2><ul>{[
        ['Home', '/'], ['About us', '/about'], ['Medical equipment', '/medical-equipment'], ['Insights & guides', '/blog'], ['Contact', '/contact'], ['Request a quote', '/request-quote'],
      ].map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
      <div><h2><Link href="/services">Healthcare services</Link></h2><ul>{serviceDirectory.map((service) => <li key={service.href}><Link href={service.href}>{service.title}</Link></li>)}</ul></div>
      <div><h2>Let’s talk</h2><address><p>Kirchwerderstraße 12<br />23556 Lübeck, Germany</p><p className="mt-3">Bahçeşehir 34488<br />Istanbul, Türkiye</p><p className="mt-4"><a href="tel:+4917641963598">+49 176 419 63598</a><br /><a href="mailto:info@beinmeditech.com">info@beinmeditech.com</a></p></address></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} beIN Meditech. All rights reserved.</p><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link>{[['LinkedIn', 'https://www.linkedin.com/company/beinmeditech'], ['Facebook', 'https://www.facebook.com/beinmeditech'], ['Instagram', 'https://www.instagram.com/beinmeditech']].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div></div>
  </div></footer>;
}
