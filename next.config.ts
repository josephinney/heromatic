import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.builder.io'], // Agrega el dominio aquí
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
