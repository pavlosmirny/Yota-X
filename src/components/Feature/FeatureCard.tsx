"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Technology } from "../types/types";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  category?: string;
  footer?: string;
  size?: "normal" | "large";
}

const TechIcon: React.FC<{ tech: Technology }> = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.techIcon}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <tech.icon
        size={24}
        color={tech.color}
        style={{
          filter: isHovered ? `drop-shadow(0 0 8px ${tech.color})` : "none",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s ease",
        }}
      />
      <span
        className={`${styles.techTooltip} ${isHovered ? styles.visible : ""}`}
      >
        {tech.name}
      </span>
    </div>
  );
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  technologies,
  category,
  footer,
  size = "normal",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.card} ${styles[size]}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardContent}>
        {category && <span className={styles.category}>{category}</span>}

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </div>

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>

      <div className={styles.cardGlow} />
      <div className={styles.cardBorder} />
    </motion.div>
  );
};
