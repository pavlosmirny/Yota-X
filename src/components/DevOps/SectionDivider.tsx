"use client";
// WaveDivider.tsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./WaveDivider.module.css";

const WaveDivider: React.FC = () => {
  return (
    <div className={styles.dividerWrapper}>
      <div className={styles.waveContainer}>
        <svg
          className={styles.wave}
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,50 C320,120 420,-20 640,50 C860,120 960,-20 1180,50 L1440,50 L1440,100 L0,100 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#326CE5", stopOpacity: 0.1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#7B42BC", stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#326CE5", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.glowDots}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.dot}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaveDivider;
