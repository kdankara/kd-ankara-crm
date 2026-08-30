/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;