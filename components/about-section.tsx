"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const bulletPoints = [
  "40+ years combined experience",
  "IP from global movie studio",
  "Player-first game design",
  "Web3 infrastructure ready",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={containerRef} className="py-12 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#A4FF42]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {" "}
          {/* changed items-start to items-end */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30, x: -30 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl lg:text-6xl font-bold text-white leading-tight"
            >
              What is  <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-[#A4FF42] inline-block"
              >
                Outlaw Games?
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 lg:mt-6 text-base lg:text-lg text-white/70 leading-relaxed"
            >
              The rebellion has begun. Old systems have failed. Outlaw bridges the gap between casual gamers and Web3
              with simple, addictive, player-first games.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 lg:mt-6 text-base lg:text-lg text-white/70 leading-relaxed"
            >
              We emphasize player experience, classic IP, and cinematic characters more than blockchain. Our games are
              built for everyone, with cutting-edge technology that stays invisible until you want it.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02, borderColor: "rgba(164,255,66,0.4)" }}
              transition={{ duration: 0.3 }}
              className="relative p-5 lg:p-8 rounded-2xl border border-[#A4FF42]/20 bg-[#A4FF42]/5 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(164,255,66,0.1)]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
              />

              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg lg:text-xl font-semibold text-white mb-4 lg:mb-6"
                >
                  Our approach is simple:
                </motion.h3>

                <ul className="space-y-3 lg:space-y-4">
                  {bulletPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.15,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.15, type: "spring" }}
                        className="w-2 h-2 rounded-full bg-[#A4FF42] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"
                      />
                      <span className="text-white/80 text-base lg:text-lg group-hover:text-[#A4FF42] transition-colors">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
