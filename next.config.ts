import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/negasihaile",
  /* config options here */
  images: {
    unoptimized: true, // Disable image optimization (optional)
  },
};

export default nextConfig;
