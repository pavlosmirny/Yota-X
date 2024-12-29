"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedMetric.module.css";

interface AnimatedMetricProps {
  value: number;
  label: string;
  suffix?: string;
  color?: string;
  delay?: number;
}

export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  label,
  suffix = "",
  color = "#03a9f4",
  delay = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1500; // Общая продолжительность анимации в мс
    const steps = 60; // Количество шагов анимации
    const stepDuration = duration / steps;
    const increment = value / steps;
    let currentStep = 0;

    setTimeout(() => {
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue((prev) => Math.min(value, prev + increment));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, delay * 1000);
  }, [value, delay]);

  return (
    <motion.div
      className={styles.metric}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <div className={styles.value} style={{ color }}>
        {displayValue.toFixed(displayValue % 1 === 0 ? 0 : 1)}
        {suffix}
      </div>
      <div className={styles.label}>{label}</div>
      <div
        className={styles.progressBar}
        style={
          {
            "--progress": `${(displayValue / value) * 100}%`,
            "--color": color,
          } as React.CSSProperties
        }
      />
    </motion.div>
  );
};
