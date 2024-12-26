"use client";
import React, { useState, useEffect } from "react";
import styles from "./AutoSlider.module.css";
import { FaLaptopCode, FaServer, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Custom Web Development by YotaX",
      text: `Tailored frontend and backend solutions to build seamless and scalable applications, ensuring your business stands out online.`,
      icon: <FaLaptopCode size={60} color="#1a73e8" />,
    },
    {
      id: 2,
      title: "DevOps & Infrastructure",
      text: `Efficient DevOps practices and cloud infrastructure management to ensure reliable and scalable deployments.`,
      icon: <FaServer size={60} color="#1a73e8" />,
    },
    {
      id: 3,
      title: "Security Auditing",
      text: `Comprehensive vulnerability assessments and security audits to protect your applications from potential threats.`,
      icon: <FaShieldAlt size={60} color="#1a73e8" />,
    },
    {
      id: 4,
      title: "Continuous Integration & Deployment",
      text: `Automated CI/CD pipelines for faster, reliable releases and seamless updates, enhancing your development workflow.`,
      icon: <FaSyncAlt size={60} color="#1a73e8" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getSlideClassName = (index: number) => {
    const isActive = index === currentSlide;
    const isNext = index === (currentSlide + 1) % slides.length;
    const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;

    if (isActive) return `${styles.slide} ${styles.active}`;
    if (isNext) return `${styles.slide} ${styles.next}`;
    if (isPrev) return `${styles.slide} ${styles.prev}`;
    return `${styles.slide} ${styles.hidden}`;
  };

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={styles.sliderContainer}
    >
      {slides.map((slide, index) => (
        <div key={slide.id} className={getSlideClassName(index)}>
          <div className={styles.slideContent}>
            {/* <img
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            /> */}
            <div className={styles.slideIcon}>{slide.icon}</div>
            <h2 className={styles.slideTitle}>{slide.title}</h2>
            <p className={styles.slideText}>{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoSlider;
