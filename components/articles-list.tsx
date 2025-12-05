"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Article } from "@/types/article"
import { ArrowRight } from "lucide-react"

interface ArticlesListProps {
  articles: Article[]
}

export function ArticlesList({ articles }: ArticlesListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Our <span className="text-[#A4FF42]">Articles</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Explore our latest insights on SEO/GEO strategies, geographic trends, and market analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">No articles found.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/articles/${article.slug}`}>
                    <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#A4FF42]/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-[#A4FF42] border border-[#A4FF42]/30">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(article.publishedDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
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
          )}
        </div>
      </section>
    </>
  )
}

