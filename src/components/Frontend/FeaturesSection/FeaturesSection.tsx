// FeaturesSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaLightbulb,
  FaCode,
  FaChartLine,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "./FeaturesSection.module.css";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  metrics,
  index,
}) => (
  <motion.div
    className={styles.featureCard}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className={styles.cardHeader}>
      <div className={styles.iconBox}>
        {icon}
        <div className={styles.iconGlow} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
    </div>
    <p className={styles.featureDescription}>{description}</p>
    <div className={styles.metricsGrid}>
      {metrics.map((metric, idx) => (
        <div key={idx} className={styles.metricItem}>
          <div className={styles.metricValue}>{metric.value}</div>
          <div className={styles.metricLabel}>{metric.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaServer size={24} />,
      title: "Server Side Rendering",
      description:
        "Optimize initial page load and SEO with server-side rendering capabilities",
      metrics: [
        { value: "50%", label: "Faster Initial Load" },
        { value: "100%", label: "SEO Friendly" },
        { value: "2s", label: "First Paint" },
      ],
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Static Site Generation",
      description:
        "Pre-render pages at build time for optimal performance and scalability",
      metrics: [
        { value: "10x", label: "Faster Load Time" },
        { value: "0ms", label: "TTFB" },
        { value: "∞", label: "Scalability" },
      ],
    },
    {
      icon: <FaCode size={24} />,
      title: "Code Quality",
      description:
        "Maintain high code quality standards with modern best practices",
      metrics: [
        { value: "98%", label: "Code Coverage" },
        { value: "A+", label: "Quality Score" },
        { value: "0", label: "Critical Issues" },
      ],
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Performance Metrics",
      description:
        "Monitor and optimize core web vitals for the best user experience",
      metrics: [
        { value: "98+", label: "Performance" },
        { value: "0.8s", label: "FCP" },
        { value: "2.5s", label: "LCP" },
      ],
    },
    {
      icon: <FaSearch size={24} />,
      title: "SEO Optimization",
      description: "Implement advanced SEO techniques for better visibility",
      metrics: [
        { value: "100%", label: "SEO Score" },
        { value: "A+", label: "Accessibility" },
        { value: "Top", label: "Rankings" },
      ],
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Best Practices",
      description: "Follow industry best practices for sustainable development",
      metrics: [
        { value: "100%", label: "Best Practices" },
        { value: "A+", label: "Security Score" },
        { value: "0", label: "Vulnerabilities" },
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
            Features &<span className={styles.gradientText}> Benefits</span>
          </h2>
          <p className={styles.sectionDescription}>
            Advanced technical solutions and proven development practices
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
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
            <div className={styles.statValue}>100+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>99%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Support Available</div>
          </div>
        </motion.div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default FeaturesSection;
