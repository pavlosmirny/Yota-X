// DevOpsContact.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaPaperPlane,
} from "react-icons/fa";
import styles from "./DevOpsContact.module.css";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const DevOpsContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      content: "contact@devops.com",
      link: "mailto:contact@devops.com",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "New York, NY",
      link: "#",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: "24/7 Support Available",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "#", label: "GitHub" },
    { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
    { icon: <FaTelegram />, link: "#", label: "Telegram" },
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
            Get in
            <span className={styles.gradient}> Touch</span>
          </h2>
          <p className={styles.description}>
            Ready to transform your DevOps infrastructure? Let&apos;s discuss
            your needs
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select Service</option>
                    <option value="infrastructure">Cloud Infrastructure</option>
                    <option value="cicd">CI/CD Implementation</option>
                    <option value="kubernetes">Kubernetes Management</option>
                    <option value="monitoring">Monitoring & Analytics</option>
                    <option value="security">Security Implementation</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane className={styles.buttonIcon} />
                  </>
                )}
              </button>

              {showSuccess && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thank you! We&apos;ll contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <h3>Follow Us</h3>
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    className={styles.socialIcon}
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default DevOpsContact;
