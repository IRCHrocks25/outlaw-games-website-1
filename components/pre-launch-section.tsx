"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Gamepad2 } from "lucide-react";

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
];

export function PreLaunchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="py-12 lg:py-24 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164,255,66,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164,255,66,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border border-[#A4FF42]/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-24 h-24 border border-[#A4FF42]/15 rounded-lg rotate-45"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#A4FF42]/10 rounded-full"
        />
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A4FF42]/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#A4FF42]/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Subtle Mesh Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(164,255,66,0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(164,255,66,0.03) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(164,255,66,0.04) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* PRE-LAUNCH Badge with Glow Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
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

          {/* Headline with Staggered Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Outlaw Games{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
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
              on Google Play
            </motion.span>
          </motion.h2>

          {/* Description with Word-by-Word Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 mb-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.9,
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
                  delay: 1.1,
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
                delay: 1.2,
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
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-bold text-white text-center mb-12"
          >
            First in the Market
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {launchFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
                  animate={
                    isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: 1.6 + index * 0.2,
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
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#A4FF42]/10 via-transparent to-transparent pointer-events-none"
                  />
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#A4FF42]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 1.7 + index * 0.2,
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
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                        className="text-xl font-semibold text-white group-hover:text-[#A4FF42] transition-colors"
                      >
                        {feature.title}
                      </motion.h4>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.9 + index * 0.2 }}
                      className="text-white/70 text-sm lg:text-base leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 2.3,
              type: "spring",
              stiffness: 150,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Get It on Google Play Button */}
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
                      Get It on Google Play
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

            {/* PLAY NOW Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-b from-[#A4FF42] via-[#8FE635] to-[#7AD528] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto rounded-full border-2 sm:border-4 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4),inset_0_1px_6px_rgba(255,255,255,0.3),inset_0_-1px_6px_rgba(0,0,0,0.2)] sm:shadow-[0_0_20px_rgba(255,215,0,0.4),inset_0_2px_10px_rgba(255,255,255,0.3),inset_0_-2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6),inset_0_2px_12px_rgba(255,255,255,0.4),inset_0_-2px_12px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden"
              >
                <a
                  href="https://app.outlaw.kuki.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 whitespace-nowrap"
                  style={{
                    textShadow:
                      "0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)",
                  }}
                >
                  PLAY NOW
                </a>
              </Button>
              {/* Glossy overlay for convex effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full pointer-events-none"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Optional micro-line with fade animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm text-white/50"
          >
            Download now and start earning $OUTLAW instantly through verified
            gameplay.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
