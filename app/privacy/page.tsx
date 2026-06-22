import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'beIN Meditech privacy policy — how we collect, use, and protect your personal data in compliance with GDPR and international standards.',
  alternates: { canonical: 'https://beinmeditech.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-300 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <p className="text-gray-600">Last updated: June 2026</p>

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
          <p>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Essential cookies are necessary for the website to function, while analytics cookies help us improve our site.</p>

          <h2>9. International Data Transfers</h2>
          <p>As a company with operations in Germany and Turkey, your data may be processed in both countries. We ensure appropriate safeguards are in place for international data transfers in compliance with GDPR.</p>

          <h2>10. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@beinmeditech.com" className="text-orange">info@beinmeditech.com</a><br />
            <strong>Phone:</strong> <a href="tel:+4917641963598" className="text-orange">(+49) 176 419 63598</a><br />
            <strong>Address:</strong> Kirchwerderstraße 12, 23556 Lübeck, Germany
          </p>
        </div>
      </section>
    </>
  );
}
