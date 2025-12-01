"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#E53935]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Newsletter</h2>
            <p className="mt-4 text-white/80 text-lg">
              Subscribe here for all the news that's fit to fly - delivered straight to your inbox! You can opt out
              anytime.
            </p>
            <p className="mt-4 text-white/60 text-sm">
              By subscribing, you agree to receive emails from us. Please review our{" "}
              <a href="#" className="underline hover:text-white">
                privacy policy
              </a>{" "}
              for more information. You can unsubscribe at any time.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-0 h-14 text-black placeholder:text-gray-500"
              required
            />
            <Button type="submit" className="w-full h-14 bg-black text-white hover:bg-gray-900 font-semibold text-lg">
              SUBMIT
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
