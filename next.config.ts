import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Другие настройки вашего проекта
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots", // Перенаправление на API-роут
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Аналогично для sitemap, если потребуется
      },
      // Добавьте другие правила при необходимости
    ];
  },
};

export default nextConfig;
