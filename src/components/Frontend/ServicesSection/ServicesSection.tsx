// ServicesSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobile,
  FaRocket,
  FaPalette,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import styles from "./ServicesSection.module.css";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  index,
}) => (
  <motion.div
    className={styles.serviceCard}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className={styles.iconWrapper}>
      {icon}
      <div className={styles.iconGlow} />
    </div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
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
          {feature}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaLaptopCode size={32} />,
      title: "Web Applications",
      description:
        "Custom web applications with modern architecture and optimal performance",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Cross-browser compatibility",
      ],
    },
    {
      icon: <FaMobile size={32} />,
      title: "Responsive Design",
      description:
        "Pixel-perfect responsive interfaces that work on any device",
      features: [
        "Mobile-first approach",
        "Adaptive layouts",
        "Touch-friendly interfaces",
      ],
    },
    {
      icon: <FaRocket size={32} />,
      title: "Performance Optimization",
      description: "Optimize your application for maximum speed and efficiency",
      features: [
        "Code splitting & lazy loading",
        "Resource optimization",
        "Performance monitoring",
      ],
    },
    {
      icon: <FaPalette size={32} />,
      title: "UI/UX Implementation",
      description:
        "Transform designs into pixel-perfect, interactive interfaces",
      features: [
        "Pixel-perfect development",
        "Animation & interactions",
        "Design system implementation",
      ],
    },
    {
      icon: <FaCogs size={32} />,
      title: "Frontend Architecture",
      description: "Scalable and maintainable frontend architecture solutions",
      features: [
        "Component architecture",
        "State management",
        "Code organization",
      ],
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Performance Auditing",
      description:
        "Comprehensive analysis and optimization of frontend performance",
      features: [
        "Performance metrics",
        "Optimization strategies",
        "UX improvements",
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
            Our Frontend
            <span className={styles.gradientText}> Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            Comprehensive frontend development solutions to bring your digital
            vision to life
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default ServicesSection;
