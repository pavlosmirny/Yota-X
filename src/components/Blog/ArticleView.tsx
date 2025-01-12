// components/Blog/ArticleView.tsx
// Делаем этот компонент серверным (убираем 'use client')
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaClock, FaFolder, FaArrowLeft } from "react-icons/fa";
import styles from "./ArticleView.module.css";
import { Article } from "../types/article";
import { formatDate } from "../../utils/date";

interface ArticleViewProps {
  article: Article;
  relatedArticles: Article[];
  content: React.ReactNode; // Добавляем проп для контента
}

export function ArticleView({
  article,
  relatedArticles,
  content,
}: ArticleViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.articleContent}>
        <Link href="/blog" className={styles.backLink}>
          <FaArrowLeft /> Back to Articles
        </Link>

        <div className={styles.category}>
          <FaFolder />
          <span>{article.category}</span>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        <div className={styles.meta}>
          <div className={styles.author}>
            <FaUser />
            <span>{article.author}</span>
          </div>
          <div className={styles.date}>
            <FaClock />
            <span>{formatDate(article.createdAt)}</span>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={1200}
            height={630}
            className={styles.mainImage}
            priority
          />
        </div>

        {/* Рендерим переданный контент */}
        {content}

        <div className={styles.tags}>
          {article.tags.map((tag: string) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <section className={styles.relatedArticles}>
          <h2>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle._id}
                href={`/blog/${relatedArticle.slug}`}
                className={styles.relatedCard}
              >
                <Image
                  src={relatedArticle.imageUrl}
                  alt={relatedArticle.title}
                  width={400}
                  height={225}
                  className={styles.relatedImage}
                />
                <div className={styles.relatedContent}>
                  <h3>{relatedArticle.title}</h3>
                  <p>{relatedArticle.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
