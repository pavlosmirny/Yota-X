"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPython,
  SiKubernetes,
  SiTerraform,
  SiGrafana,
} from "react-icons/si";
import { AnimatedMetric } from "./AnimatedMetric";
import { LineChart } from "./LineChart";
import styles from "./FeatureSection.module.css";

interface MetricData {
  value: number;
  label: string;
  suffix?: string;
  color?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  technologies: Array<{
    icon: IconType;
    name: string;
    color: string;
  }>;
  metrics: MetricData[];
  features: string[];
  chartData?: Array<{ value: number; label: string }>;
}

const TechIcon: React.FC<{
  icon: IconType;
  name: string;
  color: string;
}> = ({ icon: Icon, name, color }) => (
  <div className={styles.iconWrapper}>
    <Icon className={styles.icon} style={{ color }} />
    <span className={styles.tooltip}>{name}</span>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  technologies,
  metrics,
  features,
  chartData,
}) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <TechIcon key={tech.name} {...tech} />
          ))}
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={metric.label}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {chartData && (
          <div className={styles.chartContainer}>
            <LineChart data={chartData} />
          </div>
        )}

        <div className={styles.featuresList}>
          {features.map((feature) => (
            <div key={feature} className={styles.featureItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cardGlow} />
    </motion.div>
  );
};

const FeatureSection: React.FC = () => {
  const cards = [
    {
      title: "Frontend Development",
      description:
        "Modern and responsive web applications with optimal performance",
      technologies: [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS3", color: "#264DE4" },
      ],
      metrics: [
        { value: 98, label: "Performance", suffix: "%" },
        { value: 100, label: "Best Practices", suffix: "%" },
        { value: 99, label: "SEO", suffix: "%" },
      ],
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "Optimized Performance",
        "SEO Friendly",
      ],
      chartData: [
        { value: 95, label: "Q1" },
        { value: 97, label: "Q2" },
        { value: 98, label: "Q3" },
        { value: 99, label: "Q4" },
      ],
    },
    {
      title: "Backend & API",
      description:
        "Scalable server solutions with high performance and security",
      technologies: [
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: SiPython, name: "Python", color: "#3776AB" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      ],
      metrics: [
        { value: 99.9, label: "Uptime", suffix: "%" },
        { value: 45, label: "Response Time", suffix: "ms" },
        { value: 1000, label: "RPS", suffix: "+" },
      ],
      features: [
        "RESTful APIs",
        "GraphQL Support",
        "Microservices",
        "Real-time Processing",
      ],
    },
    {
      title: "DevOps & Cloud",
      description: "Automated deployment and infrastructure management",
      technologies: [
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
        { icon: FaAws, name: "AWS", color: "#FF9900" },
        { icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
        { icon: SiGrafana, name: "Grafana", color: "#F46800" },
      ],
      metrics: [
        { value: 100, label: "Automation", suffix: "%" },
        { value: 99.9, label: "Availability", suffix: "%" },
        { value: 5, label: "Deploy Time", suffix: "min" },
      ],
      features: [
        "CI/CD Pipeline",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Alerting",
      ],
      chartData: [
        { value: 99.8, label: "Q1" },
        { value: 99.9, label: "Q2" },
        { value: 99.95, label: "Q3" },
        { value: 99.99, label: "Q4" },
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Capabilities
      </motion.h2>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
