"use client";
import React, { useState } from "react";
import { FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";
import styles from "./CTASection.module.css";

interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
}

const CTASection = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Имитация доступных слотов
  const timeSlots: TimeSlot[] = [
    { date: "2024-01-05", time: "10:00 AM", available: true },
    { date: "2024-01-05", time: "2:00 PM", available: true },
    { date: "2024-01-06", time: "11:00 AM", available: true },
    { date: "2024-01-06", time: "4:00 PM", available: true },
    { date: "2024-01-07", time: "1:00 PM", available: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", { ...formData, selectedSlot });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

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
          {/* Форма */}
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
              <button type="submit" className={styles.submitButton}>
                Get Started <FaArrowRight className={styles.buttonIcon} />
              </button>
            </form>
          </div>

          {/* Таймлайн */}
          <div className={styles.timelineContainer}>
            <h3 className={styles.timelineTitle}>
              <FaCalendar className={styles.calendarIcon} />
              Available Slots
            </h3>
            <div className={styles.timeline}>
              {timeSlots.map((slot) => (
                <div
                  key={`${slot.date}-${slot.time}`}
                  className={`${styles.timeSlot} ${
                    selectedSlot === `${slot.date}-${slot.time}`
                      ? styles.selected
                      : ""
                  } ${!slot.available ? styles.unavailable : ""}`}
                  onClick={() => {
                    if (slot.available) {
                      setSelectedSlot(`${slot.date}-${slot.time}`);
                    }
                  }}
                >
                  <div className={styles.timeSlotContent}>
                    <span className={styles.date}>{formatDate(slot.date)}</span>
                    <span className={styles.time}>
                      <FaClock className={styles.clockIcon} />
                      {slot.time}
                    </span>
                    <span className={styles.status}>
                      {slot.available ? "Available" : "Booked"}
                    </span>
                  </div>
                  <div className={styles.timeSlotLine} />
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
