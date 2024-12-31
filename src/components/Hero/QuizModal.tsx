// QuizModal.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuizModal.module.css";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "What type of solution best fits your needs?",
    options: ["Web Development", "DevOps Solutions", "Full Stack Integration"],
  },
  {
    question: "What's your project scale?",
    options: ["Startup / Small Business", "Enterprise", "Personal Project"],
  },
  {
    question: "What's your primary goal?",
    options: [
      "Fast Time to Market",
      "Scalability & Performance",
      "Cost Optimization",
    ],
  },
];

interface RecommendationType {
  title: string;
  description: string;
  features: string[];
  icon: string;
  link: string;
}

const recommendations: { [key: string]: RecommendationType } = {
  "Web Development-Startup / Small Business-Fast Time to Market": {
    title: "Quick Launch Package",
    description:
      "Get your web application up and running quickly with our optimized development process.",
    features: [
      "Next.js & React Development",
      "Responsive Design",
      "Essential Features Focus",
      "Quick Deployment",
    ],
    icon: "🚀",
    link: "/services/frontend-development",
  },
  "DevOps Solutions-Enterprise-Scalability & Performance": {
    title: "Enterprise DevOps Suite",
    description: "Comprehensive DevOps solution for large-scale operations.",
    features: [
      "Kubernetes Orchestration",
      "CI/CD Pipeline Setup",
      "Cloud Infrastructure",
      "Monitoring & Logging",
    ],
    icon: "⚙️",
    link: "/services/devops-services",
  },
  // Дефолтная рекомендация
  default: {
    title: "Custom Solution",
    description: "Tailored solution designed specifically for your needs.",
    features: [
      "Custom Development",
      "Flexible Integration",
      "Scalable Architecture",
      "Dedicated Support",
    ],
    icon: "💡",
    link: "/services/frontend-development",
  },
};

interface QuizModalProps {
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const key = answers.join("-");
    return recommendations[key] || recommendations.default;
  };

  const handleNavigation = () => {
    const recommendation = getRecommendation();
    window.location.href = recommendation.link;
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              className={styles.questionContainer}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <h3 className={styles.questionTitle}>
                {questions[currentQuestion].question}
              </h3>
              <div className={styles.options}>
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={styles.optionButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
              <div className={styles.progress}>
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              className={styles.resultContainer}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className={styles.resultIcon}>
                {getRecommendation().icon}
              </div>
              <h3 className={styles.resultTitle}>
                {getRecommendation().title}
              </h3>
              <p className={styles.resultDescription}>
                {getRecommendation().description}
              </p>
              <div className={styles.featuresList}>
                {getRecommendation().features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    ✓ {feature}
                  </motion.div>
                ))}
              </div>
              <motion.button
                className={styles.actionButton}
                onClick={handleNavigation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore This Solution
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default QuizModal;
