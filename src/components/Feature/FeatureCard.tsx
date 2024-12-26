// components/FeatureCard.tsx
import React from "react";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  visualization: React.ReactNode;
  isActive?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  visualization,
  isActive = false,
}) => {
  return (
    <div
      id={id}
      className={`${styles.featureCard} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.visualization}>{visualization}</div>
      <div className={`${styles.meta} ${styles.centerMeta}`}>
        <div className={styles.metaTitle}>{title}</div>
        <div className={styles.metaDescription}>{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
