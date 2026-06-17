import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'beIN Meditech – Empowering Care, Enhancing Life',
  description:
    'beIN Meditech leads medical technology innovation — offering state-of-the-art medical devices, healthcare IT solutions, training, and integration services across Germany and worldwide.',
  alternates: { canonical: 'https://beinmeditech.com' },
};

const services = [
  {
    title: 'Medical Devices Trading',
    desc: 'State-of-the-art medical devices and tools for diverse medical fields, ensuring quality and precision in healthcare delivery.',
    href: '/services/medical-devices-trading',
    icon: '🩺',
  },
  {
    title: 'Software & Hardware Consultation',
    desc: 'Expert consulting for medical software and hardware integration, enhancing facility efficiency and patient care.',
    href: '/services/software-and-hardware-consultation',
    icon: '💻',
  },
  {
    title: 'Custom IT Solutions for Healthcare',
    desc: 'Tailored software development for healthcare management, offering innovative and secure data solutions.',
    href: '/services/custom-it-solutions-for-healthcare',
    icon: '⚙️',
  },
  {
    title: 'Training & Support Services',
    desc: 'Comprehensive training and ongoing support to maximize the efficacy and utilization of healthcare technologies.',
    href: '/services/training-and-support-services',
    icon: '🎓',
  },
  {
    title: 'Integration Services',
    desc: 'Seamless integration of medical technologies and IT systems for a cohesive and efficient healthcare environment.',
    href: '/services/medical-integration-services',
    icon: '🔗',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '30+', label: 'Countries Worldwide' },
  { value: '95%', label: 'Customer Retention' },
  { value: '8+', label: 'Global Brand Partners' },
];

const achievements = [
  'Solutions deployed in over 30 countries globally',
  '5 patented medical technologies developed',
  'Multiple industry awards for excellence in healthcare innovation',
  'Robust network with partnerships across leading medical institutions',
  '95% customer retention rate — a testament to lasting trust',
  'Significant contributions to community health initiatives',
];

