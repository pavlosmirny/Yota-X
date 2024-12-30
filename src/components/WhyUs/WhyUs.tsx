"use client";
import { useEffect, useState, useRef } from "react";
import { FaRocket, FaCheckCircle, FaChartLine } from "react-icons/fa";
import styles from "./WhyUs.module.css";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  label,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = 0;
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div className={styles.counterBox} ref={countRef}>
      <div className={styles.counterValue}>
        {count}
        {suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const WhyUs = () => {
  const advantages = [
    {
      icon: FaRocket,
      title: "Rapid Development",
      description: "Fast-paced development with maintainable, scalable code",
    },
    {
      icon: FaCheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage",
    },
    {
      icon: FaChartLine,
      title: "Continuous Growth",
      description: "Regular updates and performance optimizations",
    },
  ];

  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>

      {/* Metrics */}
      <div className={styles.metricsContainer}>
        <Counter
          end={100}
          duration={2000}
          label="Projects Completed"
          suffix="+"
        />
        <Counter end={5} duration={2000} label="Years Experience" suffix="+" />
        <Counter end={50} duration={2000} label="Happy Clients" suffix="+" />
      </div>

      {/* Advantages */}
      <div className={styles.advantagesGrid}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <advantage.icon className={styles.icon} />
            </div>
            <h3 className={styles.advantageTitle}>{advantage.title}</h3>
            <p className={styles.advantageText}>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
