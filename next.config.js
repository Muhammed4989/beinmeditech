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
};

module.exports = nextConfig;
