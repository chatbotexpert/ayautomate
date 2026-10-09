import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/engineer-placement',
        destination: '/services/hire-ai-developers',
        permanent: true,
      },
      {
        source: '/services/ai-strategy-consulting-fractional-caio',
        destination: '/services/ai-strategy',
        permanent: true,
      },
      {
        source: '/services/openclaw-nemoclaw-enterprise-setup',
        destination: '/services/openclaw-nemoclaw',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/consultation',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
