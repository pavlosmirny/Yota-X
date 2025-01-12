// app/blog/[slug]/page.tsx
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesService } from "../../../components/Blog/articles";
import { ArticleView } from "../../../components/Blog/ArticleView";
import { DynamicContent } from "../../../components/Blog/DynamicContent";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = await ArticlesService.getArticleBySlug(slug);

    return {
      title: article.title,
      description: article.description,
      keywords: article.tags,
      authors: [{ name: article.author }],
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.createdAt,
        authors: article.author,
        tags: article.tags,
        siteName: "Yota X",
        url: `https://yota-x.com/blog/${article.slug}`,
        images: [
          {
            url: article.imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        images: [article.imageUrl],
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }
}

export default async function Page({ params }: Props) {
  try {
    const { slug } = await params;
    const [article, relatedArticles] = await Promise.all([
      ArticlesService.getArticleBySlug(slug),
      ArticlesService.getRelatedArticles(slug, 3),
    ]);

    return (
      <ArticleView
        article={article}
        relatedArticles={relatedArticles}
        content={<DynamicContent content={article.content} />}
      />
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
