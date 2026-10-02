/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beinmeditech.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Strict mode for better DX
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power header removal for cleaner responses
  poweredByHeader: false,
  async redirects() {
    return [
      ...[
        ['demo-siemens-acuson-nx3-2019', 'ultrasound/general-imaging'],
        ['demo-olympus-evis-exera-iii', 'endoscopy/systems'],
        ['demo-philips-intellivue-mx750', 'patient-monitors/bedside'],
      ].map(([slug, parent]) => ({ source: `/products/${slug}`, destination: `/medical-equipment/${parent}/${slug}`, permanent: true })),
      { source: '/medical-equipment/ultrasound/for-sale/:country', destination: '/medical-equipment/ultrasound', permanent: true },
    ];
  },
};

module.exports = nextConfig;
