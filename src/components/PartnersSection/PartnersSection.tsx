"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./PartnersSection.module.css";

const PartnersSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const SCROLL_SPEED = 0.5;
  const PAUSE_ON_HOVER = true;

  const animate = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft += SCROLL_SPEED;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const content = slider.innerHTML;
    slider.innerHTML = content + content;
    requestRef.current = requestAnimationFrame(animate);

    if (PAUSE_ON_HOVER) {
      const pauseAnimation = () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };

      const resumeAnimation = () => {
        requestRef.current = requestAnimationFrame(animate);
      };

      slider.addEventListener("mouseenter", pauseAnimation);
      slider.addEventListener("mouseleave", resumeAnimation);

      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        slider.removeEventListener("mouseenter", pauseAnimation);
        slider.removeEventListener("mouseleave", resumeAnimation);
      };
    }
  }, []);

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our
          <span className={styles.titleHighlight}> Partners</span>
        </motion.h2>

        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            <motion.div className={styles.slide} whileHover={{ y: -5 }}>
              <img src="./partners/amida2.png" alt="Partner 1" />
            </motion.div>
            <motion.div className={styles.slide} whileHover={{ y: -5 }}>
              <img src="./partners/boosting.svg" alt="Partner 3" />
            </motion.div>
            <motion.div className={styles.slide} whileHover={{ y: -5 }}>
              <img src="./partners/compass.svg" alt="Partner 4" />
            </motion.div>
            <motion.div className={styles.slide} whileHover={{ y: -5 }}>
              <img src="./partners/eva.svg" alt="Partner 5" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default PartnersSection;
