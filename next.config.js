/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable App Router (default in Next 13+)
  experimental: {
    // no special flags needed for App Router
  },
};
export default nextConfig;
