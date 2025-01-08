"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaServer,
  FaCogs,
  FaChartLine,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPython,
  SiNestjs,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGrafana,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
  SiJira,
  SiTrello,
  SiMiro,
  SiNotion,
} from "react-icons/si";
import styles from "./WorkflowProcess.module.css";

interface Technology {
  icon: IconType;
  name: string;
}

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  mainIcon: IconType;
  technologies: Technology[];
  details: string[];
}

// Компонент иконки с анимацией
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedIcon: React.FC<{ icon: IconType; className?: string }> = ({
  icon: Icon,
  className,
}) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Icon className={className} />
  </motion.div>
);

// Компонент для отображения технологий
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TechnologyBadge: React.FC<{ tech: Technology }> = ({ tech }) => (
  <motion.div
    className={styles.techBadge}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
  >
    <tech.icon className={styles.techIcon} />
    <span className={styles.techName}>{tech.name}</span>
  </motion.div>
);

const WorkflowProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mobileQuery.matches);
    };

    // Начальная проверка
    checkMobile();

    // Слушатель изменения размера окна
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Данные о шагах процесса
  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Understanding your vision and planning the architecture",
      mainIcon: FaLightbulb,
      technologies: [
        { icon: SiJira, name: "Jira" },
        { icon: SiTrello, name: "Trello" },
        { icon: SiMiro, name: "Miro" },
        { icon: SiNotion, name: "Notion" },
      ],
      details: [
        "Requirements gathering",
        "Technical specification",
        "Architecture design",
        "Timeline planning",
      ],
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Creating the visual design and interactive prototypes",
      mainIcon: FaPencilRuler,
      technologies: [
        { icon: SiFigma, name: "Figma" },
        { icon: SiAdobexd, name: "Adobe XD" },
        { icon: SiAdobephotoshop, name: "Photoshop" },
        { icon: SiSketch, name: "Sketch" },
      ],
      details: [
        "UI/UX design",
        "Responsive layouts",
        "Interactive prototypes",
        "Design system setup",
      ],
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Building the user interface with modern technologies",
      mainIcon: FaCode,
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      details: [
        "Component development",
        "State management",
        "API integration",
        "Performance optimization",
      ],
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Creating robust server-side solutions",
      mainIcon: FaServer,
      technologies: [
        { icon: SiPython, name: "Python" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
      details: [
        "API development",
        "Database architecture",
        "Authentication & security",
        "Microservices setup",
      ],
    },
    {
      id: 5,
      title: "DevOps Setup",
      description: "Setting up the CI/CD pipeline and infrastructure",
      mainIcon: FaCogs,
      technologies: [
        { icon: SiDocker, name: "Docker" },
        { icon: SiKubernetes, name: "Kubernetes" },
        { icon: SiGithubactions, name: "GitHub Actions" },
      ],
      details: [
        "Container orchestration",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Security configurations",
      ],
    },
    {
      id: 6,
      title: "Deployment",
      description: "Deploying your application securely",
      mainIcon: FaRocket,
      technologies: [
        { icon: SiDocker, name: "Docker" },
        { icon: SiKubernetes, name: "Kubernetes" },
      ],
      details: [
        "Production deployment",
        "Load balancing setup",
        "SSL configuration",
        "Performance testing",
      ],
    },
    {
      id: 7,
      title: "Monitoring & Maintenance",
      description: "Ensuring optimal performance and reliability",
      mainIcon: FaChartLine,
      technologies: [{ icon: SiGrafana, name: "Grafana" }],
      details: [
        "Performance monitoring",
        "Error tracking",
        "Regular updates",
        "Security patches",
      ],
    },
  ];

  // Автоматическое переключение шагов только для десктопа
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev % steps.length) + 1);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [steps.length, isMobile]);

  return (
    <section className={styles.workflowSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Our Development
            <span className={styles.gradient}> Process</span>
          </h2>
        </motion.div>

        <div className={styles.workflowContainer}>
          {/* Левая колонка */}
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={step.id} className={styles.stepWrapper}>
                <motion.div
                  className={`${styles.step} ${
                    activeStep === step.id ? styles.activeStep : ""
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.stepIcon}>
                    <step.mainIcon />
                  </div>
                  <div className={styles.stepInfo}>
                    <span className={styles.stepNumber}>Step {step.id}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>

                {/* Мобильная версия деталей */}
                <motion.div
                  className={styles.mobileDetails}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeStep === step.id ? "auto" : 0,
                    opacity: activeStep === step.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeStep === step.id && (
                    <div className={styles.stepDetails}>
                      <div className={styles.technologies}>
                        {step.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            className={styles.techBadge}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <tech.icon />
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className={styles.detailsContent}>
                        <h4>Key Activities</h4>
                        <ul className={styles.detailsList}>
                          {step.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Правая колонка - только для десктопа */}
          <div className={styles.rightColumn}>
            <motion.div
              className={styles.detailsContainer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              key={activeStep}
            >
              {steps.map(
                (step) =>
                  step.id === activeStep && (
                    <div key={step.id} className={styles.stepDetails}>
                      <div className={styles.detailsHeader}>
                        <div className={styles.stepIcon}>
                          <step.mainIcon />
                        </div>
                        <h2>{step.title}</h2>
                      </div>

                      <div className={styles.technologies}>
                        {step.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            className={styles.techBadge}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <tech.icon />
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className={styles.detailsContent}>
                        <h4>Key Activities</h4>
                        <ul className={styles.detailsList}>
                          {step.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;
