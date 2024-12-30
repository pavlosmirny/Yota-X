"use client";

import { motion } from "framer-motion";
import styles from "./LineChart.module.css";

interface ChartData {
  value: number;
  label: string;
}

interface LineChartProps {
  data: ChartData[];
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const normalizeValue = (value: number) =>
    ((value - minValue) / (maxValue - minValue)) * 100;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - normalizeValue(d.value);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={styles.chartContainer}>
      <svg
        className={styles.chart}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#03a9f4" />
            <stop offset="100%" stopColor="#f441a5" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#03a9f4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f441a5" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={`M ${points}`}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className={styles.line}
        />

        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          d={`M 0,100 ${points} 100,100`}
          fill="url(#areaGradient)"
          className={styles.area}
        />

        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - normalizeValue(d.value);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              className={styles.point}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 1, duration: 0.3 }}
            />
          );
        })}
      </svg>

      <div className={styles.labels}>
        {data.map((d, i) => (
          <div key={i} className={styles.label}>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
};
