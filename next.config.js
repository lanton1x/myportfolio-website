/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during production builds
  },
  images: {
    qualities: [16, 32, 48, 64, 75, 90, 95], // Added 95 to support this project images
  },
};

module.exports = nextConfig;
