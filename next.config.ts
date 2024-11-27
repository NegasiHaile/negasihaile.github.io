import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/negasihaile",
  /* config options here */
  images: {
    unoptimized: true, // Disable image optimization (optional)
  },
  // Optional: Handling redirects for client-side routing in an SPA environment
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
