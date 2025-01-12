import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "bafkreihvzwknk6zs46san6frjmh4po2vcqn6fvio3jeehsvysrz7xf4xxa.ipfs.w3s.link",
      "ipfs.w3s.link",
      "w3s.link",
      "yota-x.com", // Добавлен ваш домен
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ipfs.w3s.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.w3s.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yota-x.com", // Добавлен паттерн для вашего домена
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
