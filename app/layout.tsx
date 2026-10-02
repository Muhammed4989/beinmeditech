import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://beinmeditech.com'),
  title: {
    default: 'beIN Meditech – Empowering Care, Enhancing Life',
    template: '%s | beIN Meditech',
  },
  description:
    'Explore medical equipment sourcing, healthcare IT consultation, training and integration services from beIN Meditech in Germany and Türkiye.',
  keywords: [
    'medical devices', 'healthcare IT', 'medical technology', 'medical device trading',
    'healthcare software', 'hospital IT solutions', 'medical integration services',
    'beIN Meditech', 'beinmeditech', 'Lübeck Germany medical',
  ],
  authors: [{ name: 'beIN Meditech', url: 'https://beinmeditech.com' }],
  creator: 'beIN Meditech',
  publisher: 'beIN Meditech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beinmeditech.com',
    siteName: 'beIN Meditech',
    title: 'beIN Meditech – Empowering Care, Enhancing Life',
    description: 'Medical equipment sourcing, healthcare IT consultation, training and integration services from beIN Meditech.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'beIN Meditech – Empowering Care, Enhancing Life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beIN Meditech – Empowering Care, Enhancing Life',
    description: 'Medical equipment sourcing, healthcare IT consultation, training and integration services from beIN Meditech.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/icon.svg',
    apple: '/images/icon.svg',
  },
  alternates: {
    canonical: 'https://beinmeditech.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};


const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://beinmeditech.com/#organization',
  name: 'beIN Meditech',
  alternateName: 'beinmeditech',
  url: 'https://beinmeditech.com',
  logo: 'https://beinmeditech.com/images/brand/bein-meditech.png',
  description:
    'beIN Meditech provides medical equipment sourcing, healthcare IT consultation and integration services.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Kirchwerderstraße 12',
      addressLocality: 'Lübeck',
      postalCode: '23556',
      addressCountry: 'DE',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Bahçeşehir',
      postalCode: '34488',
      addressRegion: 'Istanbul',
      addressCountry: 'TR',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+4917641963598',
    contactType: 'customer service',
    email: 'info@beinmeditech.com',
    availableLanguage: ['English', 'German', 'Turkish'],
  },
  knowsAbout: ['Medical equipment sourcing', 'Used ultrasound systems', 'Endoscopy equipment', 'Patient monitoring', 'Healthcare IT integration'],
  areaServed: ['Germany', 'Europe', 'Saudi Arabia', 'Türkiye', 'Middle East'],
  sameAs: ['https://www.linkedin.com/company/beinmeditech', 'https://www.facebook.com/beinmeditech', 'https://www.instagram.com/beinmeditech'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://beinmeditech.com/#website',
  url: 'https://beinmeditech.com',
  name: 'beIN MediTech',
  publisher: { '@id': 'https://beinmeditech.com/#organization' },
  inLanguage: 'en',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
    <head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </head>
    <body>
      <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WVK83TB5');" }} />
      <noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-WVK83TB5" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <aside aria-label="Quick contact"><WhatsAppButton /></aside>
    </body>
  </html>;
}
