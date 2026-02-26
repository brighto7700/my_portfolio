/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This generates a static 'out' folder on build
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
};

module.exports = nextConfig;
