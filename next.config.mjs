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
  async redirects() {
    return [
      {
        source: '/outieputt',
        destination: 'https://app.outlaw.kuki.agency/',
        permanent: false, // 302 temporary redirect
      },
    ];
  },
}

export default nextConfig
