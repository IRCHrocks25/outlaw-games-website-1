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
    <section id="articles" ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Articles<span className="text-[#A4FF42]">.</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Stay informed with our latest insights on crypto gaming, blockchain technology, and Web3 trends.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={`/articles/${article.slug}`}>
                <motion.div
                  whileHover={{ borderColor: "rgba(164,255,66,0.5)" }}
                  className="relative h-full rounded-2xl overflow-hidden border border-[#A4FF42]/20 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(164,255,66,0.2)]"
                >
                  {/* Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#A4FF42]/5 via-transparent to-transparent"
                  />
                  
                  <div className="relative p-6 lg:p-8 h-full flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between mb-4"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black text-[#A4FF42] border border-[#A4FF42]/30"
                      >
                        {article.category}
                      </motion.span>
                      <span className="text-xs text-white/50 font-medium">
                        {new Date(article.publishedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF42] transition-colors duration-300 leading-tight"
                    >
                      {article.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-white/60 leading-relaxed mb-6 flex-grow line-clamp-3"
                    >
                      {article.intro}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#A4FF42] font-semibold mt-auto"
                    >
                      <span>Read More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-black text-[#A4FF42] border border-[#A4FF42]/30 hover:bg-[#A4FF42]/10 hover:border-[#A4FF42] font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(164,255,66,0.2)]"
            >
              <Link href="/articles">View All Articles</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

