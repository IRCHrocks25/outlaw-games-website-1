/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'outlaw-games-website-1-production.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'www.outlaw.games',
      },
    ],
  },
  experimental: {
    turbopack: {
      root: '.',
    },
  },
}

export default nextConfig
