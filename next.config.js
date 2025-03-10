/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      canvas: "canvas",
      bufferutil: "bufferutil",
      "utf-8-validate": "utf-8-validate",
    });
    return config;
  },
  images: {
    domains: [
      "instagram.fmct5-1.fna.fbcdn.net",
      "instagram.com",
      "www.instagram.com",
      "scontent.cdninstagram.com",
      "scontent-iad3-1.cdninstagram.com",
      "cdninstagram.com",
    ],
    formats: ["image/webp"],
  },
  // Add performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Optimize for mobile
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
