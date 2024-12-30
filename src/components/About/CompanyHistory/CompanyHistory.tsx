"use client";
// CompanyHistory.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaGlobe,
  FaAward,
  FaChartLine,
} from "react-icons/fa";
import styles from "./CompanyHistory.module.css";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievements: string[];
}

const CompanyHistory: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const milestones: Milestone[] = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Yota-X was founded with a vision to deliver exceptional web development and DevOps solutions.",
      icon: <FaRocket />,
      achievements: [
        "Company foundation",
        "First development team formed",
        "Initial client projects",
      ],
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description:
        "Expanded our services and team, establishing strong partnerships with global clients.",
      icon: <FaChartLine />,
      achievements: [
        "Team expansion to 10+ experts",
        "Introduction of DevOps services",
        "First international clients",
      ],
    },
    {
      year: "2022",
      title: "Global Reach",
      description:
        "Expanded our presence to multiple countries and diversified our service portfolio.",
      icon: <FaGlobe />,
      achievements: [
        "Presence in 10+ countries",
        "Launch of cloud solutions",
        "Strategic partnerships formed",
      ],
    },
    {
      year: "2023",
      title: "Innovation & Excellence",
      description:
        "Achieved significant milestones and recognition in the industry.",
      icon: <FaAward />,
      achievements: [
        "Industry awards received",
        "Advanced technology stack",
        "Major project successes",
      ],
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Continuing to innovate and expand our capabilities to serve clients better.",
      icon: <FaUsers />,
      achievements: [
        "Expanded service offerings",
        "Enhanced team expertise",
        "New market ventures",
      ],
    },
  ];

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
            Our
            <span className={styles.gradient}> Journey</span>
          </h2>
          <p className={styles.description}>
            From our founding to the present day, we&apos;ve been on a mission
            to transform digital experiences through innovation and excellence
          </p>
        </motion.div>

        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`${styles.timelineItem} ${
                  activeMilestone === index ? styles.active : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveMilestone(index)}
              >
                <div className={styles.timelineIcon}>
                  {milestone.icon}
                  <div className={styles.iconGlow} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.year}>{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <AnimatePresence>
                  {activeMilestone === index && (
                    <motion.div
                      className={styles.achievementsList}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className={styles.achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {achievement}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default CompanyHistory;
