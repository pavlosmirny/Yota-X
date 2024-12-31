"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaRocket } from "react-icons/fa";
import {
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import styles from "./FrontendHero.module.css";

const CodeAnimation: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const code = `
// Frontend Component
const App = () => {
  const [data, setData] = useState<Data[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  return <DataGrid data={data} />;
}

// Backend Controller
@Controller('api')
export class AppController {
  @Get('/data')
  async getData(): Promise<Data[]> {
    return this.service.findAll();
  }
}`.split("");

  useEffect(() => {
    let index = 0;
    const fullCode = code.join("");

    const getColor = (
      char: string,
      currentIndex: number,
      fullCodeStr: string
    ) => {
      if (fullCodeStr.slice(currentIndex - 10, currentIndex) === "@Controller")
        return "#ff79c6";
      if (fullCodeStr.slice(currentIndex - 5, currentIndex) === "const")
        return "#ff79c6";
      if (char === "{" || char === "}") return "#f8f8f2";
      if (char === "(" || char === ")") return "#f8f8f2";
      if (char === ":" || char === ";" || char === "=" || char === ">")
        return "#ff79c6";
      if (char === "'") return "#f1fa8c";
      if (char === "/") return "#6272a4";
      return "#f8f8f2";
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

const FullstackHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Full-Stack
            <span className={styles.gradient}> Mastery</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Delivering end-to-end solutions with modern technologies. From
            responsive frontends to scalable backends, we build complete, robust
            applications.
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
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiNestjs size={24} color="#E0234E" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiPostgresql size={24} color="#336791" />
            </motion.div>
            <motion.div
              className={styles.techIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiMongodb size={24} color="#47A248" />
            </motion.div>
          </div>

          <div className={styles.metrics}>
            <Metric value="100%" label="End-to-End" color="#03a9f4" />
            <Metric value="Full" label="Stack Coverage" color="#f441a5" />
            <Metric value="A+" label="Performance" color="#00ff9d" />
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.codeContainer}>
            <CodeAnimation />
          </div>

          <div className={styles.features}>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaCode />
              <span>Full Stack</span>
            </motion.div>
            <motion.div className={styles.feature} whileHover={{ scale: 1.05 }}>
              <FaDatabase />
              <span>Scalable</span>
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

export default FullstackHero;
