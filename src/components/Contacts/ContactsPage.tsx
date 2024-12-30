// ContactsPage.tsx
"use client";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeadset,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./ContactsPage.module.css";
import { useRouter } from "next/navigation";

const ContactsPage: React.FC = () => {
  const router = useRouter();

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "General Inquiries",
      description: "Have a question about our services?",
      email: "info@yota-x.com",
      action: "Send Email",
      onClick: () => (window.location.href = "mailto:info@yota-x.com"),
    },
    {
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "Need help with existing projects?",
      email: "support@yota-x.com",
      action: "Get Support",
      onClick: () => (window.location.href = "mailto:support@yota-x.com"),
    },
    {
      icon: <FaBriefcase />,
      title: "Career Opportunities",
      description: "Interested in joining our team?",
      action: "View Openings",
      onClick: () => router.push("/careers"),
    },
  ];

  const locations = [
    {
      city: "Lviv",
      country: "Ukraine",
      phone: "+380 66 251 09 65",
      email: "Lviv@yota-x.com",
    },
    {
      city: "Kyiv",
      country: "Ukraine",
      phone: "+380 66 251 09 65",
      email: "Kyiv@yota-x.com",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>
            Get in
            <span className={styles.gradient}> Touch</span>
          </h1>
          <p className={styles.description}>
            We&apos;re here to help. Choose the best way to reach us.
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.contactMethods}>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={method.onClick}
              >
                <div className={styles.cardIcon}>{method.icon}</div>
                <h2>{method.title}</h2>
                <p>{method.description}</p>
                {method.email && (
                  <div className={styles.email}>{method.email}</div>
                )}
                <button className={styles.actionButton}>
                  {method.action} <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.locationsSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Our Locations</h2>
            <div className={styles.locationsGrid}>
              {locations.map((location) => (
                <div key={location.city} className={styles.locationCard}>
                  <div className={styles.locationIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <h3>{location.city}</h3>
                  <p>{location.country}</p>
                  <div className={styles.locationContact}>
                    <div>
                      <FaPhone /> {location.phone}
                    </div>
                    <div>
                      <FaEnvelope /> {location.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.mapSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Здесь может быть интеграция с картой */}
            <div className={styles.mapPlaceholder}>
              <p>Interactive Map</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default ContactsPage;
