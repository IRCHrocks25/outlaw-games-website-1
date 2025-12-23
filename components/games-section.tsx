"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const games = [
  {
    title: "OÜTIE Putt",
    description:
      "Master the greens in this addictive mini-golf experience. Compete with friends and earn rewards as you sink impossible shots across beautifully designed courses.",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cb8c25f8-5937-44cb-b929-979f042ea5f7_2-3jx6RrH5hrDVXtVtjMkZP8VrUJQrcr.mp4",
    image: null,
    status: "coming-soon",
  },
  {
    title: "OÜTIE Pool",
    description:
      "Rack 'em up in this sleek 8-ball pool game. Challenge players worldwide, climb the leaderboards, and prove you're the ultimate pool shark.",
    image: null,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2edd2660-33c4-4ff3-aaaa-279db8efae75-sIRlP21jqPSH2bcRDJSIYceZBPNG9f.mp4",
    status: "coming-soon",
  },
  {
    title: "OÜTIE Chess",
    description:
      "The timeless game of strategy, reimagined. Battle opponents in ranked matches, solve daily puzzles, and earn your place among the grandmasters.",
    image: null,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc18ed30-b299-4dbd-9054-bbf8dd46cc3c-zoa732FowQAuvphGUZQV1da3gGhpMU.mp4",
    status: "coming-soon",
  },
];

export function GamesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="games"
      ref={ref}
      className="py-12 lg:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-white uppercase">
            OUR <span className="text-[#A4FF42]">GAMES</span>
          </h2>
        </motion.div>

        {/* Banner Image - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 lg:mt-12 w-full rounded-2xl overflow-hidden relative group hidden md:block"
        >
          <div className="absolute inset-0 border border-[#A4FF42]/20 rounded-2xl pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
          <Image
            src="/images/out-20law-20banners.png"
            alt="Outlaw Mini-Games Banner"
            width={1400}
            height={400}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <a
            href="https://app.outlaw.kuki.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-6 py-3 bg-[#A4FF42] text-black font-bold rounded-lg transition-all duration-300 hover:bg-[#8CE02E] hover:scale-105 shadow-lg shadow-[#A4FF42]/20"
          >
            PLAY NOW
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="mt-8 lg:mt-16 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group flex-shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#A4FF42]/10 bg-[#A4FF42]/5 backdrop-blur-xl transition-all duration-300 group-hover:border-[#A4FF42]/40 group-hover:bg-[#A4FF42]/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20" />

                <div className="relative">
                  <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
                    {game.video ? (
                      <video
                        src={game.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-[#A4FF42]/20 backdrop-blur-md rounded-full border border-[#A4FF42]/30">
                      <span className="text-[#A4FF42] text-xs font-bold">
                        OÜTIE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      {game.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#A4FF42]/50 to-transparent" />
                  </div>

                  <p className="hidden lg:block mt-3 text-white/50 leading-relaxed text-sm">
                    {game.description}
                  </p>

                  <a
<<<<<<< HEAD
                    href={game.title === "OÜTIE Putt" ? "https://app.outlaw.kuki.agency/" : "https://www.outlawgames.app"}
=======
                    href={
                      game.title === "OÜTIE Putt"
                        ? "https://app.outlaw.kuki.agency/"
                        : "https://www.outlawgames.app"
                    }
>>>>>>> e12a13d01e0389f0b12922b49a42ef287963e6a6
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 lg:mt-6 w-full inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-3 rounded-md border border-[#A4FF42] text-[#A4FF42] font-semibold text-sm transition-all duration-300 hover:bg-[#A4FF42] hover:text-black"
                  >
                    {game.title === "OÜTIE Putt" ? "PLAY NOW" : "COMING SOON"}{" "}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
