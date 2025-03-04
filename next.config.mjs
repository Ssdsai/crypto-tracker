/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['upload.wikimedia.org', 'media.licdn.com'],
    },
    pwa: {
      dest: 'public',
      // Other PWA options here (like disable: process.env.NODE_ENV === 'development' for testing)
    },
  };
  
  export default nextConfig;
  