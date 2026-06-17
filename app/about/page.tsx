import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded on innovation, quality, and integrity — beIN Meditech has 10+ years of experience advancing medical technology. Learn about our mission, vision, and expert team.',
  alternates: { canonical: 'https://beinmeditech.com/about' },
};

const process = [
  {
    step: '01',
    title: 'Consultation & Customization',
    desc: 'We start by understanding your specific needs, then tailor our medical technology solutions to fit perfectly within your healthcare environment.',
  },
  {
    step: '02',
    title: 'Implementation & Training',
    desc: 'Our team of experts seamlessly integrates our solutions into your system, followed by comprehensive training for your staff.',
  },
  {
    step: '03',
    title: 'Ongoing Support & Optimization',
    desc: 'After implementation, we provide continuous support and regular updates, ensuring your solutions evolve with technological advances.',
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About beIN Meditech',
  url: 'https://beinmeditech.com/about',
  description: 'beIN Meditech has 10+ years of experience in the medical sector, founded on innovation, quality, and integrity.',
  mainEntity: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    foundingDate: '2013',
    description: 'A leading medical technology company providing medical devices, healthcare IT, and integration services.',
  },
};

export default function AboutPage() {
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
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
        </div>
      </section>

      {/* 10+ Years section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://beinmeditech.com/wp-content/uploads/2023/12/31.png"
                alt="beIN Meditech medical technology expertise"
                width={540}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div>
              <p className="section-label">About beIN Meditech</p>
              <h2 className="section-title">10+ Years of Experience in the Medical Sector</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded on the principles of innovation, quality, and integrity, we have dedicated ourselves to advancing the field of medical technology. Over a decade of focused expertise has made beIN Meditech a trusted partner for hospitals, clinics, and healthcare facilities worldwide.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Tailored Expertise', desc: 'Customized solutions to meet your specific medical needs and operational goals.' },
                  { title: 'Quality Commitment', desc: 'Adhering to the highest international standards for safety and clinical excellence.' },
                  { title: 'Global Insights', desc: 'International innovation coupled with deep local market understanding.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F3F6FD] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F3F6FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Vision',
                icon: '🔭',
                text: 'To establish beIN Meditech as a leading force in the medical technology sector, renowned for its commitment to quality, innovation, and the seamless integration of healthcare technology solutions worldwide.',
              },
              {
                title: 'Our Mission',
                icon: '🎯',
                text: 'To empower the healthcare industry by providing cutting-edge medical devices and innovative IT solutions, enhancing patient care and medical practices globally.',
              },
              {
                title: 'Our Support',
                icon: '🛡️',
                text: 'beIN Meditech prioritizes continuous, reliable support to ensure the successful implementation and performance of our medical technologies. We are committed to your satisfaction and long-term success.',
              },
              {
                title: 'Our Impact',
                icon: '🌍',
                text: 'Our technologies and solutions are shaping a more efficient and accessible healthcare future worldwide, significantly improving patient outcomes and transforming healthcare practices.',
              },
            ].map((card) => (
              <div key={card.title} className="card">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">We Provide the Best Service for Hospitals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unparalleled innovation, dedicated support, and a commitment to revolutionizing healthcare outcomes for every client we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'A to Z Service', desc: 'Comprehensive support from consultation to post-implementation, all under one roof.', icon: '📋' },
              { title: 'Innovative Solutions', desc: 'Leading-edge medical technology for transformative care delivery.', icon: '💡' },
              { title: 'Affordable Price', desc: 'Advanced, budget-friendly solutions for high return on investment.', icon: '💰' },
              { title: '24/7 Support', desc: 'Reliable round-the-clock support to maximize performance of your medical technology.', icon: '🕐' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">Easy Steps to Get Your Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Navigate your path to cutting-edge healthcare with three clear steps to implement beIN Meditech solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((p) => (
              <div key={p.step} className="card relative">
                <p className="text-6xl font-extrabold text-primary-100 absolute top-4 right-4 select-none">{p.step}</p>
                <p className="text-orange font-bold text-sm mb-2">Step {p.step}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Empower Your Hospital or Clinic with Advanced Medical Technology</h2>
          <p className="text-primary-200 mb-8">Reach out to beIN Meditech and discover how our solutions can elevate patient care and streamline your healthcare services.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-orange hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
