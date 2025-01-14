import axios from "axios";
import {
  Article,
  ArticlesParams,
  ArticlesResponse,
  Category,
} from "../types/article";

export const api = axios.create({
  baseURL: "https://yota-x-backend.onrender.com/api/v1",
  // baseURL: "http://localhost:5002/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const ArticlesService = {
  async getArticles(params: ArticlesParams): Promise<ArticlesResponse> {
    const { data } = await api.get<ArticlesResponse>("/articles", { params });
    return data;
  },

  async getArticleBySlug(slug: string): Promise<Article> {
    const { data } = await api.get<Article>(`/articles/${slug}`);
    return data;
  },

  async getCategories(): Promise<Category[]> {
    const { data } = await api.get<Category[]>("/articles/categories");
    return data;
  },

  async getArticlesByCategory(
    category: Category,
    limit?: number
  ): Promise<Article[]> {
    const { data } = await api.get<Article[]>(
      `/articles/category/${category}`,
      {
        params: { limit },
      }
    );
    return data;
  },

  async getTags(): Promise<{ tag: string; count: number }[]> {
    const { data } = await api.get<{ tag: string; count: number }[]>(
      "/articles/tags"
    );
    return data;
  },

  async getPopularTags(
    limit?: number
  ): Promise<{ tag: string; views: number }[]> {
    const { data } = await api.get<{ tag: string; views: number }[]>(
      "/articles/tags/popular",
      {
        params: { limit },
      }
    );
    return data;
  },

  async getRelatedArticles(slug: string, limit?: number): Promise<Article[]> {
    const { data } = await api.get<Article[]>(`/articles/${slug}/related`, {
      params: { limit },
    });
    return data;
  },
};
