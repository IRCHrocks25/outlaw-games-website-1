"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Wallet, Gamepad2, Trophy, Globe, Rocket } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Q4 2025",
    title: "Wallet Launch",
    items: ["Outlaw Wallet with biometric security", "Send, receive, swap functionality"],
    icon: Wallet,
    status: "Live",
  },
  {
    phase: "Q1 2026",
    title: "Putt Putt Release",
    items: ["First proof of concept game", "Play to earn rewards system"],
    icon: Gamepad2,
    status: "Coming Soon",
  },
  {
    phase: "Q2 2026",
    title: "Chess & Pool",
    items: ["Classic games reimagined", "Competitive leaderboards"],
    icon: Trophy,
    status: "Coming Soon",
  },
  {
    phase: "Q3 2026",
    title: "Ecosystem Expansion",
    items: ["Cross game progression", "Enhanced rewards system"],
    icon: Rocket,
    status: "Planned",
  },
  {
    phase: "Q4 2026",
    title: "Full MMORPG",
    items: ["Massive multiplayer world", "True asset ownership"],
    icon: Globe,
    status: "In Development",
  },
]

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState<number | null>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="roadmap" ref={containerRef} className="py-12 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3">
          <div
            className="absolute bottom-0 left-0 right-0 h-full opacity-30"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(164,255,66,0.05) 30%, rgba(164,255,66,0.1) 50%, rgba(164,255,66,0.05) 70%, transparent 100%)",
            }}
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-0 w-full h-[200px] rounded-full blur-[100px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(164,255,66,0.15), rgba(164,255,66,0.1), transparent)",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-white leading-none uppercase">
            ROADMAP <span className="text-[#A4FF42]">2025-2026</span>
          </h2>
        </motion.div>

        {/* Desktop version - hidden on mobile */}
        <div className="relative min-h-[450px] hidden lg:block">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A4FF42" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#A4FF42" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A4FF42" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d="M 50 320 Q 150 280 250 220 Q 350 160 450 180 Q 550 200 650 140 Q 750 80 850 100 Q 920 110 950 60"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {[
              { cx: 80, cy: 300 },
              { cx: 280, cy: 200 },
              { cx: 480, cy: 185 },
              { cx: 680, cy: 130 },
              { cx: 920, cy: 65 },
            ].map((dot, index) => (
              <g key={index}>
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r={activePhase === index ? 20 : 12}
                  fill="transparent"
                  stroke="#A4FF42"
                  strokeWidth="2"
                  strokeOpacity={activePhase === index ? 0.5 : 0.2}
                  filter="url(#glowStrong)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                />
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r={activePhase === index ? 10 : 6}
                  fill="#A4FF42"
                  fillOpacity={activePhase === index ? 1 : 0.7}
                  filter="url(#glow)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => setActivePhase(index)}
                  style={{ pointerEvents: "all" }}
                />
              </g>
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute left-[1%] bottom-[22%] z-10"
          >
            <span className="text-[#A4FF42] text-2xl font-bold drop-shadow-[0_0_10px_rgba(164,255,66,0.5)]">2025</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="absolute right-[1%] top-[8%] z-10"
          >
            <span className="text-[#A4FF42] text-2xl font-bold drop-shadow-[0_0_10px_rgba(164,255,66,0.5)]">2026</span>
          </motion.div>

          {roadmapPhases.map((phase, index) => {
            const isActive = activePhase === index
            const isAbove = index % 2 === 0

            const cardPositions = [
              { left: "3%", top: "5%" },
              { left: "20%", top: "55%" },
              { left: "40%", top: "0%" },
              { left: "58%", top: "50%" },
              { left: "78%", top: "32%" },
            ]

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.2,
                }}
                onClick={() => setActivePhase(index)}
                className="absolute w-[180px] cursor-pointer z-10"
                style={{
                  left: cardPositions[index].left,
                  top: cardPositions[index].top,
                }}
              >
                <div
                  className={`absolute left-1/2 w-px bg-gradient-to-b from-[#A4FF42]/50 to-transparent ${
                    isAbove ? "bottom-0 h-8 translate-y-full" : "top-0 h-8 -translate-y-full rotate-180"
                  }`}
                />

                <motion.div
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    boxShadow: isActive
                      ? "0 0 40px rgba(164,255,66,0.4), inset 0 1px 1px rgba(255,255,255,0.1)"
                      : "0 0 20px rgba(164,255,66,0.1), inset 0 1px 1px rgba(255,255,255,0.05)",
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative p-4 rounded-xl overflow-hidden
                    border transition-all duration-300
                    ${isActive ? "border-[#A4FF42]/60" : "border-[#A4FF42]/20 hover:border-[#A4FF42]/40"}
                  `}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(164,255,66,0.2) 0%, rgba(164,255,66,0.08) 50%, rgba(0,0,0,0.6) 100%)"
                      : "linear-gradient(135deg, rgba(164,255,66,0.1) 0%, rgba(164,255,66,0.03) 50%, rgba(0,0,0,0.5) 100%)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none" />

                  <h3 className="text-lg font-bold text-white mb-1">{phase.phase}</h3>
                  <h4 className="text-xs font-semibold text-[#A4FF42] mb-2">{phase.title}</h4>

                  <ul className="space-y-1">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[10px] text-white/70">
                        <span className="text-[#A4FF42] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile version - horizontal scroll carousel */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {roadmapPhases.map((phase, index) => {
            const isActive = activePhase === index

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActivePhase(index)}
                className="cursor-pointer flex-shrink-0 w-[260px] snap-center"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    boxShadow: isActive ? "0 0 30px rgba(164,255,66,0.3)" : "0 0 10px rgba(164,255,66,0.1)",
                  }}
                  className={`
                    relative p-4 rounded-xl overflow-hidden
                    border transition-all duration-300
                    ${isActive ? "border-[#A4FF42]/50" : "border-[#A4FF42]/20"}
                  `}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(164,255,66,0.15) 0%, rgba(164,255,66,0.05) 50%, rgba(0,0,0,0.5) 100%)"
                      : "linear-gradient(135deg, rgba(164,255,66,0.08) 0%, rgba(164,255,66,0.02) 50%, rgba(0,0,0,0.5) 100%)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none" />

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl font-bold text-[#A4FF42]/80">{phase.phase}</span>
                    <span
                      className={`
                        px-2 py-0.5 text-[10px] font-semibold rounded-full
                        ${
                          phase.status === "Live"
                            ? "bg-[#A4FF42]/20 text-[#A4FF42]"
                            : phase.status === "Coming Soon"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-white/10 text-white/60"
                        }
                      `}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>

                  <ul className="space-y-1">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="text-[#A4FF42] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
