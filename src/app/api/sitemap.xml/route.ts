import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const baseUrl = "https://yota-x.com";

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
    // Добавьте другие URL по мере необходимости
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

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "text/xml" },
  });
}
