"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A4FF42]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl lg:rounded-3xl border border-[#A4FF42]/20 bg-[#A4FF42]/5 backdrop-blur-xl overflow-hidden p-6 lg:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase">
                STAY IN THE <span className="text-[#A4FF42]">LOOP</span>
              </h2>
              <p className="mt-3 lg:mt-4 text-white/60 text-base lg:text-lg">
                Subscribe here for all the news that's fit to fly delivered straight to your inbox! You can opt out
                anytime.
              </p>
              <p className="hidden lg:block mt-4 text-white/40 text-sm">
                By subscribing, you agree to receive emails from us. Please review our{" "}
                <a href="#" className="underline hover:text-[#A4FF42] transition-colors">
                  privacy policy
                </a>{" "}
                for more information.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-3 lg:space-y-4"
            >
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 lg:h-14 bg-black/50 border-[#A4FF42]/30 text-white placeholder:text-white/40 focus:border-[#A4FF42] pr-12 lg:pr-14"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 lg:h-10 lg:w-10 bg-[#A4FF42] text-black hover:bg-[#8FE635]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Button
                type="submit"
                className="w-full h-12 lg:h-14 bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold text-base lg:text-lg"
              >
                SUBSCRIBE
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
