"use client";

import { motion } from "framer-motion";
import { useState, useId } from "react";
import styles from "./LineChart.module.css";

interface ChartData {
  value: number;
  label: string;
}

interface LineChartProps {
  data: ChartData[];
  height?: number;
  lineColor?: {
    from: string;
    to: string;
  };
  showTooltip?: boolean;
  animationDuration?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 120,
  lineColor = {
    from: "#03a9f4",
    to: "#f441a5",
  },
  showTooltip = true,
  animationDuration = 1.5,
}) => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  // Используем useId для генерации стабильных id
  const gradientId = useId();
  const lineGradientId = `${gradientId}-line`;
  const areaGradientId = `${gradientId}-area`;

  // Calculate chart values
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const valueRange = maxValue - minValue;
  const padding = valueRange * 0.1; // Add 10% padding to top and bottom

  const normalizeValue = (value: number) =>
    ((value - (minValue - padding)) / (valueRange + 2 * padding)) * 100;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - normalizeValue(d.value);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={styles.chartContainer} style={{ height: `${height}px` }}>
      <svg
        className={styles.chart}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={lineGradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={lineColor.from} />
            <stop offset="100%" stopColor={lineColor.to} />
          </linearGradient>
          <linearGradient id={areaGradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={lineColor.from} stopOpacity="0.2" />
            <stop offset="100%" stopColor={lineColor.to} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g className={styles.grid}>
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              className={styles.gridLine}
            />
          ))}
        </g>

        {/* Area fill */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration }}
          d={`M 0,100 ${points} 100,100`}
          fill={`url(#${areaGradientId})`}
          className={styles.area}
        />

        {/* Line path */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
          d={`M ${points}`}
          fill="none"
          stroke={`url(#${lineGradientId})`}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className={styles.line}
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - normalizeValue(d.value);
          const isActive = activePoint === i;

          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? "3" : "2"}
                className={`${styles.point} ${isActive ? styles.active : ""}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.1 + animationDuration,
                  duration: 0.3,
                }}
                onMouseEnter={() => setActivePoint(i)}
                onMouseLeave={() => setActivePoint(null)}
              />
              {showTooltip && isActive && (
                <g className={styles.tooltip}>
                  <rect
                    x={x - 20}
                    y={y - 25}
                    width="40"
                    height="20"
                    rx="4"
                    fill="rgba(0,0,0,0.8)"
                  />
                  <text
                    x={x}
                    y={y - 12}
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    {d.value}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Labels */}
      <div className={styles.labels}>
        {data.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1 + animationDuration,
              duration: 0.3,
            }}
            className={`${styles.label} ${
              activePoint === i ? styles.activeLabel : ""
            }`}
          >
            {d.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
