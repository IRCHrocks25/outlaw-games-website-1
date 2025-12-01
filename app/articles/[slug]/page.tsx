import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleContent } from "@/components/article-content"
import { JsonLdSchema } from "@/components/json-ld-schema"
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  const baseUrl = "https://www.outlawgames.app"
  const articleUrl = `${baseUrl}/articles/${slug}`

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: articleUrl,
      siteName: "Outlaw Games",
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.lastUpdated || article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <ArticleContent article={article} />
      </div>
      <Footer />
      <JsonLdSchema article={article} />
    </main>
  )
}

