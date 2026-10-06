import type { Metadata } from 'next';
import Link from 'next/link';
import { companyPhone } from '@/lib/company-contact';
import PageIntro from '@/components/content/PageIntro';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How beIN Meditech handles website enquiries, contact information and technical data.',
  alternates: { canonical: 'https://beinmeditech.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy Policy" crumbs={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy' }]} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 site-legal">
          <p className="text-gray-600">Last updated: 6 October 2026</p>

          <h2>1. Introduction</h2>
          <p>beIN Meditech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2>2. Information We Collect</h2>
          <p>We may collect personal information you voluntarily provide to us, including:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company details</li>
            <li><strong>Inquiry Information:</strong> Details about your healthcare facility and service needs</li>
            <li><strong>Communication Data:</strong> Records of your correspondence with us</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data via cookies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide our services</li>
            <li>To improve our website and service offerings</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To send relevant communications about our services (with your consent)</li>
            <li>To protect our rights and ensure the security of our platform</li>
          </ul>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>For individuals in the European Economic Area, we process your personal data based on the following legal grounds:</p>
          <ul>
            <li><strong>Consent:</strong> Where you have given clear consent for us to process your data</li>
            <li><strong>Contractual Necessity:</strong> Processing necessary for the performance of a contract</li>
            <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
            <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
          </ul>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>Our website is hosted on Vercel. Contact and quotation submissions are processed by the website server and sent to our company mailbox through Rackspace. When you choose a prepared email or WhatsApp link, your chosen app handles the message after you review and send it. Please do not include patient or sensitive medical information.</p>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li>Service providers who assist us in operating our website and business</li>
            <li>Professional advisers including legal and compliance consultants</li>
            <li>Regulatory authorities when required by applicable law</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. When no longer needed, we securely delete or anonymise your data.</p>

          <h2>7. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access your personal data held by us</li>
            <li>Rectify inaccurate or incomplete data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Restrict or object to processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>The public website does not currently load our optional Google Tag Manager container. Hosting and security providers may process technical request data to serve and protect the website. Optional tracking will not be enabled without an appropriate visitor-choice setup. Links to external services are governed by those services&apos; privacy practices.</p>

          <h2>9. International Data Transfers</h2>
          <p>Our hosting, email and other service providers may process information outside your country. Contact us if you need details about the providers and arrangements relevant to your enquiry.</p>

          <h2>10. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@beinmeditech.com" className="text-orange">info@beinmeditech.com</a><br />
            <strong>Phone:</strong> <a href={companyPhone.href} className="text-orange">{companyPhone.display}</a><br />
            <strong>Address:</strong> Kirchwerderstraße 12, 23556 Lübeck, Germany
          </p>
        </div>
      </section>
    </>
  );
}
