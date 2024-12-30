// ProcessSection.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPencilRuler,
  FaCode,
  FaCube,
  FaVial,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import styles from "./ProcessSection.module.css";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      icon: <FaPencilRuler size={24} />,
      title: "Design Analysis",
      description: "Converting designs into development specifications",
      details: [
        "Review of design materials and assets",
        "Component structure planning",
        "Interactive elements specification",
        "Responsive breakpoints definition",
      ],
    },
    {
      icon: <FaCube size={24} />,
      title: "Component Development",
      description: "Building reusable and scalable components",
      details: [
        "Component architecture setup",
        "Style system implementation",
        "Interactive behavior development",
        "Component documentation",
      ],
    },
    {
      icon: <FaCode size={24} />,
      title: "Feature Implementation",
      description: "Developing core functionality and features",
      details: [
        "Core features development",
        "State management implementation",
        "API integration",
        "Error handling",
      ],
    },
    {
      icon: <FaVial size={24} />,
      title: "Testing & QA",
      description: "Comprehensive testing and quality assurance",
      details: [
        "Unit and integration testing",
        "Cross-browser compatibility",
        "Responsive design verification",
        "Performance benchmarking",
      ],
    },
    {
      icon: <FaRocket size={24} />,
      title: "Optimization & Deployment",
      description: "Performance optimization and deployment",
      details: [
        "Code optimization",
        "Asset optimization",
        "Build configuration",
        "Deployment automation",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Development
            <span className={styles.gradientText}> Process</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our structured approach to delivering exceptional frontend solutions
          </p>
        </motion.div>

        <div className={styles.processContent}>
          <div className={styles.processSteps}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`${styles.stepItem} ${
                  activeStep === index ? styles.active : ""
                }`}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.stepIcon}>
                  {step.icon}
                  {index < steps.length - 1 && (
                    <div className={styles.connector} />
                  )}
                </div>
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={styles.stepDetails}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.detailsCard}>
                <div className={styles.detailsHeader}>
                  <div className={styles.detailsIcon}>
                    {steps[activeStep].icon}
                  </div>
                  <h3 className={styles.detailsTitle}>
                    {steps[activeStep].title}
                  </h3>
                </div>
                <ul className={styles.detailsList}>
                  {steps[activeStep].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={styles.detailItem}
                    >
                      <FaCheckCircle className={styles.checkIcon} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default ProcessSection;
