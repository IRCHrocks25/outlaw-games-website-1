"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const games = [
  {
    title: "OÜTIE Putt Putt",
    description:
      "Master the greens in this addictive mini-golf experience. Compete with friends and earn rewards as you sink impossible shots across beautifully designed courses.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2006.jpeg",
    status: "live",
  },
  {
    title: "OÜTIE Pool",
    description:
      "Rack 'em up in this sleek 8-ball pool game. Challenge players worldwide, climb the leaderboards, and prove you're the ultimate pool shark.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2007.jpeg",
    status: "coming-soon",
  },
  {
    title: "OÜTIE Chess",
    description:
      "The timeless game of strategy, reimagined. Battle opponents in ranked matches, solve daily puzzles, and earn your place among the grandmasters.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2006.jpeg",
    status: "coming-soon",
  },
]

export function GamesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="games" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Games.</h2>
          <p className="mt-4 text-lg text-black/60 max-w-2xl">
            Classic gameplay meets modern rewards. Every game in our collection is designed for fun first, with
            blockchain benefits built in.
          </p>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-full rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/out-20law-20banners.png"
            alt="Outlaw Mini-Games Banner"
            width={1400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Game Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-black">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">OÜTIE</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <h3 className="text-xl font-bold text-black">{game.title}</h3>
                <div className="flex-1 h-0.5 bg-red-500" />
              </div>

              <p className="mt-3 text-black/60 leading-relaxed">{game.description}</p>

              <Button
                variant="outline"
                className={`mt-4 border-2 font-semibold ${
                  game.status === "live"
                    ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={game.status === "coming-soon"}
              >
                {game.status === "live" ? (
                  <>
                    VIEW GAME <ExternalLink className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  "COMING SOON"
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
