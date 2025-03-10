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
  },
};

module.exports = nextConfig;
