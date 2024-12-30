// TechnologiesSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import styles from "./TechnologiesSection.module.css";

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon,
  title,
  description,
  features,
  delay,
}) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className={styles.cardIcon}>{icon}</div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
    <ul className={styles.featuresList}>
      {features.map((feature, index) => (
        <li key={index} className={styles.featureItem}>
          <FaCode className={styles.featureIcon} />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TechnologiesSection: React.FC = () => {
  const technologies = [
    {
      icon: <FaReact size={40} />,
      title: "React",
      description: "Building interactive UIs with reusable components",
      features: [
        "Component-Based Architecture",
        "Virtual DOM for Performance",
        "Rich Ecosystem",
      ],
    },
    {
      icon: <SiNextdotjs size={40} />,
      title: "Next.js",
      description: "Production-ready React framework with SSR and SSG",
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "API Routes",
      ],
    },
    {
      icon: <SiTypescript size={40} />,
      title: "TypeScript",
      description: "Type-safe development for scalable applications",
      features: [
        "Static Type Checking",
        "Enhanced IDE Support",
        "Better Code Quality",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.sectionContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Core Technologies
          <span className={styles.gradientText}>We Master</span>
        </motion.h2>

        <motion.p
          className={styles.sectionDescription}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Leveraging cutting-edge technologies to deliver exceptional web
          experiences
        </motion.p>

        <div className={styles.cardsGrid}>
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.title} {...tech} delay={index * 0.2} />
          ))}
        </div>
      </motion.div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default TechnologiesSection;
