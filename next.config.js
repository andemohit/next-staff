/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc', 'https://flowbite.com', 'flowbite.com'],
  },
};

module.exports = nextConfig;
