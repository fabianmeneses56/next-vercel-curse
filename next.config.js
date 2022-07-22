/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
