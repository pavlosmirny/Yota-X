"use client";

import { useRouter } from "next/navigation";
import styles from "./Hero.module.css";
// import Loader from "../loader";

const Hero = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contacts");
  };
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.headline}>
          Empowering Your Digital Journey
        </h1>
        <p className={styles.subheadline}>
          Full-Stack Web Development & DevOps Solutions Tailored for Your
          Success
        </p>
        <p className={styles.supportingText}>
          From intuitive web applications to seamless DevOps integration, we
          deliver end-to-end solutions that drive your business forward.
        </p>
        <div className={styles.container}>
          <button className={styles.button} onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
      <div className={styles.imageContainer} aria-hidden="true">
        {/* You can replace this with an actual image or illustration */}
        <img
          src="/Vector.svg"
          alt="Web Development Illustration"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
