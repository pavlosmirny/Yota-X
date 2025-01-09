// pages/api/sitemap.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://yota-x.com";

  // Пример: динамически формируем список URL.
  // На практике получите URL из базы данных, CMS или автоматически соберите маршруты.
  const urls = [
    { loc: "/", lastmod: "2025-01-09", changefreq: "daily", priority: "1.0" },
    {
      loc: "/services/frontend-development",
      lastmod: "2025-01-09",
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: "/services/devops-services",
      lastmod: "2025-01-09",
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: "/careers",
      lastmod: "2025-01-09",
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: "/contacts",
      lastmod: "2025-01-09",
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: "/about",
      lastmod: "2025-01-09",
      changefreq: "weekly",
      priority: "0.8",
    },
    // Добавьте или получайте дополнительные URL динамически
  ];

  const sitemapEntries = urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
