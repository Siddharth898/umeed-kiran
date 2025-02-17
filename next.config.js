/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-domain.com"], // Replace with actual external image domains
    unoptimized: true, // Use if experiencing issues with next/image in static exports
  },
  output: "standalone", // Useful for deployment (optional)
};

module.exports = nextConfig; // CommonJS export (Next.js expects this)
