import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TokenStats } from "@/components/token-stats"
import { GamesSection } from "@/components/games-section"
import { MMORPGSection } from "@/components/mmorpg-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TechSection } from "@/components/tech-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TokenStats />
      <GamesSection />
      <TechSection />
      <MMORPGSection />
      <RoadmapSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
