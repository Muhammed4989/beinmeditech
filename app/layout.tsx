import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        url: 'https://beinmeditech.com/wp-content/uploads/2024/01/cropped-beIN-MediTech-4-270x270.png',
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
    images: ['https://beinmeditech.com/wp-content/uploads/2024/01/cropped-beIN-MediTech-4-270x270.png'],
  },
  icons: {
    icon: 'https://beinmeditech.com/wp-content/uploads/2024/01/cropped-beIN-MediTech-4-270x270.png',
    apple: 'https://beinmeditech.com/wp-content/uploads/2024/01/cropped-beIN-MediTech-4-270x270.png',
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
  logo: 'https://beinmeditech.com/wp-content/uploads/2023/12/beINmeditech-random-fotor-bg-remover-20231228181255.png',
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
      </body>
    </html>
  );
}
