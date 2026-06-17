import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Medical Integration Services',
  description:
    'beIN Meditech delivers seamless medical integration services — combining new healthcare technologies with existing systems for cohesive, efficient, and disruption-free operations.',
  alternates: { canonical: 'https://beinmeditech.com/services/medical-integration-services' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Integration Services',
  url: 'https://beinmeditech.com/services/medical-integration-services',
  description: 'Seamless integration of medical technologies and IT systems for a cohesive and efficient healthcare environment.',
  provider: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    url: 'https://beinmeditech.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'Healthcare System Integration',
};

export default function MedicalIntegrationServicesPage() {
  return (
    <ServicePage
      title="Medical Integration Services"
      intro="At beIN Meditech, our Integration Services are designed to seamlessly combine new technologies with existing healthcare systems, ensuring smooth operations and enhanced care delivery. We focus on creating cohesive, efficient, and user-friendly environments for all healthcare stakeholders — from clinical staff to IT administrators."
      sectionLabel="Features"
      featuresTitle="Streamlining Your Healthcare Operations with Expert Integration"
      bullets={[
        '<strong>Comprehensive System Analysis:</strong> Evaluating your current infrastructure to identify the optimal integration approach for your facility.',
        '<strong>Custom Integration Planning:</strong> Tailoring the integration process to meet your specific healthcare operations and workflow requirements.',
        '<strong>Efficient Implementation:</strong> Streamlined execution with minimal disruption to ongoing clinical operations.',
        '<strong>Post-Integration Optimization:</strong> Continuous support and adjustments to ensure peak system performance long after go-live.',
      ]}
      highlights={['Enhanced Patient Care', 'Operational Efficiency', 'Customized Solutions', 'After-Sales Support']}
      faqs={[
        { q: 'What are Integration Services?', a: 'They involve combining new technology systems seamlessly with existing healthcare infrastructures to create a unified, efficient environment.' },
        { q: 'How do you ensure smooth integration?', a: 'We conduct comprehensive system analysis and tailor the integration plan to suit your specific needs before any implementation begins.' },
        { q: 'What\'s the typical timeline for integration?', a: 'Timelines vary depending on system complexity, but we focus on efficiency and minimal operational disruption throughout the process.' },
        { q: 'How do you handle post-integration issues?', a: 'We offer ongoing optimization and responsive support to ensure continued peak performance after deployment.' },
        { q: 'Can you integrate a wide range of healthcare technologies?', a: 'Yes, we specialize in integrating a diverse array of medical devices, EMR systems, and IT solutions from multiple vendors.' },
      ]}
      imageUrl="https://beinmeditech.com/wp-content/uploads/2024/01/medical-banner-with-doctor-wearing-stethoscope-1024x683.jpg"
      imageAlt="Medical Integration Services – beIN Meditech"
      schema={schema}
    />
  );
}
