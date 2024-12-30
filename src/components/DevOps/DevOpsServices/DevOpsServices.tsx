// DevOpsServices.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCode,
  FaLock,
  FaChartLine,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "./DevOpsServices.module.css";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  techStack: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  benefits,
  techStack,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`${styles.serviceCard} ${isExpanded ? styles.expanded : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.cardMain}>
        <div className={styles.cardIcon}>
          {icon}
          <div className={styles.iconGlow} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      <motion.div
        className={styles.cardDetails}
        initial={false}
        animate={{
          height: isExpanded ? "auto" : "0",
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.benefitsSection}>
          <h4>Benefits:</h4>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.techSection}>
          <h4>Tech Stack:</h4>
          <div className={styles.techTags}>
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className={styles.techTag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DevOpsServices: React.FC = () => {
  const services = [
    {
      icon: <FaCloud size={32} />,
      title: "Cloud Infrastructure",
      description:
        "Design and implementation of scalable cloud infrastructure solutions",
      benefits: [
        "High availability architecture",
        "Cost optimization",
        "Automated scaling",
        "Disaster recovery",
      ],
      techStack: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation"],
    },
    {
      icon: <FaCode size={32} />,
      title: "CI/CD Pipeline Setup",
      description:
        "Implementation of automated deployment pipelines for continuous delivery",
      benefits: [
        "Faster deployment cycles",
        "Automated testing",
        "Quality assurance",
        "Consistent releases",
      ],
      techStack: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
    },
    {
      icon: <FaLock size={32} />,
      title: "Security Implementation",
      description:
        "Implementation of security best practices and compliance measures",
      benefits: [
        "Enhanced security posture",
        "Compliance adherence",
        "Vulnerability management",
        "Access control",
      ],
      techStack: ["Vault", "CIS Benchmarks", "Security Groups", "WAF"],
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Monitoring & Analytics",
      description:
        "Comprehensive monitoring and performance analysis solutions",
      benefits: [
        "Real-time monitoring",
        "Performance insights",
        "Proactive alerts",
        "Capacity planning",
      ],
      techStack: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
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
            <span className={styles.gradient}> Services</span>
          </h2>
          <p className={styles.description}>
            Comprehensive DevOps solutions to streamline your development
            workflow and optimize infrastructure performance
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.statBox}>
            <FaServer className={styles.statIcon} />
            <div className={styles.statValue}>99.9%</div>
            <div className={styles.statLabel}>Uptime Guaranteed</div>
          </div>
          <div className={styles.statBox}>
            <FaCogs className={styles.statIcon} />
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Automations Created</div>
          </div>
          <div className={styles.statBox}>
            <FaNetworkWired className={styles.statIcon} />
            <div className={styles.statValue}>1000+</div>
            <div className={styles.statLabel}>Deployments</div>
          </div>
          <div className={styles.statBox}>
            <FaShieldAlt className={styles.statIcon} />
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Security Coverage</div>
          </div>
        </motion.div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsServices;
