import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Custom IT Solutions for Healthcare',
  description:
    'beIN Meditech develops tailored IT solutions for healthcare facilities — secure, compliant, and scalable software built specifically for your operational and clinical needs.',
  alternates: { canonical: 'https://beinmeditech.com/services/custom-it-solutions-for-healthcare' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom IT Solutions for Healthcare',
  url: 'https://beinmeditech.com/services/custom-it-solutions-for-healthcare',
  description: 'Tailored software development for healthcare management, offering innovative and secure data solutions.',
  provider: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    url: 'https://beinmeditech.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'Custom Healthcare Software Development',
};

export default function CustomITSolutionsPage() {
  return (
    <ServicePage
      title="Custom IT Solutions for Healthcare"
      intro="Discover personalized technology solutions with beIN Meditech's Custom IT Solutions for Healthcare. We specialize in developing and implementing software tailored to meet the unique challenges of your healthcare facility, enhancing efficiency, patient care, and data management — all while meeting stringent regulatory requirements."
      sectionLabel="Features"
      featuresTitle="Discover the Full Spectrum of Our Innovative Healthcare IT Technologies"
      bullets={[
        '<strong>Tailored Software Development:</strong> Customized solutions crafted to fit the specific needs of your healthcare environment, from EMR systems to patient portals.',
        '<strong>Streamlined Data Management:</strong> Advanced tools for efficient, secure, and compliant data handling — protecting patient privacy at every layer.',
        '<strong>Integration Excellence:</strong> Seamless integration of new solutions with existing systems, ensuring continuity and minimal disruption.',
      ]}
      highlights={['Advanced Security Protocols', 'User-Friendly Design', 'Regulatory Compliance', 'Scalable Architecture']}
      faqs={[
        { q: 'What exactly are custom IT solutions in healthcare?', a: 'They are tailored software and systems designed to meet the unique needs of healthcare facilities, from clinical workflows to administrative management.' },
        { q: 'How does beIN Meditech ensure the solutions fit our specific needs?', a: 'We conduct thorough assessments and work closely with you to understand and implement solutions that align with your requirements.' },
        { q: 'Can the solutions integrate with our existing systems?', a: 'Yes, our solutions are designed for seamless integration with your current infrastructure, including legacy systems.' },
        { q: 'What about data security and patient privacy?', a: 'We prioritize advanced security protocols and full compliance with healthcare regulations including GDPR to protect data integrity.' },
        { q: 'How does beIN Meditech provide ongoing support?', a: 'We offer continuous optimization, regular updates, and responsive support to ensure your systems function smoothly at all times.' },
      ]}
      imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=60"
      imageAlt="Custom IT Solutions for Healthcare – beIN Meditech"
      schema={schema}
    />
  );
}
