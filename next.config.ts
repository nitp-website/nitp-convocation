import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2025',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
