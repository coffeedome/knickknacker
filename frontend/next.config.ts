import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@coffeedome/prisma-client"],
};

export default nextConfig;
