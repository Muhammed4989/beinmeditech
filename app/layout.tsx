import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://beinmeditech.com'),
  title: {
    default: 'beIN Meditech – Empowering Care, Enhancing Life',
    template: '%s | beIN Meditech',
  },
  description:
    'beIN Meditech is a leading medical technology company providing state-of-the-art medical devices, healthcare IT solutions, software consulting, and integration services across Germany, Europe, and globally.',
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
    description: 'Leading medical technology company providing medical devices, healthcare IT, and integration services in Germany and worldwide.',
    images: [
      {
        url: '/images/icon.svg',
        width: 270,
        height: 270,
        alt: 'beIN Meditech logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'beIN Meditech – Empowering Care, Enhancing Life',
    description: 'Leading medical technology company providing medical devices, healthcare IT, and integration services.',
    images: ['/images/icon.svg'],
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
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'beIN Meditech',
  alternateName: 'beinmeditech',
  url: 'https://beinmeditech.com',
  logo: '/images/logo.svg',
  description:
    'beIN Meditech is a leading medical technology company dedicated to revolutionizing healthcare through cutting-edge medical devices and advanced IT solutions.',
  foundingDate: '2013',
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
    telephone: '+4915750316400',
    contactType: 'customer service',
    email: 'info@beinmeditech.com',
    availableLanguage: ['English', 'German', 'Turkish'],
  },
  sameAs: ['https://beinmeditech.com'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WVK83TB5');`,
          }}
        />
        {/* Scroll reveal */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('DOMContentLoaded',function(){if('IntersectionObserver'in window){var o=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}})},{threshold:0.1});document.querySelectorAll('.reveal').forEach(function(e){o.observe(e)})}});`,
          }}
        />
        {/* Preconnect to external image sources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVK83TB5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
