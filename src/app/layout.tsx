import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

// Оптимизированная загрузка шрифта Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Используем swap для быстрой отрисовки
  preload: true, // Включаем предзагрузку
  variable: "--font-geist-sans",
  // Указываем конкретные начертания, которые используются
  weight: ["400", "500", "600", "700"],
  // Добавляем fallback шрифты
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "Yota-X | Web Application Development & DevOps Solutions",
  description:
    "Yota-X provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
  keywords:
    "web development, DevOps, web applications, cloud solutions, CI/CD, infrastructure as code, automation, scalable applications, high-performance web apps, Next.js, React, TypeScript, Docker, Kubernetes, continuous integration, continuous deployment",
  authors: [
    {
      name: "Yota-X",
      url: "https://yota-x.com",
    },
  ],
  creator: "Yota-X",
  openGraph: {
    title: "Yota-X | Web Application Development & DevOps Solutions",
    description:
      "Yota-X provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
    url: "https://yota-x.com",
    siteName: "Yota-X",
    images: [
      {
        url: "https://yota-x.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Yota-X | Web Application Development & DevOps Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yota-X | Web Application Development & DevOps Solutions",
    description:
      "Yota-X provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
    images: ["https://yota-x.com/twitter-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Предзагрузка критических ресурсов */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5LXQCPMKTC"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5LXQCPMKTC');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
