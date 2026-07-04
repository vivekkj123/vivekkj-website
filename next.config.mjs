import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "sw.js",
  swDest: "public/sw.js",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  // Next.js 15 features
  experimental: {
    // Enable new image optimization features
    optimizePackageImports: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons'],
  },

  images: {
    loader: "custom",
    loaderFile: "./utils/imageLoader.js",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Next.js 15 image optimization
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Next.js 15 performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default withSerwist(nextConfig);
