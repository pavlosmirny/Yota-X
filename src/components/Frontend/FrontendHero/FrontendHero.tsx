"use client"; // Убедитесь, что этот файл используется как клиентский компонент

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaMobile, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import styles from "./FrontendHero.module.css";

const CodeAnimation: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const code = `
interface Props {
  title: string;
  onAction: () => void;
}

const Component = ({ title, onAction }: Props) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <button onClick={onAction}>
        Click me
      </button>
    </div>
  );
};`.split("");

  useEffect(() => {
    let index = 0;
    const fullCode = code.join("");

    const getColor = (
      char: string,
      currentIndex: number,
      fullCodeStr: string
    ) => {
      // Определяем цвета для разных элементов кода
      if (fullCodeStr.slice(currentIndex - 9, currentIndex) === "interface")
        return "#ff79c6";
      if (fullCodeStr.slice(currentIndex - 5, currentIndex) === "const")
        return "#ff79c6";
      if (fullCodeStr.slice(currentIndex - 6, currentIndex) === "return")
        return "#ff79c6";
      if (char === "{" || char === "}") return "#f8f8f2";
      if (char === "(" || char === ")") return "#f8f8f2";
      if (char === ":" || char === ";" || char === "=" || char === ">")
        return "#ff79c6";
      if (char === '"') return "#f1fa8c";
      return "#f8f8f2"; // Базовый цвет для остального текста
    };

    const interval = setInterval(() => {
      if (index < code.length && codeRef.current) {
        const char = code[index];
        if (char === "\n") {
          const br = document.createElement("br");
          codeRef.current.appendChild(br);
        } else {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.color = getColor(char, index, fullCode);
          // Добавляем класс для анимации через CSS
          span.classList.add(styles.codeChar);
          codeRef.current.appendChild(span);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [code]);

  return <div ref={codeRef} className={styles.codeBlock} />;
};

interface MetricProps {
  value: string;
  label: string;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ value, label, color }) => (
  <motion.div
    className={styles.metric}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.metricValue} style={{ color }}>
      {value}
    </div>
    <div className={styles.metricLabel}>{label}</div>
  </motion.div>
);

const FrontendHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Frontend Development
            <span className={styles.gradient}>Excellence</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Creating exceptional user experiences with modern web technologies.
            From responsive designs to high-performance applications.
          </motion.p>

          <div className={styles.techStack}>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaReact size={24} color="#61DAFB" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiNextdotjs size={24} color="#ffffff" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiTypescript size={24} color="#3178C6" />
            </motion.div>
          </div>

          <div className={styles.metrics}>
            <Metric value="98+" label="Performance Score" color="#03a9f4" />
            <Metric value="100%" label="SEO Optimized" color="#f441a5" />
            <Metric value="2s" label="Load Time" color="#00ff9d" />
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.codeContainer}>
            <CodeAnimation />
          </div>

          <div className={styles.features}>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaCode />
              <span>Clean Code</span>
            </motion.div>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaMobile />
              <span>Responsive</span>
            </motion.div>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaRocket />
              <span>Optimized</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default FrontendHero;
