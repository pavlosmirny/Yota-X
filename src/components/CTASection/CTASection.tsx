"use client";
import React, { useState } from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import styles from "./CTASection.module.css";

const BOT_TOKEN = "7722075237:AAFcS-CxOtsg5qI0uwantK9_GcPcEk3xy_M";
const CHAT_ID = "609689270";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Формируем сообщение для главной страницы
    const text = `
🌟 Новая заявка на консультацию!

👤 Имя клиента: ${formData.name}
📧 Email: ${formData.email}

💼 О проекте:
${formData.message}

📌 Отправлено с: Главная страница (CTA секция)
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

      setStatus("success");
      // Очищаем форму после успешной отправки
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Ошибка:", error);
      setStatus("error");
    }
  };

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals",
    },
    {
      number: "2",
      title: "Project Planning",
      description: "Creating detailed roadmap and technical specification",
    },
    {
      number: "3",
      title: "Development",
      description: "Agile development with regular updates",
    },
    {
      number: "4",
      title: "Launch",
      description: "Testing, deployment and ongoing support",
    },
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Ready to Transform Your Digital Future?
        </h2>
        <p className={styles.subtitle}>
          Schedule a free consultation and let&apos;s discuss your project
        </p>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className={styles.textarea}
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitButton} ${
                  status === "loading" ? styles.loading : ""
                }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Get Started"}
                <FaArrowRight className={styles.buttonIcon} />
              </button>

              {status === "success" && (
                <div className={styles.successMessage}>
                  Message sent successfully! We&apos;ll contact you soon.
                </div>
              )}
              {status === "error" && (
                <div className={styles.errorMessage}>
                  Error sending message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className={styles.processContainer}>
            <h3 className={styles.processTitle}>
              <FaRocket className={styles.processIcon} /> How We Work
            </h3>
            <div className={styles.processList}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
