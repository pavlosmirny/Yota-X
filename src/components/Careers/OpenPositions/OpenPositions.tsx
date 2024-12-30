// OpenPositions.tsx
"use client";
// OpenPositions.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaChartLine,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./OpenPositions.module.css";

interface Position {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}

const departments = [
  { id: "all", label: "All Positions", icon: null },
  { id: "development", label: "Development", icon: <FaCode /> },
  { id: "devops", label: "DevOps", icon: <FaServer /> },
  { id: "design", label: "Design", icon: <FaPaintBrush /> },
  { id: "product", label: "Product", icon: <FaChartLine /> },
];

const OpenPositions: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);

  const positions: Position[] = [
    {
      id: "pos1",
      title: "Senior Frontend Developer",
      department: "development",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description:
        "We're looking for an experienced Frontend Developer to join our team and help build exceptional user experiences.",
      requirements: [
        "Expert knowledge of React and TypeScript",
        "Experience with Next.js and modern frontend tools",
        "Strong understanding of web performance optimization",
        "Experience with responsive design and cross-browser compatibility",
      ],
    },
    {
      id: "pos2",
      title: "DevOps Engineer",
      department: "devops",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      description:
        "Join our DevOps team to help build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Experience with AWS, Kubernetes, and Docker",
        "Strong knowledge of CI/CD practices",
        "Infrastructure as Code experience (Terraform)",
        "Monitoring and logging systems experience",
      ],
    },
    {
      id: "pos3",
      title: "UI/UX Designer",
      department: "design",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      description:
        "We're seeking a talented UI/UX Designer to create beautiful and functional interfaces for our products.",
      requirements: [
        "Strong portfolio of web and mobile designs",
        "Experience with Figma and modern design tools",
        "Understanding of user-centered design principles",
        "Experience working with development teams",
      ],
    },
    {
      id: "pos4",
      title: "Product Manager",
      department: "product",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description:
        "Looking for an experienced Product Manager to drive our product vision and strategy.",
      requirements: [
        "Experience managing complex tech products",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities",
        "Agile methodology experience",
      ],
    },
  ];

  const filteredPositions = positions.filter(
    (position) =>
      selectedDepartment === "all" || position.department === selectedDepartment
  );

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
            Join
            <span className={styles.gradient}> Yota-X</span>
          </h2>
          <p className={styles.description}>
            Explore opportunities to work with cutting-edge technologies and
            shape the future of web development
          </p>
        </motion.div>

        <motion.div
          className={styles.departmentFilter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {departments.map((dept) => (
            <button
              key={dept.id}
              className={`${styles.filterButton} ${
                selectedDepartment === dept.id ? styles.active : ""
              }`}
              onClick={() => setSelectedDepartment(dept.id)}
            >
              {dept.icon && (
                <span className={styles.buttonIcon}>{dept.icon}</span>
              )}
              {dept.label}
            </button>
          ))}
        </motion.div>

        <div className={styles.positionsGrid}>
          <AnimatePresence mode="wait">
            {filteredPositions.length === 0 ? (
              <motion.div
                className={styles.noPositions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <p>No open positions in this department at the moment.</p>
              </motion.div>
            ) : (
              filteredPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  className={`${styles.positionCard} ${
                    expandedPosition === position.id ? styles.expanded : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() =>
                    setExpandedPosition(
                      expandedPosition === position.id ? null : position.id
                    )
                  }
                >
                  <div className={styles.cardHeader}>
                    <h3>{position.title}</h3>
                    <div className={styles.tags}>
                      <span className={styles.tag}>
                        <FaMapMarkerAlt /> {position.location}
                      </span>
                      <span className={styles.tag}>
                        <FaClock /> {position.type}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedPosition === position.id && (
                      <motion.div
                        className={styles.cardDetails}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className={styles.description}>
                          {position.description}
                        </p>

                        <div className={styles.requirements}>
                          <h4>Requirements</h4>
                          <ul>
                            {position.requirements.map((req, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {req}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.cardFooter}>
                          <span className={styles.experience}>
                            Experience: {position.experience}
                          </span>
                          <button className={styles.applyButton}>
                            Apply Now <FaArrowRight />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default OpenPositions;
