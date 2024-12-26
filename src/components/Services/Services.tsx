// components/Services.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import { SiNextdotjs, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = servicesRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 30% of the component is visible
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      className={styles.servicesSection}
      ref={servicesRef}
      aria-labelledby="services-heading"
    >
      {isVisible && (
        <div className={styles.message}>
          <h2>Full Spectrum of Services</h2>
        </div>
      )}
      <div
        className={`${styles.servicesContainer} ${
          isVisible ? styles.animate : ""
        }`}
      >
        {/* Next.js Service Block */}
        <div className={`${styles.serviceBlock} ${styles.nextjs}`}>
          {/* VSCode-like Header */}
          <div className={styles.serviceHeader}>
            <span className={`${styles.controlButton} ${styles.red}`}></span>
            <span className={`${styles.controlButton} ${styles.yellow}`}></span>
            <span className={`${styles.controlButton} ${styles.green}`}></span>
          </div>
          {/* Icon */}
          <SiNextdotjs size={80} color="#000000" aria-hidden="true" />
          <h3 className={styles.serviceTitle}>Next.js</h3>
        </div>

        {/* Docker Service Block */}
        <div className={`${styles.serviceBlock} ${styles.docker}`}>
          {/* VSCode-like Header */}
          <div className={styles.serviceHeader}>
            <span className={`${styles.controlButton} ${styles.red}`}></span>
            <span className={`${styles.controlButton} ${styles.yellow}`}></span>
            <span className={`${styles.controlButton} ${styles.green}`}></span>
          </div>
          {/* Icon */}
          <SiDocker size={80} color="#0db7ed" aria-hidden="true" />
          <h3 className={styles.serviceTitle}>Docker</h3>
        </div>

        {/* AWS Service Block */}
        <div className={`${styles.serviceBlock} ${styles.aws}`}>
          {/* VSCode-like Header */}
          <div className={styles.serviceHeader}>
            <span className={`${styles.controlButton} ${styles.red}`}></span>
            <span className={`${styles.controlButton} ${styles.yellow}`}></span>
            <span className={`${styles.controlButton} ${styles.green}`}></span>
          </div>
          {/* Icon */}
          <FaAws size={80} color="#FF9900" aria-hidden="true" />
          <h3 className={styles.serviceTitle}>AWS</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
