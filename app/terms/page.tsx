import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'beIN Meditech terms of service — the terms and conditions governing the use of our website, services, and medical technology solutions.',
  alternates: { canonical: 'https://beinmeditech.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-300 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">Terms of Service</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <p className="text-gray-600">Last updated: June 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the beIN Meditech website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.</p>

          <h2>2. Description of Services</h2>
          <p>beIN Meditech provides medical device trading, healthcare IT consultation, training and support services, custom software solutions, and system integration services for healthcare facilities worldwide.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, images, and software — is the property of beIN Meditech or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

          <h2>4. User Obligations</h2>
          <p>When using our website or services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with the security or functionality of our systems</li>
            <li>Not attempt to gain unauthorised access to our systems</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>beIN Meditech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount paid by you for the specific service giving rise to the claim.</p>

          <h2>6. Service Agreements</h2>
          <p>Specific services provided by beIN Meditech are governed by separate service agreements. In the event of any conflict between these Terms and a specific service agreement, the service agreement shall prevail.</p>

          <h2>7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these external sites.</p>

          <h2>8. Termination</h2>
          <p>We reserve the right to suspend or terminate access to our website or services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Germany. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Lübeck, Germany.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the new Terms.</p>

          <h2>11. Contact Information</h2>
          <p>For questions about these Terms, please contact us:</p>
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
