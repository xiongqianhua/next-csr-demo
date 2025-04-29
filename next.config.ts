import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 开启必要的实验性功能
  experimental: {
    // appDir is no longer needed as it's enabled by default in Next.js 13+
  },
  
  // 按需加载优化配置（Antd 5.x 适配）
  transpilePackages: ['antd', '@ant-design/icons', '@ant-design/pro-components'],
  
  // 静态导出配置（SSG必须）
  output: 'export', 
};

export default nextConfig;
