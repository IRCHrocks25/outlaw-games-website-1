import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { WelcomeNews } from "@/components/welcome-news"
import { GamesSection } from "@/components/games-section"
import { ArticlesSection } from "@/components/articles-section"
import { TechSection } from "@/components/tech-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { getRecentArticles } from "@/lib/articles"

export default async function Home() {
  const articles = getRecentArticles(3)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <WelcomeNews />
      <GamesSection />
      <ArticlesSection articles={articles} />
      <TechSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
