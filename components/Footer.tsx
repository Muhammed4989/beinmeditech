import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Medical Devices Trading', href: '/services/medical-devices-trading' },
  { name: 'Software & Hardware Consultation', href: '/services/software-and-hardware-consultation' },
  { name: 'Training & Support Services', href: '/services/training-and-support-services' },
  { name: 'Custom IT Solutions for Healthcare', href: '/services/custom-it-solutions-for-healthcare' },
  { name: 'Integration Services', href: '/services/medical-integration-services' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://beinmeditech.com/wp-content/uploads/2023/12/Be-1.png"
              alt="beIN Meditech"
              width={140}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Empowering Care, Enhancing Life. Pioneering medical technology solutions across Europe and beyond.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-300 mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-200 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-300 mb-4">Healthcare Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-primary-200 hover:text-white text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-300 mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-primary-200">
              <div className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kirchwerderstraße 12, 23556 Lübeck, Germany</span>
              </div>
              <div className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bahçeşehir 34488, Istanbul, Turkey</span>
              </div>
              <div className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+4915750316400" className="hover:text-white transition-colors">(+49) 1575 031 64 00</a>
              </div>
              <div className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@beinmeditech.com" className="hover:text-white transition-colors">info@beinmeditech.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-400">
          <p>© {new Date().getFullYear()} beIN Meditech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
