'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { serviceDirectory } from '@/lib/services';

const links = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/medical-equipment', label: 'Equipment' }, { href: '/blog', label: 'Insights' }, { href: '/contact', label: 'Contact' }];

export default function Header() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const close = () => { setMobileOpen(false); setServicesOpen(false); };

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    if (!mobileOpen && !servicesOpen) return;
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) close(); };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (mobileOpen) menuButton.current?.focus(); else servicesButton.current?.focus();
      close();
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [mobileOpen, servicesOpen]);

  return <header ref={header} className="site-header" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setServicesOpen(false); }}>
    <div className="site-container header-inner">
      <Link href="/" onClick={close} className="brand-link" aria-label="beIN Meditech home"><BrandLogo priority /></Link>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {links.slice(0, 3).map((link) => <Link key={link.href} href={link.href} className="nav-link" aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link>)}
        <div className="services-navigation">
          <button ref={servicesButton} type="button" className="nav-link" onClick={() => setServicesOpen((open) => !open)} aria-expanded={servicesOpen} aria-controls="desktop-services" data-active={active('/services') || undefined}>Services <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg></button>
          {servicesOpen && <div id="desktop-services" className="services-panel">
            <Link href="/services" onClick={close} className="services-overview">Explore all services <span aria-hidden="true">↗</span></Link>
            {serviceDirectory.map((service) => <Link key={service.href} href={service.href} onClick={close} aria-current={pathname === service.href ? 'page' : undefined}>{service.title}</Link>)}
          </div>}
        </div>
        {links.slice(3).map((link) => <Link key={link.href} href={link.href} className="nav-link" aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link>)}
      </nav>
      <Link href="/request-quote" className="btn-primary header-quote">Request a quote <span aria-hidden="true">↗</span></Link>
      <button ref={menuButton} type="button" className="mobile-menu-button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen((open) => !open); setServicesOpen(false); }}>
        <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={mobileOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
      </button>
    </div>
    {mobileOpen && <nav className="mobile-navigation site-container" id="mobile-navigation" aria-label="Mobile navigation">
      {links.map((link) => <Link key={link.href} href={link.href} onClick={close} aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link>)}
      <button type="button" aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen((open) => !open)}>Services <span aria-hidden="true">{servicesOpen ? '−' : '+'}</span></button>
      {servicesOpen && <div id="mobile-services"><Link href="/services" onClick={close}>All services</Link>{serviceDirectory.map((service) => <Link key={service.href} href={service.href} onClick={close}>{service.title}</Link>)}</div>}
      <Link href="/request-quote" className="btn-primary" onClick={close}>Request a quotation</Link>
    </nav>}
  </header>;
}
