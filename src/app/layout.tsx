// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YotaX | Web Application Development & DevOps Solutions",
  description:
    "YotaX provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
  keywords:
    "web development, DevOps, web applications, cloud solutions, CI/CD, infrastructure as code, automation, scalable applications, high-performance web apps, Next.js, React, TypeScript, Docker, Kubernetes, continuous integration, continuous deployment",
  authors: [
    {
      name: "YotaX",
      url: "https://yotax.com",
    },
  ],
  creator: "YotaX",
  openGraph: {
    title: "YotaX | Web Application Development & DevOps Solutions",
    description:
      "YotaX provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
    url: "https://yotax.com",
    siteName: "YotaX",
    images: [
      {
        url: "https://yotax.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "YotaX | Web Application Development & DevOps Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YotaX | Web Application Development & DevOps Solutions",
    description:
      "YotaX provides expert web application development and comprehensive DevOps solutions. Enhance your business with scalable, high-performance applications and streamlined operations.",
    images: ["https://yotax.com/twitter-image.jpg"],
  },

  // manifest: "/site.webmanifest",
  // Add additional metadata as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
