"use client";
// AboutHero.tsx

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import styles from "./AboutHero.module.css";

const AboutHero: React.FC = () => {
  const achievements = [
    {
      value: "50+",
      label: "Projects Delivered",
      icon: <FaRocket />,
    },
    {
      value: "20+",
      label: "Expert Engineers",
      icon: <FaUsers />,
    },
    {
      value: "15+",
      label: "Global Clients",
      icon: <FaGlobe />,
    },
  ];

  const expertiseAreas = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Modern web applications with React and Next.js",
    },
    {
      icon: <FaServer />,
      title: "DevOps Solutions",
      description: "Cloud infrastructure and automation",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Cutting-edge tech solutions",
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
              About
              <span className={styles.gradient}> Yota-X</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We are a team of passionate developers and engineers dedicated to
              delivering exceptional web applications and DevOps solutions. At
              Yota-X, we combine technical expertise with innovative thinking to
              create scalable, high-performance digital solutions.
            </motion.p>

            <div className={styles.achievementsGrid}>
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  className={styles.achievementBox}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className={styles.achievementIcon}>{item.icon}</div>
                  <div className={styles.achievementValue}>{item.value}</div>
                  <div className={styles.achievementLabel}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className={styles.visualContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.expertiseCards}>
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className={styles.expertiseCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className={styles.expertiseIcon}>
                    {area.icon}
                    <div className={styles.iconGlow} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.valueProposition}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.valueCard}>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with innovative technology solutions
                  that drive growth and efficiency in the digital age.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default AboutHero;
