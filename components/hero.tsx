"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Video Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outlaw%20games_2-7X5iDRjjxE1c5t2qmeFAsVWujUs7AG-uahmGjkQkRS2FcJdc3aHrs8AI2uddX.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-5xl"
        >
          {/* NOW LIVE Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mb-6 inline-block"
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
                <span className="relative z-10">NOW LIVE ON GOOGLE PLAY</span>
              </Badge>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-[#A4FF42]"
            >
              OUTLAW GAMES
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              PROOF OF PLAY
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="block text-[#A4FF42]"
            >
              STARTS HERE.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
          >
            The first platform to deliver a true Play-to-Earn experience. Earn{" "}
            <span className="text-[#A4FF42] font-semibold">$OUTLAW</span> instantly through verified gameplay with zero upfront investment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 150,
            }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="bg-black/80 backdrop-blur-md border-2 border-[#A4FF42]/30 text-[#A4FF42] hover:bg-black/90 hover:border-[#A4FF42] hover:text-[#A4FF42] hover:shadow-[0_0_20px_rgba(164,255,66,0.5)] font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto transition-all duration-300"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.outlawgame.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Get It on Google Play
                </a>
              </Button>
            </motion.div>
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
                  href="https://app.outlaw-do.kuki.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 whitespace-nowrap"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)" }}
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/50"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
