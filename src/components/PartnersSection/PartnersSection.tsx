"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./PartnersSection.module.css";

const PartnersSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const SCROLL_SPEED = 0.5;

  const animate = () => {
    const slider = sliderRef.current;
    if (slider && !isDraggingRef.current) {
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

    // Дублируем контент для бесконечной прокрутки
    const content = slider.innerHTML;
    slider.innerHTML = content + content;

    // Запускаем анимацию
    requestRef.current = requestAnimationFrame(animate);

    // Обработчики для touch событий
    const handleTouchStart = () => {
      isDraggingRef.current = true;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Обработчики для mouse событий
    const handleMouseDown = () => {
      isDraggingRef.current = true;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleMouseLeave = () => {
      isDraggingRef.current = false;
    };

    // Добавляем слушатели событий
    slider.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider.addEventListener("touchend", handleTouchEnd);
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      // Удаляем слушатели событий
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
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
          Our<span className={styles.titleHighlight}> Partners</span>
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
