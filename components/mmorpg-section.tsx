"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export function MMORPGSection() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const features = [
    "Reputation shapes your path",
    "Factions battle for territory",
    "Missions evolve with skill",
    "Achievements carry weight",
    "Economy adapts to players",
  ]

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section id="mmorpg" ref={ref} className="relative py-12 lg:py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A4FF42]/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase">
            THE FRONTIER <span className="text-[#A4FF42]">WE'RE BUILDING</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-white/60 text-base lg:text-lg">Mini games are the entry door.</p>
          <p className="text-[#A4FF42] font-semibold text-lg lg:text-xl mt-2">The MMORPG is the frontier behind it.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-8 lg:mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#A4FF42]/20 bg-black/50 backdrop-blur-xl group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#A4FF42]/20 via-[#A4FF42]/10 to-[#A4FF42]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative aspect-video">
              <video
                ref={videoRef}
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
                onClick={handlePlayPause}
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outlaw%20games_2-7X5iDRjjxE1c5t2qmeFAsVWujUs7AG-uahmGjkQkRS2FcJdc3aHrs8AI2uddX.mp4" type="video/mp4" />
              </video>

              {/* Play Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                  onClick={handlePlayPause}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-[#A4FF42] flex items-center justify-center shadow-[0_0_60px_rgba(164,255,66,0.5)]"
                  >
                    <Play className="w-7 h-7 lg:w-10 lg:h-10 text-black ml-1" fill="black" />
                  </motion.div>
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="w-10 h-10 rounded-full bg-[#A4FF42]/20 hover:bg-[#A4FF42]/40 flex items-center justify-center transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-[#A4FF42]" />
                      ) : (
                        <Play className="w-5 h-5 text-[#A4FF42] ml-0.5" />
                      )}
                    </button>
                    <button
                      onClick={handleMuteToggle}
                      className="w-10 h-10 rounded-full bg-[#A4FF42]/20 hover:bg-[#A4FF42]/40 flex items-center justify-center transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-[#A4FF42]" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-[#A4FF42]" />
                      )}
                    </button>
                  </div>
                  <div className="text-[#A4FF42] text-sm font-medium hidden sm:block">MMORPG TRAILER</div>
                  <button
                    onClick={handleFullscreen}
                    className="w-10 h-10 rounded-full bg-[#A4FF42]/20 hover:bg-[#A4FF42]/40 flex items-center justify-center transition-colors"
                  >
                    <Maximize className="w-5 h-5 text-[#A4FF42]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-[#A4FF42]/20 bg-[#A4FF42]/5 backdrop-blur-sm hover:bg-[#A4FF42]/10 hover:border-[#A4FF42]/40 transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A4FF42]" />
              <span className="text-white/80 text-xs lg:text-sm whitespace-nowrap">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
