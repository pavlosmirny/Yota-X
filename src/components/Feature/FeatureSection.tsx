// components/FeatureSection.tsx
import React from "react";
import styles from "./FeatureSection.module.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiMongodb,
  SiPython,
  SiJenkins,
  SiGithubactions,
  SiAnsible,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdSecurity } from "react-icons/md"; // Importing Security Icon

const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
      <h2 className={styles.sectionTitle}>Our Capabilities</h2>

      <div className={styles.featureGrid}>
        {/* Card 1: Full-Stack Development */}
        <div className={styles.card1}>
          <div className={styles.card1Card}>
            <div className={styles.iconsContainer}>
              <p style={{ fontSize: 24 }}>Frontend</p>
              <div className={styles.iconGroup}>
                <FaHtml5 className={`${styles.icon} ${styles.html5}`} />
                <FaCss3Alt className={`${styles.icon} ${styles.css3}`} />
                <FaReact className={`${styles.icon} ${styles.react}`} />
                <SiNextdotjs className={`${styles.icon} ${styles.nextjs}`} />
                <TbBrandReactNative
                  className={`${styles.icon} ${styles.reactnative}`}
                />
              </div>

              {/* Backend Icons */}
              <p style={{ fontSize: 24 }}>Backend</p>
              <div className={styles.iconGroup}>
                <FaNodeJs className={`${styles.icon} ${styles.nodejs}`} />
                <FaDatabase className={`${styles.icon} ${styles.database}`} />
                <SiMongodb className={`${styles.icon} ${styles.mongodb}`} />
                <SiPython className={`${styles.icon} ${styles.python}`} />
              </div>
            </div>
            <p style={{ color: "white" }}>Expert Team</p>
          </div>
          <div className={styles.textWrapper}>
            <h4 className={styles.title}>Full-Stack Development</h4>
            <p className={styles.text}>
              Comprehensive development services from frontend to backend,
              delivering seamless and scalable solutions.
            </p>
          </div>
        </div>

        {/* Card 2: DevOps & Infrastructure */}
        <div className={styles.card2}>
          <div className={styles.card2Card}>
            <div className={styles.iconGroup2}>
              <p style={{ fontSize: 20 }}>Containerization</p>
              <div className={styles.iconGroup}>
                <FaDocker className={`${styles.icon} ${styles.docker}`} />
                <SiKubernetes
                  className={`${styles.icon} ${styles.kubernetes}`}
                />
              </div>
            </div>
            <div className={styles.iconGroup2}>
              <p style={{ fontSize: 20 }}>Cloud Platforms</p>
              <div className={styles.iconGroup}>
                <FaAws className={`${styles.icon} ${styles.aws}`} />
                <VscAzure className={`${styles.icon} ${styles.azure}`} />
              </div>
            </div>
            <div className={styles.iconGroup2}>
              <p style={{ fontSize: 20 }}>Configuration Management</p>
              <div className={styles.iconGroup}>
                <SiAnsible className={`${styles.icon} ${styles.ansible}`} />
                <SiTerraform className={`${styles.icon} ${styles.terraform}`} />
              </div>
            </div>
            <div className={styles.iconGroup2}>
              <p style={{ fontSize: 20 }}>Monitoring</p>
              <div className={styles.iconGroup}>
                <SiPrometheus
                  className={`${styles.icon} ${styles.prometheus}`}
                />
                <SiGrafana className={`${styles.icon} ${styles.grafana}`} />
              </div>
            </div>

            <div className={styles.card2Card2}>
              <div className={styles.dividerCard2}></div>
              <div className={styles.divider1Card2}></div>
              <div className={styles.divider2Card2}></div>
              <div className={styles.dividerCard2Container}>
                <div className={styles.divider3Card2}></div>
                <div className={styles.divider3Card2}></div>
              </div>
            </div>
          </div>

          <h4 className={styles.title}>DevOps & Infrastructure</h4>

          <p className={styles.text}>
            Efficient DevOps practices and cloud infrastructure management to
            ensure robust and scalable applications.
          </p>
        </div>
      </div>

      <div className={styles.featureGrid}>
        {/* Card 3: SecureScan™ */}
        <div className={styles.card3}>
          <div className={styles.card1Card}>
            <div className={styles.dividerWrapper}>
              <div className={styles.divider1}></div>
              <div className={styles.divider2}></div>
            </div>
            <div className={styles.securityIcon}>
              <MdSecurity size={40} color="#c063ed" /> {/* Security Icon */}
            </div>
            <p>Secure Systems</p>
          </div>
          <div className={styles.textWrapper}>
            <h4 className={styles.title}>SecureScan™</h4>
            <p className={styles.text}>
              Comprehensive vulnerability assessments and security audits to
              protect your applications from threats, utilizing our proprietary
              vulnerability scanning algorithm.
            </p>
          </div>
        </div>

        {/* Card 4: Continuous Integration & Deployment */}
        <div className={styles.card4}>
          <div className={styles.card1Card}>
            <p style={{ fontSize: 24 }}>CI/CD</p>
            <div className={styles.iconGroup}>
              <SiJenkins className={`${styles.icon} ${styles.jenkins}`} />
              <SiGithubactions
                className={`${styles.icon} ${styles.githubactions}`}
              />
            </div>
            <p>Automated Deployments</p>
          </div>
          <div className={styles.textWrapper}>
            <h4 className={styles.title}>
              Continuous Integration & Deployment
            </h4>
            <p className={styles.text}>
              Automated CI/CD pipelines for rapid and reliable releases,
              ensuring seamless updates and maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
