// GeometricDivider.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./GeometricDivider.module.css";

const GeometricDivider: React.FC = () => {
  return (
    <div className={styles.dividerWrapper}>
      <div className={styles.shapesContainer}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.shape}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className={styles.innerShape} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.lineGlow} />
      </motion.div>
    </div>
  );
};

export default GeometricDivider;
