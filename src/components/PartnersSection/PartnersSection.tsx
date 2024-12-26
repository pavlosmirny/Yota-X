"use client";
import React, { useEffect, useRef } from "react";
import styles from "./PartnersSection.module.css";
import pr1 from "../../assets/partners/pr1.png";
import pr2 from "../../assets/partners/pr2.png";
import pr3 from "../../assets/partners/pr3.png";
import pr4 from "../../assets/partners/pr4.png";
import pr5 from "../../assets/partners/pr5.png";

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
        <h3 className={styles.title}>
          <span className={styles.titleHighlight}>Our Clients</span>
        </h3>
        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            <div className={styles.slide}>
              <img src="./partners/amida2.png" alt="Partner 1" />
            </div>

            <div className={styles.slide}>
              <img src="./partners/boosting.svg" alt="Partner 3" />
            </div>
            <div className={styles.slide}>
              <img src="./partners/compass.svg" alt="Partner 4" />
            </div>
            <div className={styles.slide}>
              <img src="./partners/eva.svg" alt="Partner 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
