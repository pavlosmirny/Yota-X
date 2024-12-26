"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <li>
            <Link href="*">Services</Link>
          </li>
          <li>
            <Link href="*">Contacts</Link>
          </li>
        </ul>
      </nav>
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
