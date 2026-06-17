import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Software & Hardware Consultation',
  description:
    'beIN Meditech offers expert software and hardware consultation for healthcare facilities — seamlessly integrating systems, enhancing efficiency, and securing medical data.',
  alternates: { canonical: 'https://beinmeditech.com/services/software-and-hardware-consultation' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software and Hardware Consultation',
  url: 'https://beinmeditech.com/services/software-and-hardware-consultation',
  description: 'Expert consulting for medical software and hardware integration, enhancing facility efficiency and patient care.',
  provider: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    url: 'https://beinmeditech.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'Healthcare IT Consultation',
};

export default function SoftwareHardwareConsultationPage() {
  return (
    <ServicePage
      title="Software & Hardware Consultation"
      intro="Explore our tailored consultation services designed to optimize your medical software and hardware. Our team of experts assists in seamless integration and updates, ensuring your technology infrastructure is efficient, secure, and aligned with your healthcare delivery goals. From initial assessment to ongoing support, trust beIN Meditech for all your software and hardware needs."
      sectionLabel="Features"
      featuresTitle="Enhancing Your Medical Infrastructure"
      bullets={[
        '<strong>Comprehensive Assessments:</strong> Detailed evaluations to pinpoint improvement opportunities in your current systems.',
        '<strong>Seamless Integration:</strong> Expertly merging software and hardware for enhanced functionality and efficiency across all departments.',
        '<strong>Continuous Support:</strong> Ongoing assistance ensuring systems remain up-to-date, secure, and effective over time.',
      ]}
      highlights={['Expert Guidance', 'Customized Solutions', 'Advanced Security', 'Latest Updates']}
      faqs={[
        { q: 'What does the software and hardware consultation service include?', a: 'Our service includes evaluating your current systems, recommending improvements, integrating new solutions, and providing ongoing support.' },
        { q: 'How can your service improve our healthcare facility\'s operations?', a: 'By optimizing your software and hardware, we can enhance efficiency, security, and patient care quality.' },
        { q: 'What makes beIN Meditech\'s consultation service unique?', a: 'We offer personalized, expert solutions backed by deep industry knowledge and continuous support.' },
        { q: 'How do you ensure minimal disruption during integration?', a: 'Our team plans meticulously and executes seamlessly, ensuring quick and efficient integration with minimal downtime.' },
        { q: 'What kind of post-integration support do you offer?', a: 'We provide comprehensive support including troubleshooting, updates, and regular check-ins to ensure smooth operation.' },
      ]}
      imageUrl="https://beinmeditech.com/wp-content/uploads/2024/01/rm373batch7-banner-06-s88-1024x683.jpg"
      imageAlt="Software and Hardware Consultation for healthcare – beIN Meditech"
      schema={schema}
    />
  );
}
