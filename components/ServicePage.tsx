import Link from 'next/link';
import Image from 'next/image';

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageProps {
  title: string;
  intro: string;
  sectionLabel: string;
  featuresTitle: string;
  bullets: string[];
  highlights: string[];
  faqs: FAQ[];
  imageUrl: string;
  imageAlt: string;
  schema: Record<string, unknown>;
}

const processSteps = [
  {
    step: '01',
    title: 'Initiate Contact',
    desc: 'Reach out to discuss your needs with our team, exploring the vast range of medical technologies we offer.',
  },
  {
    step: '02',
    title: 'Tailored Implementation',
    desc: 'Receive customized solutions designed and implemented to fit seamlessly into your healthcare environment.',
  },
  {
    step: '03',
    title: 'Continuous Support',
    desc: 'Benefit from our comprehensive post-implementation support, ensuring long-term success and optimization of your medical systems.',
  },
];

export default function ServicePage({
  title,
  intro,
  sectionLabel,
  featuresTitle,
  bullets,
  highlights,
  faqs,
  imageUrl,
  imageAlt,
  schema,
}: ServicePageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-300 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
        </div>
      </section>

      {/* Intro + image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{intro}</p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 bg-[#F3F6FD] rounded-lg px-4 py-3 text-sm font-medium text-primary-600">
                    <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="font-semibold text-gray-900 mb-3">Contact us directly</p>
                <address className="not-italic space-y-2 text-sm text-gray-600">
                  <p>🇩🇪 Kirchwerderstraße 12, 23556 Lübeck, Germany</p>
                  <p>📧 <a href="mailto:info@beinmeditech.com" className="text-orange hover:underline">info@beinmeditech.com</a></p>
                </address>
              </div>
            </div>
            <div>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={420}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F3F6FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">{sectionLabel}</p>
            <h2 className="section-title">{featuresTitle}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">Easy Steps to Get Your Solution</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((p) => (
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-gray-900 hover:text-orange select-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center p-8 bg-[#F3F6FD] rounded-2xl">
            <p className="font-semibold text-gray-900 mb-2">Don't see the answer you need?</p>
            <p className="text-gray-600 text-sm mb-5">Get a free online consultation from our team.</p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
