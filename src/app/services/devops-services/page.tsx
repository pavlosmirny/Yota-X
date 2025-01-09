// pages/devops-services.tsx
import type { Metadata } from "next";
import { NextPage } from "next";
import DevOpsHero from "../../../components/DevOps/DevOpsHero/DevOpsHero";
import { Fon } from "../../../components/fon";
import DevOpsTechnologies from "../../../components/DevOps/DevOpsTechnologies/DevOpsTechnologies";
import DevOpsServices from "../../../components/DevOps/DevOpsServices/DevOpsServices";
import DevOpsProcess from "../../../components/DevOps/DevOpsProcess/DevOpsProcess";
import DevOpsCases from "../../../components/DevOps/DevOpsCases/DevOpsCases";
import DevOpsTestimonials from "../../../components/DevOps/DevOpsTestimonials/DevOpsTestimonials";
import DevOpsContact from "../../../components/DevOps/DevOpsContact/DevOpsContact";

// Импортируем остальные секции
// import DevOpsTechnologies from '@/components/DevOps/DevOpsTechnologies';
// import DevOpsServices from '@/components/DevOps/DevOpsServices';
// и так далее...

// Метаданные страницы
export const metadata: Metadata = {
  title:
    "Enterprise DevOps Services & Solutions | Cloud Infrastructure & Automation | Yota-X",
  description:
    "Transform your development workflow with our enterprise DevOps solutions. Expertise in CI/CD, Cloud Infrastructure, Kubernetes, Docker, and automation. Get 24/7 support and scalable solutions.",
  keywords:
    "DevOps services, Cloud Infrastructure, CI/CD pipeline, Kubernetes management, Docker containers, Infrastructure as Code, DevOps automation, Cloud native solutions",
  openGraph: {
    title:
      "Enterprise DevOps Services & Solutions | Cloud Infrastructure | Yota-X",
    description:
      "Transform your development workflow with our enterprise DevOps solutions. Expert services in CI/CD, Cloud Infrastructure, Kubernetes, and automation.",
    url: "https://yota-x.com/services/devops-services",

    images: [
      {
        url: "https://yota-x.com/Vector.png", // Путь к OG изображению
        width: 1200,
        height: 630,
        alt: "DevOps Services and Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise DevOps Services & Solutions",
    description:
      "Professional DevOps services including CI/CD, Cloud Infrastructure, and automation solutions.",
    images: ["https://yota-x.com/twitter-image.jpeg"],
  },
  alternates: {
    canonical: "https://yota-x.com/services/devops-services",
  },
};

const DevOpsPage: NextPage = () => {
  return (
    <main>
      {/* Schema.org разметка для DevOps услуг */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Enterprise DevOps Services",
            description:
              "Professional DevOps services including CI/CD implementation, cloud infrastructure management, and automation solutions.",
            provider: {
              "@type": "Organization",
              name: "Your Company Name",
              url: "https://yourwebsite.com",
            },
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "DevOps Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CI/CD Implementation",
                    description:
                      "Setup and optimization of continuous integration and deployment pipelines",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cloud Infrastructure Management",
                    description:
                      "Professional cloud infrastructure setup and management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "DevOps Automation",
                    description:
                      "Automation of development and operational processes",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Fon />
      <DevOpsHero />
      <DevOpsTechnologies />
      <DevOpsServices />
      <DevOpsProcess />
      <DevOpsCases />
      <DevOpsTestimonials />
      <DevOpsContact />
    </main>
  );
};

export default DevOpsPage;
