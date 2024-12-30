// DevOpsCases.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaServer,
  FaCloudUploadAlt,
  FaChartLine,
  FaClock,
  FaUsers,
  FaCode,
} from "react-icons/fa";

import styles from "./DevOpsCases.module.css";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metrics: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
    improvements: string[];
  };
  technologies: string[];
  image: string;
}

const CaseIllustration: React.FC<{ type: string }> = ({ type }) => {
  if (type === "ecommerce") {
    return (
      <div className={styles.illustration}>
        <svg viewBox="0 0 600 400" className={styles.svgIllustration}>
          {/* График производительности */}
          <path
            d="M50 350 Q 150 200, 250 250 T 450 100"
            fill="none"
            stroke="#326CE5"
            strokeWidth="3"
            className={styles.perfLine}
          />
          {/* Круги для узлов кластера */}
          <g className={styles.nodes}>
            {[...Array(6)].map((_, i) => (
              <circle
                key={i}
                cx={100 + i * 80}
                cy={200}
                r="20"
                fill="rgba(50, 108, 229, 0.1)"
                stroke="#326CE5"
                strokeWidth="2"
                className={styles.node}
              />
            ))}
          </g>
          {/* Соединительные линии */}
          <g className={styles.connections}>
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1={120 + i * 80}
                y1={200}
                x2={180 + i * 80}
                y2={200}
                stroke="#326CE5"
                strokeWidth="2"
                strokeDasharray="5,5"
                className={styles.connection}
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={styles.illustration}>
      <svg viewBox="0 0 600 400" className={styles.svgIllustration}>
        {/* CI/CD Pipeline визуализация */}
        <g className={styles.pipeline}>
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <rect
                x={100 + i * 120}
                y={180}
                width="80"
                height="40"
                rx="6"
                fill="rgba(50, 108, 229, 0.1)"
                stroke="#326CE5"
                strokeWidth="2"
                className={styles.stage}
              />
              {i < 3 && (
                <path
                  d={`M${190 + i * 120},200 L${210 + i * 120},200`}
                  stroke="#326CE5"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className={styles.arrow}
                />
              )}
            </React.Fragment>
          ))}
        </g>
        {/* Определение маркера для стрелок */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#326CE5" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

const DevOpsCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "case1",
      title: "E-Commerce Platform Migration",
      subtitle: "Cloud Infrastructure Optimization",
      description:
        "Complete migration and optimization of a high-traffic e-commerce platform",
      challenge:
        "Legacy infrastructure with scalability issues during peak loads",
      solution:
        "Implemented auto-scaling Kubernetes clusters with optimized CI/CD pipelines",
      results: {
        metrics: [
          { label: "Deployment Time", value: "95%↓", icon: <FaClock /> },
          { label: "Response Time", value: "60%↓", icon: <FaChartLine /> },
          { label: "Infrastructure Cost", value: "40%↓", icon: <FaServer /> },
        ],
        improvements: [
          "Zero-downtime deployments",
          "Automated scaling during peak loads",
          "Enhanced monitoring and alerting",
        ],
      },
      technologies: ["Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus"],
      image: "/api/placeholder/600/400",
    },
    {
      id: "case2",
      title: "FinTech Infrastructure Automation",
      subtitle: "DevOps Pipeline Modernization",
      description:
        "Modernization of deployment pipeline for a financial services platform",
      challenge: "Manual deployments causing frequent production issues",
      solution: "Built comprehensive CI/CD automation with security compliance",
      results: {
        metrics: [
          { label: "Release Frequency", value: "10x↑", icon: <FaCode /> },
          { label: "Testing Coverage", value: "100%", icon: <FaUsers /> },
          {
            label: "Deployment Success",
            value: "99.9%",
            icon: <FaCloudUploadAlt />,
          },
        ],
        improvements: [
          "Fully automated testing and deployment",
          "Enhanced security compliance",
          "Reduced human error rate",
        ],
      },
      technologies: ["GitLab CI", "Docker", "Ansible", "ELK Stack", "Vault"],
      image: "/api/placeholder/600/400",
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
            Case
            <span className={styles.gradient}> Studies</span>
          </h2>
          <p className={styles.description}>
            Real-world examples of successful DevOps transformations and their
            impact
          </p>
        </motion.div>

        <div className={styles.casesGrid}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className={`${styles.caseCard} ${
                activeCase === study.id ? styles.active : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() =>
                setActiveCase(activeCase === study.id ? null : study.id)
              }
            >
              <div className={styles.cardImage}>
                <CaseIllustration
                  type={study.id === "case1" ? "ecommerce" : "fintech"}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardSubtitle}>{study.subtitle}</p>
                <p className={styles.cardDescription}>{study.description}</p>

                <AnimatePresence>
                  {activeCase === study.id && (
                    <motion.div
                      className={styles.cardDetails}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.detailsSection}>
                        <h4>Challenge:</h4>
                        <p>{study.challenge}</p>
                      </div>

                      <div className={styles.detailsSection}>
                        <h4>Solution:</h4>
                        <p>{study.solution}</p>
                      </div>

                      <div className={styles.metricsGrid}>
                        {study.results.metrics.map((metric, idx) => (
                          <div key={idx} className={styles.metricItem}>
                            <div className={styles.metricIcon}>
                              {metric.icon}
                            </div>
                            <div className={styles.metricValue}>
                              {metric.value}
                            </div>
                            <div className={styles.metricLabel}>
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={styles.improvements}>
                        <h4>Key Improvements:</h4>
                        <ul>
                          {study.results.improvements.map(
                            (improvement, idx) => (
                              <li key={idx}>{improvement}</li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className={styles.technologies}>
                        <h4>Technologies Used:</h4>
                        <div className={styles.techTags}>
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsCases;
