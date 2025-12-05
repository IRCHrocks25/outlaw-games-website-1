"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    category: "ANNOUNCEMENT",
    title: "Outlaw Wallet: Your Keys, Your Rules",
    excerpt:
      "The all-in-one crypto wallet built on Solana. Play mini-games, earn rewards, and manage your assets with biometric security.",
    date: "Nov 28, 2025",
    image: "/crypto-wallet-neon-green-dark.jpg",
    featured: true,
    slug: "what-are-crypto-wallets",
  },
  {
    category: "WEB3",
    title: "Why Proof of Play Changes Everything",
    excerpt: "How blockchain technology is revolutionizing player progression and rewards in gaming.",
    date: "Nov 25, 2025",
    image: "/blockchain-gaming-abstract-dark.jpg",
    slug: "what-is-crypto-gaming",
  },
  {
    category: "GAMES",
    title: "Putt Putt Beta Now Live",
    excerpt: "Our first proof of concept game is here. Play, compete, and earn on the leaderboards.",
    date: "Nov 20, 2025",
    image: "/mini-golf-neon-game-dark.jpg",
    slug: "how-to-earn-money-playing-games",
  },
  {
    category: "TECHNOLOGY",
    title: "Building on Solana: Speed Meets Scale",
    excerpt: "A look under the hood at how we leverage Solana for instant scoring and global leaderboards.",
    date: "Nov 15, 2025",
    image: "/solana-technology-abstract-dark.jpg",
    slug: "why-solana-is-key-player-blockchain",
  },
]

export function WelcomeNews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#A4FF42]/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-6xl font-bold text-white mb-8 lg:mb-12 uppercase"
        >
          LATEST <span className="text-[#A4FF42]">NEWS</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Three Stacked Articles - Left Side */}
          <div className="flex flex-col gap-4">
            {otherArticles.map((article, index) => (
              <Link key={index} href={`/articles/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative group cursor-pointer flex-1"
                >
                  <div className="absolute -inset-1 bg-[#A4FF42]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="relative p-3 lg:p-4 rounded-xl border border-[#A4FF42]/10 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#A4FF42]/40 hover:bg-[#A4FF42]/5 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-row gap-4 h-full items-center">
                      <div className="flex-shrink-0 w-20 lg:w-24 h-20 lg:h-24 rounded-lg overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#A4FF42]/20 text-[#A4FF42] text-[10px] font-bold uppercase tracking-wider">
                            {article.category}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm lg:text-lg group-hover:text-[#A4FF42] transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="hidden lg:block mt-1 text-white/50 text-sm leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Featured Article - Right Side */}
          <Link href={`/articles/${featuredArticle.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A4FF42]/30 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl border border-[#A4FF42]/20 bg-[#0a0a0a] backdrop-blur-xl overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />

                <div className="relative overflow-hidden h-64 lg:h-80">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-[#A4FF42] text-black text-xs font-bold uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 lg:p-6 flex-1 flex flex-col relative z-20">
                  <div className="flex items-center gap-2 text-white/40 text-xs lg:text-sm mb-2 lg:mb-3">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                    {featuredArticle.date}
                  </div>
                  <h3 className="text-lg lg:text-3xl font-bold text-white group-hover:text-[#A4FF42] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-4 text-white/60 leading-relaxed flex-1">{featuredArticle.excerpt}</p>
                  <div className="mt-4 lg:mt-6 inline-flex items-center gap-2 text-[#A4FF42] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 lg:mt-12 text-center"
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full border border-[#A4FF42]/30 bg-[#A4FF42]/10 text-[#A4FF42] font-semibold text-sm lg:text-base hover:bg-[#A4FF42] hover:text-black transition-all duration-300 group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
