import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Services',
  description:
    'beIN Meditech offers a comprehensive suite of healthcare services: medical device trading, software & hardware consultation, training, custom IT solutions, and system integration.',
  alternates: { canonical: 'https://beinmeditech.com/services' },
};

const services = [
  {
    title: 'Medical Devices Trading',
    desc: 'State-of-the-art diagnostic, therapeutic, and surgical devices sourced from certified global manufacturers — tailored to the dynamic needs of modern medical practices.',
    href: '/services/medical-devices-trading',
    icon: '🩺',
    features: ['Wide device selection across specialties', 'Latest technology guaranteed', 'Global sourcing network', 'After-sales support'],
  },
  {
    title: 'Software & Hardware Consultation',
    desc: 'Expert consulting for medical software and hardware integration, from initial assessment to ongoing support — enhancing facility efficiency and patient care.',
    href: '/services/software-and-hardware-consultation',
    icon: '💻',
    features: ['Comprehensive system assessments', 'Seamless integration expertise', 'Advanced security protocols', 'Continuous updates'],
  },
  {
    title: 'Training & Support Services',
    desc: 'Comprehensive training programs and robust technical support to empower your healthcare professionals and maximize the benefits of medical technology.',
    href: '/services/training-and-support-services',
    icon: '🎓',
    features: ['Customized training programs', 'Dedicated technical support', 'Regular refresher sessions', 'Proactive problem-solving'],
  },
  {
    title: 'Custom IT Solutions for Healthcare',
    desc: 'Tailored software development for healthcare management — innovative, secure, and compliant data solutions built specifically for your facility\'s needs.',
    href: '/services/custom-it-solutions-for-healthcare',
    icon: '⚙️',
    features: ['Tailored software development', 'Streamlined data management', 'Regulatory compliance', 'Scalable architecture'],
  },
  {
    title: 'Integration Services',
    desc: 'Seamless integration of new technologies with existing healthcare systems — ensuring smooth operations, minimal disruption, and enhanced care delivery.',
    href: '/services/medical-integration-services',
    icon: '🔗',
    features: ['Comprehensive system analysis', 'Custom integration planning', 'Efficient implementation', 'Post-integration optimization'],
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare Services – beIN Meditech',
  url: 'https://beinmeditech.com/services',
  description: 'Comprehensive healthcare services including medical device trading, IT consultation, training, and system integration.',
  hasPart: services.map((s) => ({
    '@type': 'Service',
    name: s.title,
    url: `https://beinmeditech.com${s.href}`,
    description: s.desc,
    provider: { '@type': 'Organization', name: 'beIN Meditech' },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Page hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-300 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Healthcare Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Healthcare Services</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Explore beIN Meditech's comprehensive suite of services — where innovative medical technology meets tailored healthcare solutions.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((svc, i) => (
              <article
                key={svc.href}
                className={`grid lg:grid-cols-2 gap-12 items-center py-12 ${i !== services.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className={i % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="text-4xl mb-4">{svc.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="btn-primary">
                    Learn More
                  </Link>
                </div>
                <div className={`bg-[#F3F6FD] rounded-2xl p-12 flex items-center justify-center text-8xl ${i % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                  {svc.icon}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Facility?</h2>
          <p className="text-primary-200 mb-8">Contact beIN Meditech for a free online consultation and discover the right solution for your needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-orange hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
