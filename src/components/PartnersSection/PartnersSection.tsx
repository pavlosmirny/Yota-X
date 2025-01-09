"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PartnersSection.module.css";
import Link from "next/link";

const partners = [
  {
    src: "/partners/logo.svg",
    alt: "spacecore",
    href: "https://spacecore.pro/en/",
  },
  {
    src: "/partners/around-web.svg",
    alt: "Around Web",
    href: "https://around-web.com/",
  },
  {
    src: "/partners/amida2.png",
    alt: "amida",
    href: "https://amida.software/",
  },
  {
    src: "/partners/boosting.svg",
    alt: "boosting",
    href: "https://boostinglead.com/",
  },
  {
    src: "/partners/eva.svg",
    alt: "eva",
    href: "https://evacodes.com",
  },
];

const PartnersSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let position = 0;
    const totalWidth = slider.scrollWidth;

    const animate = () => {
      position += 1; // Скорость прокрутки
      if (position >= totalWidth / 2) {
        position = 0;
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = position;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const renderSlide = (partner: (typeof partners)[0], key: string) => (
    <motion.div key={key} className={styles.slide} whileHover={{ y: -5 }}>
      <Link
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.partnerLink}
      >
        <Image
          src={partner.src}
          alt={partner.alt}
          width={200}
          height={120}
          className={styles.partnerImage}
        />
      </Link>
    </motion.div>
  );

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            {/* Первый набор слайдов */}
            {partners.map((partner, index) =>
              renderSlide(partner, `original-${index}`)
            )}
            {/* Дублированный набор для бесконечной прокрутки */}
            {partners.map((partner, index) =>
              renderSlide(partner, `duplicate-${index}`)
            )}
          </div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default PartnersSection;
