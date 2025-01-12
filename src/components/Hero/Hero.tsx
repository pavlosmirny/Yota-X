// Hero.jsx
"use client";
import React from "react";
import Link from "next/link";
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
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Content Grid */}
          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.mainColumn}>
              {/* Badge */}
              <div className={styles.badge}>
                <FaAward />
                <span>Trusted by 50+ Companies</span>
              </div>

              {/* Headline - оптимизированный для LCP */}
              <h1 className={styles.headline}>
                Transform Your Business with
                <span className={styles.gradient}> Expert Web Development</span>
              </h1>

              {/* Subheadline */}
              <p className={styles.subheadline}>
                Get a modern, high-performance website in 4 weeks or less. No
                surprises, guaranteed results.
              </p>

              {/* Features */}
              <div className={styles.features}>
                {[
                  "Optimized Performance",
                  "Responsive Design",
                  "SEO Friendly",
                ].map((feature) => (
                  <div key={feature} className={styles.feature}>
                    <FaCheck />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.statsColumn}>
              <div className={styles.statsGrid}>
                {[
                  {
                    icon: FaRocket,
                    value: "4 weeks",
                    label: "Average Delivery",
                  },
                  { icon: FaClock, value: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <stat.icon className={styles.statIcon} />
                    <div className={styles.statInfo}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="#contact" className={styles.ctaButton}>
                <span>Schedule Free Consultation</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Partners Section */}
          <div className={styles.partners}>
            <div className={styles.partnersHeader}>
              <h3>Our Trusted Partners</h3>
            </div>
            <div className={styles.partnersContent}>
              {/* PartnersSection компонент будет здесь */}
              <PartnersSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
