"use client";
// DevOpsProcess.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaUserCog,
} from "react-icons/fa";
import styles from "./DevOpsProcess.module.css";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: {
    activities: string[];
    deliverables: string[];
    timeline: string;
  };
}

const DevOpsProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      icon: <FaClipboardCheck />,
      title: "Assessment & Planning",
      description: "Infrastructure and workflow analysis",
      details: {
        activities: [
          "Infrastructure audit",
          "Workflow analysis",
          "Requirements gathering",
          "Risk assessment",
        ],
        deliverables: [
          "Detailed analysis report",
          "Implementation roadmap",
          "Resource requirements",
        ],
        timeline: "1-2 weeks",
      },
    },
    {
      icon: <FaLightbulb />,
      title: "Architecture Design",
      description: "DevOps infrastructure design",
      details: {
        activities: [
          "Infrastructure architecture",
          "Tool selection",
          "Security planning",
          "Scalability design",
        ],
        deliverables: [
          "Architecture documentation",
          "Tool stack specification",
          "Security framework",
        ],
        timeline: "2-3 weeks",
      },
    },
    {
      icon: <FaCogs />,
      title: "Implementation",
      description: "Setting up tools and infrastructure",
      details: {
        activities: [
          "Infrastructure setup",
          "CI/CD pipeline creation",
          "Monitoring implementation",
          "Security integration",
        ],
        deliverables: [
          "Working infrastructure",
          "Automated pipelines",
          "Monitoring dashboards",
        ],
        timeline: "4-6 weeks",
      },
    },
    {
      icon: <FaRocket />,
      title: "Deployment",
      description: "Go-live and initial operations",
      details: {
        activities: [
          "Production deployment",
          "Performance testing",
          "Security validation",
          "Documentation",
        ],
        deliverables: [
          "Production environment",
          "Performance reports",
          "Operation manuals",
        ],
        timeline: "1-2 weeks",
      },
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      description: "Performance tuning and improvements",
      details: {
        activities: [
          "Performance analysis",
          "Resource optimization",
          "Cost optimization",
          "Process refinement",
        ],
        deliverables: [
          "Optimization report",
          "Cost analysis",
          "Performance metrics",
        ],
        timeline: "Ongoing",
      },
    },
    {
      icon: <FaUserCog />,
      title: "Support & Training",
      description: "Team enablement and ongoing support",
      details: {
        activities: [
          "Team training",
          "Documentation",
          "Support setup",
          "Knowledge transfer",
        ],
        deliverables: [
          "Training materials",
          "Support documentation",
          "Maintenance guides",
        ],
        timeline: "Ongoing",
      },
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Our DevOps
            <span className={styles.gradient}> Process</span>
          </h2>
          <p className={styles.description}>
            A systematic approach to implementing DevOps practices and
            infrastructure
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
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.stepDetails}
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.detailsCard}>
              <div className={styles.detailsHeader}>
                <div className={styles.detailsIcon}>
                  {steps[activeStep].icon}
                </div>
                <h3>{steps[activeStep].title}</h3>
              </div>

              <div className={styles.detailsContent}>
                <div className={styles.detailsSection}>
                  <h4>Activities</h4>
                  <ul>
                    {steps[activeStep].details.activities.map(
                      (activity, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {activity}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div className={styles.detailsSection}>
                  <h4>Deliverables</h4>
                  <ul>
                    {steps[activeStep].details.deliverables.map(
                      (deliverable, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {deliverable}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div className={styles.timelineSection}>
                  <h4>Timeline</h4>
                  <p className={styles.timeline}>
                    {steps[activeStep].details.timeline}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsProcess;
