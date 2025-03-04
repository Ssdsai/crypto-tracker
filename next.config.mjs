/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  
  // Image optimization settings
  images: {
    unoptimized: true, // Disables image optimization (useful for static export)
  },

  // Base path for GitHub Pages (if you are deploying to a subdirectory)
  basePath: '/crypto-price-tracker', // Replace with your GitHub repo name

  // Asset prefix (important for loading assets from a subdirectory)
  assetPrefix: '/crypto-price-tracker/', // Ensure assets are loaded correctly

  // Ensure URLs end with a trailing slash (required by GitHub Pages)
  trailingSlash: true,

  // Optional: Enable React Strict Mode
  reactStrictMode: true,
  //pwa: {
      //dest: 'public',
      // Other PWA options here (like disable: process.env.NODE_ENV === 'development' for testing)
    //},
};

export default nextConfig; // Correct export syntax for ESM (next.config.mjs)



   