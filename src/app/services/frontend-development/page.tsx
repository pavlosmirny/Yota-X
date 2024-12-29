import React from "react";
import { Metadata } from "next";
import FrontendHero from "../../../components/Frontend/FrontendHero/FrontendHero";
import { Fon } from "../../../components/fon";

export const metadata: Metadata = {
  title:
    "Frontend Development Services | React, Next.js, TypeScript Development | YotaX",
  description:
    "Professional Frontend Development Services using React, Next.js and TypeScript. Expert web application development with focus on performance, SEO and user experience.",
  keywords:
    "frontend development, react development, next.js, typescript, web applications, UI/UX development, professional web development, frontend solutions",
  openGraph: {
    title: "Frontend Development Services | YotaX",
    description:
      "Professional Frontend Development Services using React, Next.js and TypeScript.",
    url: "https://yotax.com/services/frontend-development",
    siteName: "YotaX",
    images: [
      {
        url: "https://yotax.com/Vector.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <Fon />
      <FrontendHero />
    </div>
  );
};

export default page;