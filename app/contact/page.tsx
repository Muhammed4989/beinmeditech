import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with beIN Meditech — your partner in advanced medical solutions. Offices in Lübeck, Germany and Istanbul, Turkey. Call, email, or send us a message.',
  alternates: { canonical: 'https://beinmeditech.com/contact' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact beIN Meditech',
  url: 'https://beinmeditech.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    telephone: '+4917641963598',
    email: 'info@beinmeditech.com',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Kirchwerderstraße 12',
        addressLocality: 'Lübeck',
        postalCode: '23556',
        addressCountry: 'DE',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bahçeşehir',
        postalCode: '34488',
        addressRegion: 'Istanbul',
        addressCountry: 'TR',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-300 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="text-primary-200 mt-3 text-lg">Your Partner in Advanced Medical Solutions</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">Connect with beIN Meditech</h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Whether you need a free consultation, have questions about our medical technology solutions, or want to explore a partnership — our team is ready to help.
              </p>

              <div className="space-y-6">
                {/* Germany */}
                <address className="not-italic card">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#F3F6FD] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🇩🇪</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Germany</h3>
                      <p className="text-gray-600 text-sm">Kirchwerderstraße 12, 23556 Lübeck</p>
                    </div>
                  </div>
                </address>

                {/* Turkey */}
                <address className="not-italic card">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#F3F6FD] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🇹🇷</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Turkey</h3>
                      <p className="text-gray-600 text-sm">Bahçeşehir 34488, Istanbul</p>
                    </div>
                  </div>
                </address>

                {/* Phone */}
                <div className="card">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#F3F6FD] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+4917641963598" className="text-orange hover:text-orange-600 font-medium">
                        (+49) 176 419 63598
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#F3F6FD] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                      <a href="mailto:info@beinmeditech.com" className="text-orange hover:text-orange-600 font-medium">
                        info@beinmeditech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <iframe
          title="beIN Meditech location – Kirchwerderstraße 12, 23556 Lübeck, Germany"
          src="https://maps.google.com/maps?q=Kirchwerderstra%C3%9Fe+12,+23556+L%C3%BCbeck+Germany&t=m&z=14&output=embed"
          width="100%"
          height="400"
          className="border-0 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
