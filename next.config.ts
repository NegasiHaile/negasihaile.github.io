import createMDX from "@next/mdx";
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/negasihaile",
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/negasihaile",
        destination: "/",
        permanent: true,
      },
      {
        source: "/negasihaile/", // Optional: Handle with trailing slash as well
        destination: "/",
        permanent: true,
      },
      {
        source: "/negasi", // Optional: Handle with trailing slash as well
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true, // Disable image optimization (optional)
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
