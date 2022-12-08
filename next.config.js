/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
        port: '3000',
        pathname: 'http://localhost:3000/Post',
      },
    ],
  },
}

module.exports = nextConfig
