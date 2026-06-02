import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/sametuzgoz",
  assetPrefix: "/sametuzgoz/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;