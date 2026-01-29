"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Gamepad2 } from "lucide-react"

const bulletPoints = [
  "40+ years combined experience",
  "IP from global movie studio",
  "Player-first game design",
  "Web3 infrastructure ready",
]

const launchFeatures = [
  {
    title: "Instant On-Chain Rewards",
    description:
      "Earn cryptocurrency instantly through verified gameplay. No waiting periods, no delays — rewards are automatic and fully owned by you.",
    icon: Sparkles,
  },
  {
    title: "Zero Financial Entry Barrier",
    description:
      "No NFTs to buy, no token pre-purchases, no mandatory investments. Simply download and start playing.",
    icon: Zap,
  },
  {
    title: "Real-Time Gameplay Verification",
    description:
      "The first working Proof of Play system that verifies your gameplay in real-time and rewards you instantly.",
    icon: Gamepad2,
  },
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
    <section id="about" ref={containerRef} className="pt-24 pb-12 lg:pt-32 lg:pb-24 bg-black relative overflow-hidden">
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

        {/* Pre-Launch Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-24 text-center max-w-4xl mx-auto"
        >
          {/* NOW LIVE Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mb-8 inline-block"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(164,255,66,0.3)",
                  "0 0 40px rgba(164,255,66,0.5)",
                  "0 0 20px rgba(164,255,66,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="inline-block rounded-full"
            >
              <Badge className="bg-[#A4FF42]/20 text-[#A4FF42] border-[#A4FF42]/40 px-5 py-2 text-sm font-bold uppercase tracking-wider relative overflow-hidden">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ backgroundSize: "200% 100%" }}
                />
                <span className="relative z-10">NOW LIVE</span>
              </Badge>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Outlaw Games{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                className="text-[#A4FF42] relative inline-block"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(164,255,66,0.5)",
                      "0 0 40px rgba(164,255,66,0.8)",
                      "0 0 20px rgba(164,255,66,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Now Live
                </motion.span>
              </motion.span>{" "}
              on Google Play and on App Store
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="space-y-4 mb-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base lg:text-lg text-white/70 leading-relaxed"
            >
              The first platform in the world to deliver a working{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.7,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-[#A4FF42] font-semibold inline-block"
              >
                Proof of Play
              </motion.span>{" "}
              system — earn cryptocurrency instantly through verified gameplay
              with zero upfront investment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base lg:text-lg text-white/70 leading-relaxed"
            >
              No NFTs to buy, no token pre-purchases, no mandatory investments.
              Simply play and earn{" "}
              <motion.span
                whileHover={{ scale: 1.05, color: "#A4FF42" }}
                className="font-semibold transition-colors cursor-default"
              >
                $OUTLAW
              </motion.span>{" "}
              instantly. The first true Play-to-Earn system available to
              mainstream users.
            </motion.p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl lg:text-3xl font-bold text-white text-center mb-12"
            >
              First in the Market
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {launchFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 2.2 + index * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      borderColor: "rgba(164,255,66,0.6)",
                      boxShadow: "0 0 60px rgba(164,255,66,0.3)",
                    }}
                    className="relative p-6 lg:p-8 rounded-2xl border border-[#A4FF42]/20 bg-[#A4FF42]/5 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(164,255,66,0.1)] group cursor-pointer"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#A4FF42]/10 via-transparent to-transparent pointer-events-none"
                    />

                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 2.3 + index * 0.2,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="flex items-start gap-4 mb-4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="w-12 h-12 rounded-xl bg-[#A4FF42] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(164,255,66,0.5)]"
                        >
                          <Icon className="w-6 h-6 text-black" />
                        </motion.div>
                        <motion.h4
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 2.4 + index * 0.2 }}
                          className="text-xl font-semibold text-white group-hover:text-[#A4FF42] transition-colors"
                        >
                          {feature.title}
                        </motion.h4>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 2.5 + index * 0.2 }}
                        className="text-white/70 text-sm lg:text-base leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "100%", opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 2.9,
                type: "spring",
                stiffness: 150,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(164,255,66,0.4)",
                      "0 0 50px rgba(164,255,66,0.6)",
                      "0 0 30px rgba(164,255,66,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="rounded-lg"
                >
                  <Button
                    asChild
                    size="lg"
                    className="relative bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold text-lg px-10 py-7 overflow-hidden group w-full sm:w-auto"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.outlawgame.android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10"
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ backgroundSize: "200% 100%" }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Get it on Google Play
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(164,255,66,0.4)",
                      "0 0 50px rgba(164,255,66,0.6)",
                      "0 0 30px rgba(164,255,66,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="rounded-lg"
                >
                  <Button
                    asChild
                    size="lg"
                    className="relative bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold text-lg px-10 py-7 overflow-hidden group w-full sm:w-auto"
                  >
                    <a
                      href="https://apps.apple.com/us/app/outlaw-games/id6753969904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10"
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ backgroundSize: "200% 100%" }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Get it on App Store
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm text-white/50"
            >
              Download now and start earning $OUTLAW instantly through verified
              gameplay.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
