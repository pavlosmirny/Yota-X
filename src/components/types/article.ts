import { PREDEFINED_CATEGORIES } from "../constants/categories";

export type Category = (typeof PREDEFINED_CATEGORIES)[number];

export interface SEO {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  tags: string[];
  category: Category;
  author: string;
  published: boolean;
  imageUrl: string;
  seo: SEO;
  createdAt: string;
  updatedAt: string;
  relatedTags: { [key: string]: number };
  tagViews: { [key: string]: number };
}

export interface ArticlesResponse {
  articles: Article[];
  total: number;
  page: number | null;
  totalPages: number | null;
}

export interface ArticlesParams {
  page?: number;
  limit?: number;
  published?: boolean;
  tag?: string;
  category?: Category;
  author?: string;
  searchTerm?: string;
}

export interface CategoryStats {
  category: Category;
  count: number;
}

export interface TagCount {
  tag: string;
  count: number;
}

export interface TagViews {
  tag: string;
  views: number;
}
