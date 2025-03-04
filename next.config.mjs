// Assign the config object to a variable first
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crypto-price-tracker' : '',
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization
    domains: ['media.licdn.com'],
  },
};

// Export the config object as default
export default nextConfig;








   //pwa: {
      //dest: 'public',
      // Other PWA options here (like disable: process.env.NODE_ENV === 'development' for testing)
    //},