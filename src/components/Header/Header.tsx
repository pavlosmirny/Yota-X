"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  FaXTwitter,
  FaUpwork,
  FaFacebook,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa6";

const socialLinks = [
  { Icon: FaXTwitter, href: "#", label: "Twitter" },
  { Icon: FaUpwork, href: "#", label: "Upwork" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaGithub, href: "#", label: "GitHub" },
  { Icon: FaTelegram, href: "#", label: "Telegram" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
];

const serviceLinks = [
  {
    href: "/services/frontend-development",
    label: "Web Development",
    description: "Modern web applications with React & Next.js",
  },
  {
    href: "/services/devops-services",
    label: "DevOps Solutions",
    description: "Cloud infrastructure & automation solutions",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">YotaX</Link>
      </div>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link href="*">About</Link>
          </li>
          <li className={styles.servicesItem}>
            <a
              href="#"
              onClick={toggleServices}
              className={styles.servicesLink}
            >
              Services
              <FaChevronDown
                className={`${styles.chevron} ${
                  isServicesOpen ? styles.rotate : ""
                }`}
              />
            </a>
            <div
              className={`${styles.servicesDropdown} ${
                isServicesOpen ? styles.show : ""
              }`}
            >
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={styles.serviceLink}
                >
                  <span className={styles.serviceName}>{service.label}</span>
                  <span className={styles.serviceDesc}>
                    {service.description}
                  </span>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="*">Careers</Link>
          </li>
          <li>
            <Link href="*">Contacts</Link>
          </li>
        </ul>
        <div className={styles.mobileIcons}>
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.socialIcon}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.Icon size={24} />
            </a>
          ))}
        </div>
      </nav>
      <div className={styles.desktopIcons}>
        <div className={styles.divider} />
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.Icon size={20} />
          </a>
        ))}
      </div>
      <div className={styles.burger} onClick={toggleMobileMenu}>
        <div
          className={`${styles.line} ${isMobileMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.line} ${isMobileMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.line} ${isMobileMenuOpen ? styles.open : ""}`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
