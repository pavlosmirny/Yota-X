// DevOpsHero.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDocker, FaCloud, FaServer, FaCogs } from "react-icons/fa";
import { SiAnsible, SiTerraform, SiKubernetes } from "react-icons/si";
import styles from "./DevOpsHero.module.css";

const CodeAnimation: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const code = `
# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: webapp:latest
        ports:
        - containerPort: 80`.split("");

  useEffect(() => {
    let index = 0;
    const codeStr = code.join("");

    const interval = setInterval(() => {
      if (index < codeStr.length && codeRef.current) {
        const char = codeStr[index];
        const span = document.createElement("span");

        // Проверяем предыдущие символы для определения контекста
        const prevText = codeStr.slice(0, index);
        const currentLine = prevText.split("\n").pop() || "";

        if (char === "#") {
          span.className = `${styles.codeChar} ${styles.comment}`;
        } else if (char === ":" || char === "-") {
          span.className = `${styles.codeChar} ${styles.operator}`;
        } else if (
          currentLine.trim().startsWith("apiVersion") ||
          currentLine.trim().startsWith("kind") ||
          currentLine.trim().startsWith("metadata") ||
          currentLine.trim().startsWith("spec")
        ) {
          span.className = `${styles.codeChar} ${styles.keyword}`;
        } else if (!isNaN(Number(char))) {
          span.className = `${styles.codeChar} ${styles.number}`;
        } else if (char === '"' || char === "'") {
          span.className = `${styles.codeChar} ${styles.string}`;
        } else {
          span.className = styles.codeChar;
        }

        if (char === "\n") {
          const br = document.createElement("br");
          codeRef.current.appendChild(br);
        } else {
          span.textContent = char;
          codeRef.current.appendChild(span);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <div ref={codeRef} className={styles.codeBlock} />;
};

const DevOpsHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Modern
            <span className={styles.gradient}> DevOps </span>
            Solutions
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Streamline your development pipeline with automated deployment,
            scalable infrastructure, and continuous integration practices.
          </motion.p>

          <div className={styles.techStack}>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDocker size={24} color="#2496ED" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiKubernetes size={24} color="#326CE5" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiTerraform size={24} color="#7B42BC" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiAnsible size={24} color="#EE0000" />
            </motion.div>
          </div>

          <div className={styles.metrics}>
            <motion.div
              className={styles.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.metricValue} style={{ color: "#00C853" }}>
                99.9%
              </div>
              <div className={styles.metricLabel}>Uptime</div>
            </motion.div>
            <motion.div
              className={styles.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.metricValue} style={{ color: "#2196F3" }}>
                80%
              </div>
              <div className={styles.metricLabel}>Cost Reduction</div>
            </motion.div>
            <motion.div
              className={styles.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.metricValue} style={{ color: "#FF4081" }}>
                5x
              </div>
              <div className={styles.metricLabel}>Faster Deployment</div>
            </motion.div>
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.codeContainer}>
            <CodeAnimation />
          </div>

          <div className={styles.features}>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaCloud />
              <span>Cloud Native</span>
            </motion.div>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaServer />
              <span>Infrastructure as Code</span>
            </motion.div>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaCogs />
              <span>Automation</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsHero;