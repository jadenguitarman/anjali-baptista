/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@/components', '@/lib', '@/config']
  }
};

export default nextConfig;
