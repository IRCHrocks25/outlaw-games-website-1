"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Wallet, Gamepad2, Gift } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Your Keys, Your Rules",
  },
  {
    icon: Wallet,
    title: "Built on Solana",
    description: "Send, Receive, Swap, Hold",
  },
  {
    icon: Gamepad2,
    title: "Play Mini-Games",
    description: "Earn While You Play",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Proof of Play is Here",
  },
]

export function WelcomeNews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-black"
        >
          Latest News.
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OUTLAW%20Wallet%20Trailer%202025%20-%20Outlaw%20Crypto%20Games%20%281080p%2C%20h264%29-24ONwuQRCX6RQMl3fi5htlX6vY6w5G-fyIgwFukY3Sao2nS5z3dmI4Z7N2W2K.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-[#A4FF42] font-semibold text-sm uppercase tracking-wider">Introducing</span>
            <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-black">Outlaw Wallet</h3>
            <p className="mt-2 text-black/60">by Outlaw Games</p>

            <p className="mt-6 text-lg text-black/70">
              All-in-one app for Solana, coins & stablecoins. Play mini-games, earn rewards, and build your empire.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <feature.icon className="w-8 h-8 text-[#A4FF42] group-hover:scale-110 transition-transform" />
                  <h4 className="mt-3 font-semibold text-black">{feature.title}</h4>
                  <p className="mt-1 text-sm text-black/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
