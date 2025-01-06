// OpenPositions.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaChartLine,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import axios from "axios";
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
  { id: "Development", label: "Development", icon: <FaCode /> },
  { id: "Devops", label: "DevOps", icon: <FaServer /> },
  { id: "Design", label: "Design", icon: <FaPaintBrush /> },
  { id: "Product Management", label: "Product", icon: <FaChartLine /> },
];

const api = axios.create({
  // baseURL: "http://localhost:5002/api/v1",
  baseURL: "https://yota-x-backend.onrender.com/api/v1",
});

const OpenPositions: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);
        setError(null);

        const params =
          selectedDepartment === "all"
            ? {}
            : { department: selectedDepartment };
        const { data } = await api.get("/positions", { params });

        // Transform response data if needed
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedPositions = data.map((pos: any) => ({
          id: pos._id,
          title: pos.title,
          department: pos.department,
          type: pos.type,
          location: pos.location,
          experience: pos.experience,
          description: pos.description,
          requirements: pos.requirements,
        }));

        setPositions(transformedPositions);
      } catch (err) {
        console.error("Error fetching positions:", err);
        setError("Failed to load positions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, [selectedDepartment]);

  // Filter is now handled by the API
  const filteredPositions = positions;

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button
          onClick={() => setSelectedDepartment(selectedDepartment)}
          className={styles.retryButton}
        >
          Retry
        </button>
      </div>
    );
  }

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
            {loading ? (
              <motion.div
                className={styles.loading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaSpinner className={styles.spinner} />
                <p>Loading positions...</p>
              </motion.div>
            ) : filteredPositions.length === 0 ? (
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
