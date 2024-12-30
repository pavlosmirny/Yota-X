"use client";

import styles from "./SectionDivider.module.css";

const SectionDivider: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* SVG градиенты */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(3, 169, 244, 0)" />
            <stop offset="40%" stopColor="rgba(3, 169, 244, 1)" />
            <stop offset="60%" stopColor="rgba(3, 169, 244, 1)" />
            <stop offset="100%" stopColor="rgba(3, 169, 244, 0)" />
          </linearGradient>
          <linearGradient id="gradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(244, 65, 165, 0)" />
            <stop offset="40%" stopColor="rgba(244, 65, 165, 1)" />
            <stop offset="60%" stopColor="rgba(244, 65, 165, 1)" />
            <stop offset="100%" stopColor="rgba(244, 65, 165, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.divider}>
        {/* Левая линия */}
        <div className={`${styles.line} ${styles.leftLine}`}>
          <div className={styles.lineContent} />
          <div className={styles.lineGlow} />
        </div>

        {/* Центральная линия */}
        <div className={styles.centerLine}>
          <div className={styles.spark} />
          <div className={styles.centerGlow} />
        </div>

        {/* Правая линия */}
        <div className={`${styles.line} ${styles.rightLine}`}>
          <div className={styles.lineContent} />
          <div className={styles.lineGlow} />
        </div>
      </div>

      {/* Декоративный элемент для указания на контент ниже */}
      <div className={styles.indicator}>
        <div className={styles.arrow} />
      </div>
    </div>
  );
};

export default SectionDivider;
