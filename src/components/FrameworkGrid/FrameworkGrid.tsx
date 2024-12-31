"use client";
import { JSX, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiPostgresql,
  SiNginx,
  SiTerraform,
  SiCircleci,
  SiTravisci,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiVault,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
  SiMysql,
  SiNestjs,
} from "react-icons/si";
import styles from "./FrameworkGrid.module.css";

interface IconConfig {
  Icon: IconType;
  position: [number, number];
  color: string;
  name: string;
}

interface CellProps {
  icon?: IconConfig;
}

const Cell = ({ icon }: CellProps): JSX.Element => {
  return (
    <div
      className={`${styles.cell} ${icon ? styles.iconCell : ""}`}
      style={
        {
          "--icon-color": icon?.color,
        } as React.CSSProperties
      }
    >
      {icon && (
        <div className={styles.iconWrapper}>
          <icon.Icon size={48} color={icon.color} />
        </div>
      )}
    </div>
  );
};

const FrameworkGrid = (): JSX.Element => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const scrollWidth = gridRef.current.scrollWidth;
      const clientWidth = gridRef.current.clientWidth;
      const scrollTo = (scrollWidth - clientWidth) / 2;

      gridRef.current.scrollLeft = scrollTo;
    }
  }, []);

  const grid: null[][] = Array(7)
    .fill(null)
    .map(() => Array(13).fill(null));

  const icons: IconConfig[] = [
    // Frontend Row (Row 1)
    {
      Icon: FaReact,
      position: [1, 3],
      color: "#61DAFB",
      name: "React",
    },
    {
      Icon: SiNextdotjs,
      position: [1, 4],
      color: "#FFFFFF",
      name: "Next.js",
    },
    {
      Icon: FaHtml5,
      position: [1, 5],
      color: "#E34F26",
      name: "HTML",
    },
    {
      Icon: FaCss3Alt,
      position: [1, 6],
      color: "#264DE4",
      name: "CSS",
    },
    {
      Icon: SiJavascript,
      position: [1, 7],
      color: "#F7DF1E",
      name: "JavaScript",
    },
    {
      Icon: SiTypescript,
      position: [1, 8],
      color: "#3178C6",
      name: "TypeScript",
    },
    {
      Icon: SiVite,
      position: [1, 9],
      color: "#646CFF",
      name: "Vite",
    },
    {
      Icon: SiTailwindcss,
      position: [1, 10],
      color: "#06B6D4",
      name: "Tailwind",
    },

    // Backend Row (Row 2)
    {
      Icon: FaNodeJs,
      position: [2, 3],
      color: "#339933",
      name: "Node.js",
    },
    {
      Icon: SiNestjs,
      position: [2, 4],
      color: "#E0234E",
      name: "NestJS",
    },
    {
      Icon: SiGraphql,
      position: [2, 5],
      color: "#E10098",
      name: "GraphQL",
    },
    {
      Icon: SiPostgresql,
      position: [2, 6],
      color: "#4169E1",
      name: "PostgreSQL",
    },
    {
      Icon: SiMongodb,
      position: [2, 7],
      color: "#47A248",
      name: "MongoDB",
    },
    {
      Icon: SiRedis,
      position: [2, 8],
      color: "#DC382D",
      name: "Redis",
    },
    {
      Icon: SiPrisma,
      position: [2, 9],
      color: "#2D3748",
      name: "Prisma",
    },
    {
      Icon: SiMysql,
      position: [2, 10],
      color: "#4479A1",
      name: "MySQL",
    },

    // DevOps Row (Row 3)
    {
      Icon: FaDocker,
      position: [3, 4],
      color: "#2496ED",
      name: "Docker",
    },
    {
      Icon: FaAws,
      position: [3, 5],
      color: "#FF9900",
      name: "AWS",
    },
    {
      Icon: SiKubernetes,
      position: [3, 6],
      color: "#326CE5",
      name: "Kubernetes",
    },
    {
      Icon: SiNginx,
      position: [3, 7],
      color: "#009639",
      name: "Nginx",
    },
    {
      Icon: SiTerraform,
      position: [3, 8],
      color: "#7B42BC",
      name: "Terraform",
    },
    {
      Icon: SiAnsible,
      position: [3, 9],
      color: "#EE0000",
      name: "Ansible",
    },

    // CI/CD Row (Row 4)
    {
      Icon: FaGitAlt,
      position: [4, 4],
      color: "#F05032",
      name: "Git",
    },
    {
      Icon: FaGithub,
      position: [4, 5],
      color: "#ffffff",
      name: "GitHub",
    },
    {
      Icon: FaJenkins,
      position: [4, 6],
      color: "#D24939",
      name: "Jenkins",
    },
    {
      Icon: SiCircleci,
      position: [4, 7],
      color: "#343434",
      name: "CircleCI",
    },
    {
      Icon: SiTravisci,
      position: [4, 8],
      color: "#3EAAAF",
      name: "Travis CI",
    },

    // Monitoring Row (Row 5)
    {
      Icon: SiGrafana,
      position: [5, 5],
      color: "#F46800",
      name: "Grafana",
    },
    {
      Icon: SiPrometheus,
      position: [5, 6],
      color: "#E6522C",
      name: "Prometheus",
    },
    {
      Icon: SiVault,
      position: [5, 7],
      color: "#FFEC6E",
      name: "Vault",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Tech Universe</h2>
      <div className={styles.overlays}>
        <div className={styles.leftOverlay} />
        <div className={styles.rightOverlay} />
        <div className={styles.topOverlay} />
        <div className={styles.bottomOverlay} />
      </div>
      <div className={styles.gridWrapper}>
        <div className={styles.grid} ref={gridRef}>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((_, colIndex) => {
                const icon = icons.find(
                  (i) =>
                    i.position[0] === rowIndex && i.position[1] === colIndex
                );
                return <Cell key={colIndex} icon={icon} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameworkGrid;
