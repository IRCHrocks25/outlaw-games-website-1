import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PreLaunchSection } from "@/components/pre-launch-section"
import { AboutSection } from "@/components/about-section"
import { GamesSection } from "@/components/games-section"
import { MMORPGSection } from "@/components/mmorpg-section"
import { RoadmapSection } from "@/components/roadmap-section"
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
      <PreLaunchSection />
      <AboutSection />
      <GamesSection />
      <TechSection />
      <MMORPGSection />
      <RoadmapSection />
      <ArticlesSection articles={articles} />
      <Newsletter />
      <Footer />
    </main>
  )
}
