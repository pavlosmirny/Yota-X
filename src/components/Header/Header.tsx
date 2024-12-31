/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaChevronDown,
  FaLinkedin,
} from "react-icons/fa6";

const socialLinks = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/company/yota-x",
    label: "LinkedIn",
    type: "icon",
  },
  {
    type: "image",
    href: "https://clutch.co/profile/yota-x/",
    label: "Clutch",
    src: "/clutch.png",
  },
  {
    Icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
    type: "icon",
  },
  {
    Icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
    type: "icon",
  },
  {
    Icon: FaTelegram,
    href: "https://t.me/Yota_X_Official/",
    label: "Telegram",
    type: "icon",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    type: "icon",
  },
  {
    Icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter",
    type: "icon",
  },
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const renderSocialIcon = (social: any, size: number) => {
    if (social.type === "icon") {
      return <social.Icon size={size} />;
    }
    return (
      <Image
        src={social.src}
        alt={social.label}
        width={size}
        height={size}
        className={styles.socialImage}
      />
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMobileMenu}>
            Yota-X
          </Link>
        </div>
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ""}`}
        >
          <ul>
            <li>
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
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
                    onClick={closeMobileMenu}
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
              <Link href="/careers" onClick={closeMobileMenu}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={closeMobileMenu}>
                Contacts
              </Link>
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
                onClick={closeMobileMenu}
              >
                {renderSocialIcon(social, 24)}
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
              {renderSocialIcon(social, 20)}
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
      </div>
    </header>
  );
};

export default Header;
