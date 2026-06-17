'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Medical Devices Trading', href: '/services/medical-devices-trading' },
  { name: 'Software & Hardware Consultation', href: '/services/software-and-hardware-consultation' },
  { name: 'Training & Support Services', href: '/services/training-and-support-services' },
  { name: 'Custom IT Solutions for Healthcare', href: '/services/custom-it-solutions-for-healthcare' },
  { name: 'Integration Services', href: '/services/medical-integration-services' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://beinmeditech.com/wp-content/uploads/2023/12/beINmeditech-random-fotor-bg-remover-20231228181255.png"
              alt="beIN Meditech – Medical Devices & Healthcare IT Solutions"
              width={160}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-orange font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange font-medium transition-colors">
              About Us
            </Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-orange font-medium transition-colors"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Healthcare Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-orange transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="btn-primary text-sm py-2.5">
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 space-y-1" aria-label="Mobile navigation">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
            <div>
              <button
                className="flex items-center gap-1 w-full px-3 py-2 text-gray-700 font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Healthcare Services
                <svg className={`w-4 h-4 ml-auto transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-orange"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="block mx-3 mt-2 btn-primary text-sm text-center" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
