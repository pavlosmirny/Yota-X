import React from "react";
import styles from "./SectionDivider.module.css";

const SectionDivider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}>
        <div className={styles.line} />
        <div className={styles.centerLine}>
          <div className={styles.spark} />
        </div>
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default SectionDivider;
