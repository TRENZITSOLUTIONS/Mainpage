/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['trenzsoftwareitsolutions.com'],
  },
  // Optimize for Vercel deployment
  swcMinify: true,
  // Ensure proper handling of Three.js and WebGL
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig

