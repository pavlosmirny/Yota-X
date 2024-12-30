// CareersHero.tsx
"use client";
// CareersHero.tsx

import { motion } from "framer-motion";
import {
  FaUsers,
  FaRocket,
  FaBrain,
  FaHandshake,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import styles from "./CareersHero.module.css";

const CareersHero: React.FC = () => {
  const benefits = [
    {
      icon: <FaRocket />,
      title: "Innovation First",
      description:
        "At Yota-X, we're pushing the boundaries of technology every day",
    },
    {
      icon: <FaUsers />,
      title: "Global Team",
      description:
        "Join our diverse team of experts working on cutting-edge solutions",
    },
    {
      icon: <FaBrain />,
      title: "Continuous Growth",
      description:
        "We invest in our team's professional development and learning",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Join
              <span className={styles.gradient}> Yota-X</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Become part of a team that&apos;s revolutionizing web development
              and DevOps. We&apos;re looking for exceptional talent to help
              shape the future of technology.
            </motion.p>

            <div className={styles.statsContainer}>
              <motion.div
                className={styles.statBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.statValue}>10+</div>
                <div className={styles.statLabel}>Open Roles</div>
              </motion.div>
              <motion.div
                className={styles.statBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.statValue}>20+</div>
                <div className={styles.statLabel}>Expert Engineers</div>
              </motion.div>
              <motion.div
                className={styles.statBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className={styles.statValue}>15+</div>
                <div className={styles.statLabel}>Countries</div>
              </motion.div>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                    <div className={styles.iconGlow} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.techStack}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className={styles.techItem}>
                <FaCode className={styles.techIcon} />
                <span>Latest Tech Stack</span>
              </div>
              <div className={styles.techItem}>
                <FaLaptopCode className={styles.techIcon} />
                <span>Flexible Work</span>
              </div>
              <div className={styles.techItem}>
                <FaHandshake className={styles.techIcon} />
                <span>Strong Culture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default CareersHero;
