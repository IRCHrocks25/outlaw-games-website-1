"use client"

import { Article } from "@/types/article"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <article ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold text-white mb-6"
      >
        {article.title}
      </motion.h1>

      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#A4FF42]/20 text-[#A4FF42] border border-[#A4FF42]/30">
          {article.category}
        </span>
        <span className="ml-4 text-white/60 text-sm">
          {new Date(article.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <p className="text-xl text-white/90 leading-relaxed">{article.intro}</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-12">
        {article.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{section.heading}</h2>
            <div className="max-w-none">
              {section.content.split("\n\n").map((paragraph, pIndex) => (
                <div key={pIndex} className="mb-6">
                  {paragraph.includes(":") && paragraph.split(":").length === 2 ? (
                    <div>
                      <strong className="text-[#A4FF42]">{paragraph.split(":")[0]}:</strong>
                      <span className="text-white/90 ml-2">{paragraph.split(":")[1]}</span>
                    </div>
                  ) : (
                    <p className="text-white/90 leading-relaxed text-lg">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* FAQs */}
      {article.faqs.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {article.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-white/10 px-4 py-2 rounded-lg mb-4 bg-white/5"
              >
                <AccordionTrigger className="text-white hover:text-[#A4FF42] text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      )}

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-white/10"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Conclusion</h2>
        <p className="text-white/90 leading-relaxed text-lg">{article.conclusion}</p>
      </motion.section>
    </article>
  )
}

