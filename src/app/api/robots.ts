import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robotsTxt = `
User-agent: *
Disallow: /private/
Allow: /

Sitemap: https://yota-x.com/sitemap.xml
  `;
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robotsTxt.trim());
}
