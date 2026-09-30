import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ayautomate.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.logo.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.ayautomate.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
