// components/blog/RelatedArticles.tsx
import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./RelatedArticles.module.css";
import { Article } from "../types/article";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className={styles.related}>
      <h2>Related Articles</h2>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <motion.div
            key={article._id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${article.slug}`}>
              <div className={styles.thumbnail}>
                <img src={article.imageUrl} alt={article.title} />
              </div>
              <div className={styles.content}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
