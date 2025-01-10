"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaClock, FaUser, FaFolder } from "react-icons/fa";
import Link from "next/link";
import styles from "./BlogPage.module.css";
import { Article, ArticlesParams, Category } from "../types/article";
import { ArticlesService } from "./articles";

const ITEMS_PER_PAGE = 6;

const BlogPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>(
    "All"
  );
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);

  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params: ArticlesParams = {
        page,
        limit: ITEMS_PER_PAGE,
        published: true,
        searchTerm: searchTerm || undefined,
        category:
          selectedCategory === "All"
            ? undefined
            : (selectedCategory as Category),
      };

      const data = await ArticlesService.getArticles(params);
      setArticles(data.articles);
      setTotal(data.total);
    } catch (err) {
      setError("Failed to load articles. Please try again later.");
      console.error("Error loading articles:", err);
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory, searchTerm]);

  const loadCategories = async () => {
    try {
      const data = await ArticlesService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Error loading categories:", err);
    }
  };

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (page === 1) {
        loadArticles();
      } else {
        setPage(1);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category: "All" | Category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className={styles.title}>Latest Articles & Insights</h1>
        <p className={styles.subtitle}>
          Explore our collection of articles about web development, DevOps, and
          cloud solutions
        </p>
      </motion.div>

      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.categoryWrapper}>
          <button
            className={`${styles.categoryBtn} ${
              selectedCategory === "All" ? styles.active : ""
            }`}
            onClick={() => handleCategorySelect("All")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              <FaFolder className={styles.categoryIcon} />
              {category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            className={styles.loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Loading articles...
          </motion.div>
        ) : error ? (
          <motion.div
            className={styles.error}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        ) : (
          <>
            <motion.div
              className={styles.articlesGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {articles.map((article) => (
                <motion.article
                  key={article._id}
                  className={styles.articleCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.articleImage}>
                    <img src={article.imageUrl} alt={article.title} />
                  </div>
                  <div className={styles.articleContent}>
                    <div className={styles.articleMeta}>
                      <span className={styles.author}>
                        <FaUser /> {article.author}
                      </span>
                      <span className={styles.readTime}>
                        <FaClock />{" "}
                        {`${Math.ceil(article.content.length / 1000)} min read`}
                      </span>
                      <span className={styles.category}>
                        <FaFolder /> {article.category}
                      </span>
                    </div>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
                    <p className={styles.articleDescription}>
                      {article.description}
                    </p>
                    <div className={styles.tags}>
                      {article.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className={styles.readMore}
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {articles.length === 0 && (
              <div className={styles.noResults}>
                No articles found. Try adjusting your search or filters.
              </div>
            )}

            {totalPages > 1 && (
              <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`${styles.pageButton} ${
                      page === i + 1 ? styles.activePage : ""
                    }`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
