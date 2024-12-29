"use client";
import React, { useState, useRef, useEffect } from "react";
import { IconType } from "react-icons";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaServer,
  FaCogs,
  FaChartLine,
  FaChevronDown,
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

interface StepIconProps {
  icon: IconType;
  className?: string;
}

const StepIcon: React.FC<StepIconProps> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

interface StepProps {
  step: WorkflowStep;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ step, isActive, onClick }) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (detailsRef.current) {
      const height = detailsRef.current.scrollHeight;
      setContentHeight(isActive ? height : 0);
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.step} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      <div className={styles.stepIcon}>
        <StepIcon icon={step.mainIcon} />
      </div>
      <div className={styles.stepContent}>
        <div className={styles.stepHeader}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <FaChevronDown
            className={`${styles.expandIcon} ${isActive ? styles.rotated : ""}`}
          />
        </div>
        <p className={styles.stepDescription}>{step.description}</p>
        <div
          className={styles.stepDetails}
          ref={detailsRef}
          style={{ maxHeight: `${contentHeight}px` }}
        >
          <div className={styles.detailsContent}>
            <div className={styles.technologies}>
              {step.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={styles.technology}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StepIcon icon={tech.icon} className={styles.techIcon} />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
            <ul className={styles.detailsList}>
              {step.details.map((detail, index) => (
                <li
                  key={index}
                  style={{
                    animationDelay: `${
                      (index + step.technologies.length) * 0.1
                    }s`,
                  }}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkflowProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Understanding your vision and planning the architecture",
      mainIcon: FaLightbulb,
      technologies: [],
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
      technologies: [{ icon: SiNextdotjs, name: "Next.js" }],
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
      description: "Building the user interface with Next.js",
      mainIcon: FaCode,
      technologies: [{ icon: SiNextdotjs, name: "Next.js" }],
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

  return (
    <section className={styles.workflowSection}>
      <h2 className={styles.title}>Our Development Process</h2>
      <div className={styles.timeline}>
        {steps.map((step) => (
          <Step
            key={step.id}
            step={step}
            isActive={activeStep === step.id}
            onClick={() => setActiveStep(step.id)}
          />
        ))}
      </div>
      <div className={styles.decorativeLine} />
      <div className={styles.glowEffect} />
    </section>
  );
};

export default WorkflowProcess;
