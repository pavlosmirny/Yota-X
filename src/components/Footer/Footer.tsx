"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Разделитель */}
        <div className={styles.dividerContainer}>
          <div className={styles.divider}>
            <div className={styles.line} />
            <div className={styles.centerLine}>
              <div className={styles.spark} />
            </div>
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <h3>Yota-X</h3>
            <p>Transforming ideas into exceptional digital experiences</p>
          </div>

          <div className={styles.navigation}>
            <div className={styles.navColumn}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/services/frontend-development">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/devops-services">DevOps Solutions</Link>
                </li>
              </ul>
            </div>
            <div className={styles.navColumn}>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="*">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h4>Contact Us</h4>
            <div className={styles.contactItem}>
              <FaLocationDot size={16} />
              <span>Ukraine, Lviv</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhone size={16} />
              <a href="tel:+380662510965" className={styles.contactLink}>
                +380 66 251 09 65
              </a>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope size={16} />
              <a href="mailto:cto@yota-x.com" className={styles.contactLink}>
                cto@yota-x.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/company/yota-x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://clutch.co/profile/yota-x/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Clutch"
              className={styles.socialIcon}
            >
              <Image
                src="/clutch.png"
                alt="Clutch"
                width={20}
                height={20}
                className={styles.socialImage}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://t.me/Yota_X_Official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
          </div>

          <div className={styles.copyright}>
            <p>© {new Date().getFullYear()} YotaX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
