import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 忽略ESLint在构建过程中的错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
