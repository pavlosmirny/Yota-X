// DevOpsTestimonials.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";
import styles from "./DevOpsTestimonials.module.css";

interface Testimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  companyIcon: React.ReactNode;
  content: string;
  rating: number;
  tags: string[];
}

const DevOpsTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Michael Chen",
      position: "CTO",
      company: "TechFlow Solutions",
      companyIcon: <SiKubernetes />,
      content:
        "The DevOps transformation has significantly improved our deployment frequency and reliability. The team's expertise in Kubernetes and CI/CD pipelines helped us achieve a 90% reduction in deployment time.",
      rating: 5,
      tags: ["Kubernetes", "CI/CD", "Automation"],
    },
    {
      id: 2,
      author: "Sarah Johnson",
      position: "VP of Engineering",
      company: "CloudScale Inc",
      companyIcon: <SiAmazonwebservices />,
      content:
        "Outstanding cloud infrastructure optimization. Their team helped us reduce our AWS costs by 40% while improving system performance and reliability. The monitoring setup is particularly impressive.",
      rating: 5,
      tags: ["AWS", "Cost Optimization", "Monitoring"],
    },
    {
      id: 3,
      author: "David Kim",
      position: "Lead DevOps Engineer",
      company: "InnovateTech",
      companyIcon: <SiGooglecloud />,
      content:
        "The implementation of GitOps practices and automated testing has transformed our development workflow. Zero-downtime deployments and comprehensive monitoring have become our new standard.",
      rating: 5,
      tags: ["GitOps", "Testing", "Infrastructure"],
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Client
            <span className={styles.gradient}> Success Stories</span>
          </h2>
          <p className={styles.description}>
            Real feedback from companies that have transformed their operations
            with our DevOps solutions
          </p>
        </motion.div>

        <div className={styles.testimonialContainer}>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.testimonialWrapper}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                className={styles.testimonialCard}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                <div className={styles.quoteIcon}>
                  <FaQuoteLeft />
                </div>
                <p className={styles.testimonialContent}>
                  {testimonials[activeIndex].content}
                </p>
                <div className={styles.rating}>
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
                <div className={styles.tags}>
                  {testimonials[activeIndex].tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.companyIcon}>
                    {testimonials[activeIndex].companyIcon}
                  </div>
                  <div className={styles.authorInfo}>
                    <strong>{testimonials[activeIndex].author}</strong>
                    <span>{testimonials[activeIndex].position}</span>
                    <span>{testimonials[activeIndex].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => {
                const direction = index > activeIndex ? 1 : -1;
                setDirection(direction);
                setActiveIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsTestimonials;