const newsArticles = [
  {
    title: 'The Revolution of Medicine through Artificial Intelligence',
    date: 'May 26, 2024',
    href: 'https://beinmeditech.com/the-revolution-of-medicine-through-artificial-intelligence/',
    summary: 'Artificial Intelligence has revolutionized medicine, from diagnostic imaging to personalized treatment plans.',
  },
  {
    title: 'The Vital Role of Medical Image Processing in Diagnosis and Treatment',
    date: 'February 23, 2024',
    href: 'https://beinmeditech.com/medical-image-processing-diagnosis-and-treatment/',
    summary: 'Medical image processing is transforming how clinicians diagnose and treat complex conditions.',
  },
  {
    title: 'Heart Health Monitoring with AI and Deep Learning',
    date: 'February 12, 2024',
    href: 'https://beinmeditech.com/heart-health-monitoring-with-ai-and-deep-learning/',
    summary: 'Deep learning models are enabling earlier, more accurate detection of cardiac anomalies.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'beIN Meditech – Empowering Care, Enhancing Life',
  url: 'https://beinmeditech.com',
  description: 'beIN Meditech is a leading medical technology company providing medical devices, healthcare IT, and integration services.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable'],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-white pt-24 pb-0 overflow-hidden min-h-[85vh] flex items-center">
        {/* Light lavender gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-primary-50 via-primary-100/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-100/50 blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="py-12">
              <a href="tel:+4915750316400" className="inline-flex items-center gap-2 text-orange font-semibold text-sm mb-6 hover:text-orange-600 transition-colors">
                <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </span>
                (+49) 1575 031 64 00
              </a>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-600 mb-4 speakable">
                Empowering Care,<br />
                <span className="text-primary-600">Enhancing Life</span>
              </h1>
              <p className="text-xl text-orange font-bold mb-4">Innovation · Quality · Trust</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                beIN Meditech stands at the forefront of medical technology innovation, revolutionizing healthcare through cutting-edge medical devices and advanced IT solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>

              {/* Quick stats */}
              <div className="flex gap-8 mt-10 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-extrabold text-primary-600">8+</p>
                  <p className="text-gray-500 text-sm">Brands Joined</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-primary-600">85%</p>
                  <p className="text-gray-500 text-sm">Market Expansion</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-primary-600">30+</p>
                  <p className="text-gray-500 text-sm">Countries</p>
                </div>
              </div>
            </div>

            {/* Right side — purple circle with medical image */}
            <div className="hidden lg:flex justify-center items-end self-end">
              <div className="relative w-[520px] h-[520px]">
                {/* Large purple circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-800 opacity-90" />
                {/* Medical tech image inside */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src="https://beinmeditech.com/wp-content/uploads/2023/12/Untitled-design-24-1.png"
                    alt="beIN Meditech medical technology solutions"
                    width={480}
                    height={480}
                    priority
                    className="object-contain scale-110"
                  />
                </div>
                {/* Floating stat badge */}
                <div className="absolute bottom-8 left-0 -translate-x-1/3 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-600 text-xl">85%</p>
                    <p className="text-gray-500 text-xs">Market Expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-0">
              {/* Heading column */}
              <div className="md:col-span-1 pr-8 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-3">Why work with Us</h2>
                <p className="text-primary-200 text-sm leading-relaxed">
                  Unparalleled innovation, dedicated support, and a commitment to revolutionizing healthcare outcomes
                </p>
              </div>

              {/* Cards */}
              {[
                { title: 'A to Z Service', desc: 'Comprehensive support from consultation to post-implementation.', highlight: false },
                { title: 'Cost Effective', desc: 'Advanced, budget-friendly solutions for high ROI.', highlight: true },
                { title: 'Innovative Solutions', desc: 'Leading-edge medical technology for transformative care.', highlight: false },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 mx-2 ${item.highlight ? 'bg-orange' : 'bg-[#F3F6FD]0'}`}
                >
                  <div className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center ${item.highlight ? 'bg-orange-600' : 'bg-primary-600'}`}>
                    <svg className="w-5 h-5 text-orange-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${item.highlight ? 'text-orange-50' : 'text-primary-200'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://beinmeditech.com/wp-content/uploads/2023/12/card.png"
                alt="Medical technology expertise"
                width={540}
                height={380}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label">About beIN Meditech</p>
              <h2 className="section-title">10+ Years of Experience in the Medical Sector</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded on the principles of innovation, quality, and integrity, we have dedicated ourselves to advancing the field of medical technology.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-extrabold text-primary-700">{s.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Our Services</p>
            <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore beIN Meditech's full suite of services — where innovative medical technology meets tailored healthcare solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article key={svc.href} className="card group">
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link
                  href={svc.href}
                  className="text-primary-600 font-semibold text-sm hover:text-primary-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Achievement</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">Our Achievements at beIN Meditech</h2>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-primary-100">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Satisfied Clients' },
                { value: '200+', label: 'Medical Centers' },
                { value: '8+', label: 'Brands Joined' },
                { value: '50+', label: 'Experts' },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-700 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-primary-300 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Clients Say About beIN Meditech</h2>
          <div className="mt-10 bg-[#F3F6FD] rounded-2xl p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: '30%', label: 'Increased Efficiency' },
                { value: '80%', label: 'Customer Satisfaction' },
                { value: '15+', label: 'Countries Worldwide' },
                { value: '20+', label: 'Specialized Fields' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-primary-700">{s.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
              "The training and ongoing support provided by beIN Meditech have been exceptional. Their team's dedication ensures that our staff are confident and well-prepared to use the latest medical technologies."
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Ahmet Alzen</p>
              <p className="text-gray-500 text-sm">Doctor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">News</p>
            <h2 className="section-title">Latest News & Articles</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Stay updated with the latest breakthroughs in medical technology and healthcare solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <article key={article.href} className="card">
                <time className="text-xs text-primary-600 font-semibold uppercase tracking-wide">{article.date}</time>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 leading-snug">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.summary}</p>
                <a
                  href={article.href}
                  className="text-primary-600 font-semibold text-sm hover:text-primary-800 inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Your Hospital with Advanced Medical Technology</h2>
          <p className="text-primary-200 text-lg mb-8">
            Reach out to beIN Meditech and discover how our solutions can elevate patient care and streamline your healthcare services.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-orange hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
