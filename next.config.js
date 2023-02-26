/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.buymeacoffee.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // experimental:{
  //   images:{
  //     layoutRaw: true,
  //   } 
  // }
}

module.exports = nextConfig
