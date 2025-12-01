"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Article } from "@/types/article"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArticlesSectionProps {
  articles: Article[]
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Show featured articles or most recent 3
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3)
  const displayArticles = featuredArticles.length >= 3 ? featuredArticles : articles.slice(0, 3)

  if (displayArticles.length === 0) {
    return null
  }

  return (
    <section id="articles" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Articles.</h2>
          <p className="mt-4 text-lg text-black/60 max-w-2xl">
            Stay informed with our latest insights on SEO/GEO strategies, geographic trends, and market
            analysis.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#A4FF42]/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#A4FF42]/20 text-[#A4FF42]">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(article.publishedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#A4FF42] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {article.intro}
                  </p>

                  <div className="flex items-center text-[#A4FF42] font-semibold mt-auto">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#A4FF42] text-[#A4FF42] hover:bg-[#A4FF42] hover:text-black font-semibold px-8"
          >
            <Link href="/articles">View All Articles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

