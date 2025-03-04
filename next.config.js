/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // For static export

  images: {
    unoptimized: true, // Disables image optimization (useful for static export)
  },

  basePath: isProduction ? '/crypto-price-tracker' : '', // Only add basePath in production
  assetPrefix: isProduction ? '/crypto-price-tracker/' : '', // Only add assetPrefix in production

  trailingSlash: true,

  reactStrictMode: true,
};

module.exports = nextConfig;





   //pwa: {
      //dest: 'public',
      // Other PWA options here (like disable: process.env.NODE_ENV === 'development' for testing)
    //},