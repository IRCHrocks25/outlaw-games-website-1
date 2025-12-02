"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Wallet, Gamepad2, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Your keys, your rules. Bank-grade security with fingerprint and face ID.",
  },
  {
    icon: Wallet,
    title: "Built on Solana",
    description: "Send, receive, swap, and hold Solana, coins, and stablecoins instantly.",
  },
  {
    icon: Gamepad2,
    title: "Play Mini-Games",
    description: "OÜTIE Chess, Pool, and Putt Putt built right into your wallet.",
  },
  {
    icon: Zap,
    title: "Play To Earn",
    description: "Reach, build, and earn all in one app. Proof of Play is here.",
  },
]

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="technology" ref={ref} className="py-12 lg:py-24 bg-black relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#A4FF42]/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-6xl font-bold text-white mb-8 lg:mb-12 uppercase"
        >
          PROOF OF <span className="text-[#A4FF42]">PLAY</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
          {/* Left - Large Featured Card with Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A4FF42]/30 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl border border-[#A4FF42]/20 bg-[#0a0a0a] backdrop-blur-xl overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />

              <div className="relative overflow-hidden flex-1 min-h-[200px] lg:min-h-[280px]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute inset-0">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OUTLAW%20Wallet%20Trailer%202025%20-%20Outlaw%20Crypto%20Games%20%281080p%2C%20h264%29-24ONwuQRCX6RQMl3fi5htlX6vY6w5G-fyIgwFukY3Sao2nS5z3dmI4Z7N2W2K.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              <div className="p-4 lg:p-6 relative z-20">
                <span className="text-[#A4FF42] font-semibold text-sm uppercase tracking-wider">OUTLAW WALLET</span>
                <h3 className="mt-2 lg:mt-3 text-xl lg:text-3xl font-bold text-white">
                  Outlaw Wallet: Your Keys, Your Rules
                </h3>
                <p className="mt-3 lg:mt-4 text-white/60 leading-relaxed text-sm lg:text-base">
                  The all-in-one crypto wallet built on Solana. Play mini-games, earn rewards, and manage your assets
                  with biometric security. Proof of Play is here.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Stacked Feature Cards - 2x2 grid on mobile */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 lg:gap-4 h-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                className="relative p-3 lg:p-5 rounded-xl border border-[#A4FF42]/10 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#A4FF42]/40 hover:bg-[#A4FF42]/5 lg:flex-1 flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -inset-1 bg-[#A4FF42]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 w-full text-center lg:text-left">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#A4FF42]/10 border border-[#A4FF42]/20 flex items-center justify-center group-hover:bg-[#A4FF42]/20 transition-colors">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#A4FF42]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm lg:text-lg">{feature.title}</h4>
                    <p className="hidden lg:block mt-1 text-white/50 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
