"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
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
import { FeatureCard } from "./FeatureCard";

import styles from "./FeatureSection.module.css";

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: "frontend",
      title: "Frontend Excellence",
      description: "Modern web applications with React and Next.js",
      category: "Development",
      technologies: [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
        { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS3", color: "#264DE4" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      ],
      size: "large" as const,
    },
    {
      id: "backend",
      title: "Robust Backend",
      description: "Scalable server solutions and APIs",
      technologies: [
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: SiPython, name: "Python", color: "#3776AB" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      description: "Modern infrastructure and deployment solutions",
      technologies: [
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
        { icon: FaAws, name: "AWS", color: "#FF9900" },
        { icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
        { icon: SiGrafana, name: "Grafana", color: "#F46800" },
      ],
      size: "large" as const,
    },
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionHeader}
      >
        <h2 className={styles.title}>Our Capabilities</h2>
        <p className={styles.subtitle}>
          Full spectrum of web development and DevOps solutions
        </p>
      </motion.div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
