import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllArticles } from "@/lib/articles"
import { ArticlesList } from "@/components/articles-list"

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ArticlesList articles={articles} />
      <Footer />
    </main>
  )
}

