/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["192.168.29.239", "192.168.29.160"],
  },
};

module.exports = nextConfig;
