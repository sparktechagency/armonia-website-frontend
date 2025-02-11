import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Add your existing configurations */

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all domains
      },
    ],
  },
};

export default nextConfig;
