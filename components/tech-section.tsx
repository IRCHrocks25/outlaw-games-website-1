"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Coins, Users } from "lucide-react"

const techFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Solana for instant transactions and minimal fees.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Non-custodial wallet with biometric security keeps you in control.",
  },
  {
    icon: Coins,
    title: "Real Rewards",
    description: "Earn tokens, NFTs, and exclusive items through gameplay.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Join a global community of players and compete for glory.",
  },
]

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="technology" ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Powered by <span className="text-[#A4FF42]">Solana</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            We chose Solana for its speed, low costs, and environmental efficiency. The best tech stays invisible until
            you need it.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-[#A4FF42]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#A4FF42]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[#A4FF42]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
