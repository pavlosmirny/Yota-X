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
  author: string;
  published: boolean;
  imageUrl: string;
  seo: SEO;
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
  author?: string;
  searchTerm?: string;
}
