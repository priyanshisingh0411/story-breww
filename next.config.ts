import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/story-breww",
  assetPrefix: "/story-breww",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
