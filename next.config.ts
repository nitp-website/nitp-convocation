import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2025',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/2025',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: '/2025',
        permanent: false,
      },
      {
        source: '/student',
        destination: '/2025',
        permanent: false,
      },
      {
        source: '/student/:path*',
        destination: '/2025',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
