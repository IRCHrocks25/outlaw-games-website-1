import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "About Us | OUTLAW Games",
  description: "Learn about Outlaw Games - the first platform to deliver a working Proof of Play system. Earn cryptocurrency instantly through verified gameplay with zero upfront investment.",
  openGraph: {
    title: "About Us | OUTLAW Games",
    description: "Learn about Outlaw Games - the first platform to deliver a working Proof of Play system.",
    url: "https://www.outlaw.games/about",
    siteName: "Outlaw Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | OUTLAW Games",
    description: "Learn about Outlaw Games - the first platform to deliver a working Proof of Play system.",
  },
  alternates: {
    canonical: "https://www.outlaw.games/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutSection />
      <Footer />
    </main>
  )
}

