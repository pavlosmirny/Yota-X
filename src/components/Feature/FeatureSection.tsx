"use client";
import React from "react";
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
import { MdSecurity } from "react-icons/md";
import styles from "./FeatureSection.module.css";

interface IconWithTooltipProps {
  Icon: React.ElementType;
  name: string;
  color: string;
  className?: string;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({
  Icon,
  name,
  color,
  className,
}) => {
  return (
    <div className={styles.iconContainer}>
      <Icon className={`${styles.icon} ${className}`} style={{ color }} />
      <div className={styles.tooltip}>
        <span className={styles.tooltipText}>{name}</span>
        <div className={styles.tooltipArrow} />
      </div>
    </div>
  );
};

const ParticlesBackground: React.FC = () => {
  return (
    <div className={styles.particles}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={
            {
              "--delay": `${Math.random() * 4}s`,
              "--size": `${Math.random() * 4 + 2}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <div className={styles.featureSection}>
      <h2 className={styles.sectionTitle}>Our Capabilities</h2>

      <div className={styles.featureGrid}>
        {/* Card 1: Full-Stack Development */}
        <div className={styles.card1}>
          <ParticlesBackground />
          <div className={styles.card1Card}>
            <div className={styles.iconsContainer}>
              <p className={styles.cardLabel}>Frontend</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={FaHtml5}
                  name="HTML5"
                  color="#e34c26"
                  className={styles.html5}
                />
                <IconWithTooltip
                  Icon={FaCss3Alt}
                  name="CSS3"
                  color="#264de4"
                  className={styles.css3}
                />
                <IconWithTooltip
                  Icon={FaReact}
                  name="React"
                  color="#61dafb"
                  className={styles.react}
                />
                <IconWithTooltip
                  Icon={SiNextdotjs}
                  name="Next.js"
                  color="#ffffff"
                  className={styles.nextjs}
                />
                <IconWithTooltip
                  Icon={TbBrandReactNative}
                  name="React Native"
                  color="#61dafb"
                  className={styles.reactnative}
                />
              </div>

              <p className={styles.cardLabel}>Backend</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={FaNodeJs}
                  name="Node.js"
                  color="#68a063"
                  className={styles.nodejs}
                />
                <IconWithTooltip
                  Icon={FaDatabase}
                  name="Database"
                  color="#f0db4f"
                  className={styles.database}
                />
                <IconWithTooltip
                  Icon={SiMongodb}
                  name="MongoDB"
                  color="#4db33d"
                  className={styles.mongodb}
                />
                <IconWithTooltip
                  Icon={SiPython}
                  name="Python"
                  color="#306998"
                  className={styles.python}
                />
              </div>
            </div>
            <p className={styles.cardFooter}>Expert Team</p>
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
          <ParticlesBackground />
          <div className={styles.card2Card}>
            <div className={styles.iconGroup2}>
              <p className={styles.cardLabel}>Containerization</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={FaDocker}
                  name="Docker"
                  color="#0db7ed"
                  className={styles.docker}
                />
                <IconWithTooltip
                  Icon={SiKubernetes}
                  name="Kubernetes"
                  color="#326ce5"
                  className={styles.kubernetes}
                />
              </div>
            </div>

            <div className={styles.iconGroup2}>
              <p className={styles.cardLabel}>Cloud Platforms</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={FaAws}
                  name="AWS"
                  color="#ff9900"
                  className={styles.aws}
                />
                <IconWithTooltip
                  Icon={VscAzure}
                  name="Azure"
                  color="#007fff"
                  className={styles.azure}
                />
              </div>
            </div>

            <div className={styles.iconGroup2}>
              <p className={styles.cardLabel}>Configuration Management</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={SiAnsible}
                  name="Ansible"
                  color="#ee0000"
                  className={styles.ansible}
                />
                <IconWithTooltip
                  Icon={SiTerraform}
                  name="Terraform"
                  color="#623ce4"
                  className={styles.terraform}
                />
              </div>
            </div>

            <div className={styles.iconGroup2}>
              <p className={styles.cardLabel}>Monitoring</p>
              <div className={styles.iconGroup}>
                <IconWithTooltip
                  Icon={SiPrometheus}
                  name="Prometheus"
                  color="#e6522c"
                  className={styles.prometheus}
                />
                <IconWithTooltip
                  Icon={SiGrafana}
                  name="Grafana"
                  color="#f46800"
                  className={styles.grafana}
                />
              </div>
            </div>

            <div className={styles.progressLine} />
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
          <ParticlesBackground />
          <div className={styles.card1Card}>
            <div className={styles.dividerWrapper}>
              <div className={styles.divider1}></div>
              <div className={styles.divider2}></div>
            </div>
            <div className={styles.securityIcon}>
              <MdSecurity size={40} color="#c063ed" />
            </div>
            <p className={styles.cardFooter}>Secure Systems</p>
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
          <ParticlesBackground />
          <div className={styles.card1Card}>
            <p className={styles.cardLabel}>CI/CD</p>
            <div className={styles.iconGroup}>
              <IconWithTooltip
                Icon={SiJenkins}
                name="Jenkins"
                color="#d24939"
                className={styles.jenkins}
              />
              <IconWithTooltip
                Icon={SiGithubactions}
                name="GitHub Actions"
                color="#2088ff"
                className={styles.githubactions}
              />
            </div>
            <p className={styles.cardFooter}>Automated Deployments</p>
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
