/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.nitori-net.jp"],
  },
};

module.exports = nextConfig;
