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
  FaTimes,
  FaCloudUploadAlt,
  FaFileUpload,
  FaLink,
  FaLinkedin,
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

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position | null;
}

const departments = [
  { id: "all", label: "All Positions", icon: null },
  { id: "Development", label: "Development", icon: <FaCode /> },
  { id: "Devops", label: "DevOps", icon: <FaServer /> },
  { id: "Design", label: "Design", icon: <FaPaintBrush /> },
  { id: "Product Management", label: "Product", icon: <FaChartLine /> },
];

const BOT_TOKEN = "7722075237:AAFcS-CxOtsg5qI0uwantK9_GcPcEk3xy_M";
const CHAT_ID = "1301013001";

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  position,
}) => {
  // Управление состоянием формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeType: "file" as "file" | "link",
    resume: null as File | null,
    resumeLink: "",
    coverLetter: "",
  });

  // Состояния для UI
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [dragActive, setDragActive] = useState(false);

  // Обработчики для drag & drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Проверяем тип файла
      if (
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFormData((prev) => ({ ...prev, resume: file }));
      }
    }
  };

  // Обработчик для загрузки файла через input
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    }
  };

  // Валидация полей формы
  const validateFields = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      return false;
    }

    if (formData.resumeType === "file" && !formData.resume) {
      return false;
    }

    if (formData.resumeType === "link" && !formData.resumeLink.trim()) {
      return false;
    }

    return true;
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверяем валидность полей
    if (!validateFields()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Формируем текст сообщения для Telegram
    const text = `
🚀 Нова заявка на роботу!

👤 Інформація про кандидата:
• Ім'я: ${formData.name}
• Email: ${formData.email}
• Телефон: ${formData.phone}
${
  formData.resumeType === "link"
    ? `• Резюме/LinkedIn: ${formData.resumeLink}`
    : "• Резюме: додається нижче"
}

💼 Деталі позиції:
• Подана позиція: ${position?.title}
• Відділ: ${position?.department}
• Локація: ${position?.location}
• Тип: ${position?.type}



📌 Заявка подана через сторінку кар'єри
    `;

    try {
      // Отправляем основное сообщение
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      });

      // Если есть файл резюме, отправляем его отдельным сообщением
      if (formData.resumeType === "file" && formData.resume) {
        const formDataFile = new FormData();
        formDataFile.append("chat_id", CHAT_ID);
        formDataFile.append("document", formData.resume);

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
          method: "POST",
          body: formDataFile,
        });
      }

      // Успешное завершение
      setStatus("success");
      setTimeout(() => {
        onClose();
        // Сбрасываем форму
        setFormData({
          name: "",
          email: "",
          phone: "",
          resumeType: "file",
          resume: null,
          resumeLink: "",
          coverLetter: "",
        });
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <h3 className={styles.modalTitle}>Apply for {position?.title}</h3>
        <p className={styles.modalSubtitle}>
          {position?.department} • {position?.location}
        </p>

        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          {/* Секция личной информации */}
          <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Personal Information</h4>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Секция резюме */}
          <div className={styles.formSection}>
            <h4 className={styles.sectionTitle}>Resume</h4>
            <div className={styles.resumeTypeSelector}>
              <button
                type="button"
                className={`${styles.typeButton} ${
                  formData.resumeType === "file" ? styles.active : ""
                }`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, resumeType: "file" }))
                }
              >
                <FaFileUpload className={styles.buttonIcon} />
                Upload Resume
              </button>
              <button
                type="button"
                className={`${styles.typeButton} ${
                  formData.resumeType === "link" ? styles.active : ""
                }`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, resumeType: "link" }))
                }
              >
                <FaLink className={styles.buttonIcon} />
                Link to Resume
              </button>
            </div>

            {formData.resumeType === "file" ? (
              <div
                className={`${styles.dropzone} ${
                  dragActive ? styles.dragActive : ""
                } ${formData.resume ? styles.hasFile : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  onChange={handleFileInput}
                  accept=".pdf,.doc,.docx"
                  id="resume-upload"
                  className={styles.fileInput}
                />
                {/* Оставляем htmlFor и добавляем styles.clickArea для стилизации */}
                <label
                  htmlFor="resume-upload"
                  className={`${styles.dropzoneLabel} ${styles.clickArea}`}
                >
                  <FaCloudUploadAlt className={styles.uploadIcon} />
                  {formData.resume ? (
                    <>
                      <span className={styles.fileName}>
                        {formData.resume.name}
                      </span>
                      <span className={styles.fileSize}>
                        {(formData.resume.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Drag & drop your resume or click to browse</span>
                      <span className={styles.supportedFormats}>
                        Supports PDF, DOC, DOCX
                      </span>
                    </>
                  )}
                </label>
              </div>
            ) : (
              <div className={styles.linkInput}>
                <div className={styles.inputWithIcon}>
                  <FaLinkedin className={styles.linkIcon} />
                  <input
                    type="url"
                    placeholder="Paste LinkedIn profile or resume link"
                    value={formData.resumeLink}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        resumeLink: e.target.value,
                      }))
                    }
                    required
                    className={styles.input}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Кнопка отправки и сообщения о статусе */}
          <button
            type="submit"
            className={`${styles.submitButton} ${
              status === "loading" ? styles.loading : ""
            }`}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Submit Application"}
          </button>

          {status === "success" && (
            <div className={styles.successMessage}>
              Application submitted successfully! We&apos;ll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className={styles.errorMessage}>
              Please fill in all required fields or try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Создаем instance axios
const api = axios.create({
  baseURL: "https://yota-x-backend.onrender.com/api/v1",
});

// Основной компонент OpenPositions
const OpenPositions: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null
  );

  // Загрузка вакансий
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
        {/* Заголовок */}
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

        {/* Фильтр по департаментам */}
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

        {/* Сетка вакансий */}
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
            ) : positions.length === 0 ? (
              <motion.div
                className={styles.noPositions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <p>No open positions in this department at the moment.</p>
              </motion.div>
            ) : (
              positions.map((position, index) => (
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
                          <button
                            className={styles.applyButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPosition(position);
                              setIsModalOpen(true);
                            }}
                          >
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

      {/* Фоновое свечение */}
      <div className={styles.backgroundGlow} />

      {/* Модальное окно для отправки заявки */}
      {selectedPosition && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPosition(null);
          }}
          position={selectedPosition}
        />
      )}
    </section>
  );
};

export default OpenPositions;
