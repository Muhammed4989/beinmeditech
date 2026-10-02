import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Medical Devices Trading',
  description:
    'Explore medical equipment sourcing with beIN Meditech. Discuss the model, configuration, condition, available documentation and delivery requirements before quotation.',
  alternates: { canonical: 'https://beinmeditech.com/services/medical-devices-trading' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Devices Trading',
  url: 'https://beinmeditech.com/services/medical-devices-trading',
  description:
    'beIN Meditech provides a wide array of state-of-the-art medical devices across cardiology, neurology, orthopedics, and more.',
  provider: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    url: 'https://beinmeditech.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'Medical Device Trading',
};

export default function MedicalDevicesTradingPage() {
  return (
    <ServicePage
      title="Medical Devices Trading"
      intro="At beIN Meditech, we specialize in trading a wide array of state-of-the-art medical devices. Our dedication to enhancing healthcare outcomes drives us to provide only the best in diagnostic equipment, therapeutic devices, and surgical tools — all tailored to the dynamic needs of modern medical practices."
      sectionLabel="Features"
      featuresTitle="Discover the Full Spectrum of Our Innovative Medical Technologies"
      bullets={[
        '<strong>Wide Selection:</strong> Choose from an extensive collection of medical devices across various specialties such as cardiology, neurology, orthopedics, and more.',
        '<strong>Latest Technology:</strong> Stay ahead with the latest in medical technology, ensuring your facility is equipped with high-performance, reliable devices.',
        '<strong>Global Sourcing:</strong> Our robust network allows us to source and provide world-class medical equipment from leading manufacturers worldwide.',
      ]}
      highlights={['Enhanced Patient Care', 'Operational Efficiency', 'Customized Solutions', 'After-Sales Support']}
      faqs={[
        { q: 'What types of medical devices does beIN Meditech offer?', a: 'We offer a wide range of state-of-the-art medical devices including diagnostic, therapeutic, and surgical equipment tailored to various medical specialties.' },
        { q: 'What should I check before purchasing a device?', a: 'Request the exact model, configuration, condition report, service history and available documentation. Inspection, warranty and delivery terms should be confirmed in the quotation. Availability and destination-specific requirements must be checked for each device.' },
        { q: 'Can beIN Meditech provide customized medical device solutions?', a: 'Yes, we provide customized solutions based on specific healthcare facility needs and requirements.' },
        { q: 'What is the process for ordering medical devices from beIN Meditech?', a: 'Contact us with your requirements, receive a consultation, and we will guide you through selection, ordering, and delivery.' },
        { q: 'How does beIN Meditech support clients after purchase?', a: 'We provide comprehensive after-sales support including installation, training, and maintenance services.' },
      ]}
      imageUrl="/images/blog/ultrasound.webp"
      imageAlt="AI-generated editorial illustration of a generic ultrasound system"
      schema={schema}
    />
  );
}
