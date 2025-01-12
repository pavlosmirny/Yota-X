// components/Blog/DynamicContent.tsx
"use client";

import { useEffect } from "react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import styles from "./DynamicContent.module.css";

interface DynamicContentProps {
  content: string;
}

export function DynamicContent({ content }: DynamicContentProps) {
  useEffect(() => {
    // Настраиваем DOMPurify только на клиенте
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      DOMPurify.addHook("beforeSanitizeElements", function (node) {
        // Дополнительная обработка при необходимости
      });
    }
  }, []);

  const sanitizedContent =
    typeof window !== "undefined"
      ? DOMPurify.sanitize(content, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["style", "class"],
        })
      : content;

  return (
    <motion.div
      className={`${styles.content} article-content`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
