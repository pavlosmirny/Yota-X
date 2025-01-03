"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaRocket, FaClock } from "react-icons/fa";
import styles from "./CTASection.module.css";

const BOT_TOKEN = "7722075237:AAFcS-CxOtsg5qI0uwantK9_GcPcEk3xy_M";
const CHAT_ID = "1301013001";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  description: string;
  timeline: string;
  budget: string;
}

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const getBudgetRange = (budget: string) => {
      switch (budget) {
        case "small":
          return "$5k - $10k";
        case "medium":
          return "$10k - $25k";
        case "large":
          return "$25k+";
        default:
          return "Не указан";
      }
    };

    const text = `
🚀 Новая заявка на Frontend проект!

👤 Клиент:
▫️ Имя: ${formData.name}
▫️ Email: ${formData.email}

🎯 Детали проекта:
▫️ Тип проекта: ${formData.projectType}
▫️ Сроки: ${formData.timeline}
▫️ Бюджет: ${getBudgetRange(formData.budget)}

📝 Описание проекта:
${formData.description}

📍 Отправлено со страницы: Frontend Development
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        }
      );

      if (!response.ok) throw new Error("Ошибка отправки");

      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          description: "",
          timeline: "",
          budget: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Ошибка:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.textContent}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Start Your
              <span className={styles.gradientText}> Project</span>
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your vision to life? Let&apos;s discuss your
              project and create something amazing together.
            </motion.p>

            <div className={styles.benefits}>
              <motion.div
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaRocket className={styles.benefitIcon} />
                <div>
                  <h3>Quick Start</h3>
                  <p>Get started within 24 hours</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaClock className={styles.benefitIcon} />
                <div>
                  <h3>Fast Estimation</h3>
                  <p>Receive quote within 48 hours</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Project Type</option>
                  <option value="web-app">Web Application</option>
                  <option value="website">Website</option>
                  <option value="pwa">Progressive Web App</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Timeline</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6+-months">6+ months</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Budget Range</option>
                    <option value="small">$5k - $10k</option>
                    <option value="medium">$10k - $25k</option>
                    <option value="large">$25k+</option>
                  </select>
                </div>
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
                    Send Request <FaPaperPlane className={styles.buttonIcon} />
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
        </motion.div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
};

export default CTASection;
