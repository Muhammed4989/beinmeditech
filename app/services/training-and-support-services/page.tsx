import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Training & Support Services',
  description:
    'beIN Meditech provides comprehensive training and support services for healthcare professionals — empowering staff to maximize the benefits of medical technology solutions.',
  alternates: { canonical: 'https://beinmeditech.com/services/training-and-support-services' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Training and Support Services',
  url: 'https://beinmeditech.com/services/training-and-support-services',
  description: 'Comprehensive training and ongoing support to maximize the efficacy and utilization of healthcare technologies.',
  provider: {
    '@type': 'Organization',
    name: 'beIN Meditech',
    url: 'https://beinmeditech.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'Healthcare Technology Training',
};

export default function TrainingAndSupportPage() {
  return (
    <ServicePage
      title="Training & Support Services"
      intro="At beIN Meditech, our Training and Support Services are designed to empower healthcare professionals by providing comprehensive training and robust support, ensuring they maximize the benefits of our medical technology solutions. We focus on enhancing user competency and confidence, leading to improved patient care and operational efficiency."
      sectionLabel="Features"
      featuresTitle="Empowering Healthcare with Knowledge and Reliability"
      bullets={[
        '<strong>Customized Training Programs:</strong> Tailored sessions to equip your staff with the skills to utilize new technologies effectively and confidently.',
        '<strong>Dedicated Support:</strong> Responsive and comprehensive assistance for any technical queries or issues — when and where you need it.',
        '<strong>Regular Updates and Refreshers:</strong> Ensuring your team is up-to-date with the latest advancements, best practices, and technology updates.',
      ]}
      highlights={['Customized Training Programs', 'Dedicated Support', 'Regular Refreshers', 'Proactive Problem-Solving']}
      faqs={[
        { q: 'What types of training does beIN Meditech offer?', a: 'We offer customized training programs tailored to your specific medical technologies and staff needs.' },
        { q: 'How does your support service respond to technical issues?', a: 'Our dedicated support team provides fast, comprehensive assistance for any technical queries or issues.' },
        { q: 'What makes your training programs effective?', a: 'Our programs are hands-on, tailored to your environment, and led by experienced professionals.' },
        { q: 'How often are updates and refreshers provided?', a: 'We provide regular updates and refresher sessions to keep your team proficient with the latest technologies.' },
        { q: 'What is your approach to problem-solving?', a: 'We proactively identify and solve potential issues before they impact operations, ensuring smooth functionality.' },
      ]}
      imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=60"
      imageAlt="Training and Support Services for healthcare professionals – beIN Meditech"
      schema={schema}
    />
  );
}
