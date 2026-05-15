/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,

    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.giphy.com" },
      { protocol: "https", hostname: "media.tenor.com" }
    ]
  }
};

module.exports = nextConfig;