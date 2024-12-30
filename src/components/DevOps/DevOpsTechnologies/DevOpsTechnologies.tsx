// DevOpsTechnologies.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaJenkins,
  FaGitAlt,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
} from "react-icons/si";
import styles from "./DevOpsTechnologies.module.css";

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon,
  title,
  description,
  features,
  index,
}) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {icon}
          <div className={styles.iconGlow} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.featuresList}>
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            className={styles.featureItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
            viewport={{ once: true }}
          >
            <FaTools className={styles.featureIcon} />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const DevOpsTechnologies: React.FC = () => {
  const technologies = [
    {
      icon: <SiKubernetes size={40} />,
      title: "Kubernetes",
      description:
        "Container orchestration and automated deployment management",
      features: [
        "Automated scaling",
        "Load balancing",
        "Self-healing infrastructure",
      ],
    },
    {
      icon: <FaDocker size={40} />,
      title: "Docker",
      description: "Containerization platform for application packaging",
      features: [
        "Isolated environments",
        "Consistent deployments",
        "Resource efficiency",
      ],
    },
    {
      icon: <SiTerraform size={40} />,
      title: "Terraform",
      description: "Infrastructure as Code for cloud resource management",
      features: [
        "Version-controlled infrastructure",
        "Multi-cloud support",
        "Automated provisioning",
      ],
    },
    {
      icon: <SiAnsible size={40} />,
      title: "Ansible",
      description: "Automation tool for configuration management",
      features: [
        "Agentless automation",
        "Playbook-based config",
        "Large module library",
      ],
    },
    {
      icon: <FaJenkins size={40} />,
      title: "CI/CD Pipeline",
      description: "Continuous Integration and Deployment automation",
      features: [
        "Automated testing",
        "Continuous delivery",
        "Pipeline as code",
      ],
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Monitoring Stack",
      description: "Comprehensive system monitoring and alerting",
      features: ["Real-time metrics", "Custom dashboards", "Automated alerts"],
    },
  ];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionHeader}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Core
            <span className={styles.gradientText}> Technologies</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Industry-standard tools and technologies for modern DevOps practices
          </motion.p>
        </div>

        <div className={styles.cardsGrid}>
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.title} {...tech} index={index} />
          ))}
        </div>

        <div className={styles.toolsShowcase}>
          <motion.div
            className={styles.toolsGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.toolItem}>
              <SiGrafana size={24} />
              <span>Grafana</span>
            </div>
            <div className={styles.toolItem}>
              <SiPrometheus size={24} />
              <span>Prometheus</span>
            </div>
            <div className={styles.toolItem}>
              <FaGitAlt size={24} />
              <span>GitOps</span>
            </div>
            <div className={styles.toolItem}>
              <FaAws size={24} />
              <span>AWS</span>
            </div>
            <div className={styles.toolItem}>
              <SiElasticsearch size={24} />
              <span>ELK Stack</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsTechnologies;
