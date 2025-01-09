"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaClock,
  FaAward,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import styles from "./Hero.module.css";
import PartnersSection from "../PartnersSection/PartnersSection";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add(styles.visible);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.contentInner}>
          <div className={styles.gridContainer}>
            {/* Левая колонка */}
            <div className={styles.mainColumn}>
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaAward />
                <span>Trusted by 50+ Companies</span>
              </motion.div>

              <motion.h1
                className={styles.headline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Transform Your Business with
                <span className={styles.gradient}> Expert Web Development</span>
              </motion.h1>

              <motion.p
                className={styles.subheadline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Get a modern, high-performance website in 4 weeks or less. No
                surprises, guaranteed results.
              </motion.p>

              <motion.div
                className={styles.featuresList}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.featureItem}>
                  <FaCheck />
                  <span>Optimized Performance</span>
                </div>
                <div className={styles.featureItem}>
                  <FaCheck />
                  <span>Responsive Design</span>
                </div>
                <div className={styles.featureItem}>
                  <FaCheck />
                  <span>SEO Friendly</span>
                </div>
              </motion.div>
            </div>

            {/* Правая колонка */}
            <div className={styles.statsColumn}>
              <motion.div
                className={styles.statsGrid}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.statCard}>
                  <FaRocket className={styles.statIcon} />
                  <div className={styles.statInfo}>
                    <div className={styles.statValue}>4 weeks</div>
                    <div className={styles.statLabel}>Average Delivery</div>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <FaClock className={styles.statIcon} />
                  <div className={styles.statInfo}>
                    <div className={styles.statValue}>24/7</div>
                    <div className={styles.statLabel}>Support Available</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={styles.ctaContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="#contact" className={styles.primaryButton}>
                  <span>Schedule Free Consultation</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Partners Section */}
          <motion.div
            className={styles.showcase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.showcaseHeader}>
              <h3>Our Trusted Partners</h3>
            </div>
            <div className={styles.showcaseContent}>
              <PartnersSection />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
