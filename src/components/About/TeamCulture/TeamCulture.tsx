"use client";
// TeamCulture.tsx

import { motion } from "framer-motion";
import {
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaHeart,
  FaBalanceScale,
} from "react-icons/fa";
import styles from "./TeamCulture.module.css";

const TeamCulture: React.FC = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
    },
    {
      icon: <FaLightbulb />,
      title: "Growth Mindset",
      description: "Continuous learning and improvement",
    },
    {
      icon: <FaBalanceScale />,
      title: "Balance",
      description: "Maintaining work-life harmony",
    },
  ];

  const teamMembers = [
    {
      role: "Engineering",
      count: "15+",
      icon: <FaCode />,
      description:
        "Full-stack developers, DevOps engineers, and solution architects",
    },
    {
      role: "Leadership",
      count: "5+",
      icon: <FaUsers />,
      description: "Experienced tech leaders and project managers",
    },
    {
      role: "Support",
      count: "24/7",
      icon: <FaHeart />,
      description: "Dedicated support and maintenance team",
    },
  ];

  const cultureHighlights = [
    {
      title: "Learning & Development",
      points: [
        "Regular tech talks and workshops",
        "Conference participation",
        "Certification support",
        "Mentorship programs",
      ],
    },
    {
      title: "Team Activities",
      points: [
        "Team building events",
        "Hackathons",
        "Knowledge sharing sessions",
        "Social gatherings",
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
            Our Team &<span className={styles.gradient}> Culture</span>
          </h2>
          <p className={styles.description}>
            At Yota-X, we believe our strength lies in our people and the
            culture we build together
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.valuesSection}>
            <h3>Our Values</h3>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.valueIcon}>
                    {value.icon}
                    <div className={styles.iconGlow} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.teamSection}>
            <h3>Our Team</h3>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.role}
                  className={styles.teamCard}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.teamIcon}>{member.icon}</div>
                  <div className={styles.teamInfo}>
                    <div className={styles.roleCount}>{member.count}</div>
                    <h4>{member.role}</h4>
                    <p>{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className={styles.cultureSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Culture & Growth</h3>
            <div className={styles.highlightsGrid}>
              {cultureHighlights.map((highlight) => (
                <div key={highlight.title} className={styles.highlightCard}>
                  <h4>{highlight.title}</h4>
                  <ul>
                    {highlight.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default TeamCulture;
