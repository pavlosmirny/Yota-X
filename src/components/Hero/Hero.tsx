"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Добавляем класс для запуска анимации после монтирования
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add(styles.visible);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Эффект параллакса для текста
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headlineRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const moveX = (clientX - innerWidth / 2) / 50;
        const moveY = (clientY - innerHeight / 2) / 50;

        headlineRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Анимированный фон */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={styles.headlineWrapper}>
          <h1 id="hero-heading" className={styles.headline} ref={headlineRef}>
            <span className={styles.gradientText}>Empowering</span> Your
            <br />
            Digital Journey
          </h1>
        </div>

        <p className={styles.subheadline}>
          Full-Stack Web Development & DevOps Solutions
          <br />
          Tailored for Your Success
        </p>

        <p className={styles.supportingText}>
          From intuitive web applications to seamless DevOps integration,
          <br />
          we deliver end-to-end solutions that drive your business forward.
        </p>

        <div className={styles.container}>
          <button
            className={styles.button}
            onClick={() => router.push("/contacts")}
          >
            Get Started
            <span className={styles.buttonGlow}></span>
          </button>
        </div>
      </div>

      <div className={styles.imageContainer} aria-hidden="true">
        <div className={styles.imageWrapper}>
          <img
            src="/Vector.svg"
            alt="Web Development Illustration"
            className={styles.heroImage}
          />
          <div className={styles.glowEffect}></div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className={styles.decorativeLines}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.line} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
