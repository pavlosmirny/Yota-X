"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaClock, FaAward, FaArrowRight } from "react-icons/fa";
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
          {/* Главный заголовок */}
          <div className={styles.mainContent}>
            <div className={styles.headingWrapper}>
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaAward className={styles.badgeIcon} />
                <span className={styles.badgeText}>
                  Trusted by 50+ Companies
                </span>
              </motion.div>

              <motion.h1
                className={styles.headline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Transform Your Business with
                <br className={styles.mobileBreak} />
                <span className={styles.gradient}> Expert Web Development</span>
              </motion.h1>

              <motion.p
                className={styles.subheadline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Get a modern, high-performance website in 4 weeks or less.
                <br className={styles.desktopBreak} /> No surprises.
              </motion.p>

              {/* Преимущества */}
              <motion.div
                className={styles.benefits}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.benefit}>
                  <FaRocket className={styles.benefitIcon} />
                  <span>Fast Development</span>
                </div>
                <div className={styles.benefit}>
                  <FaClock className={styles.benefitIcon} />
                  <span>24/7 Support</span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className={styles.cta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="#contact" className={styles.primaryButton}>
                  <span>Schedule Free Consultation</span>
                  <FaArrowRight className={styles.buttonIcon} />
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
              <h3>Our Partners</h3>
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
