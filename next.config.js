/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'img.clerk.com'],
  },

  //enable experimental server components
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
