"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Users } from "lucide-react"
import { useState } from "react"

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "For general questions about Outlaw Games",
    email: "info@otlwgame.com",
  },
  {
    icon: MessageSquare,
    title: "Press & Media",
    description: "Media inquiries and press requests",
    email: "info@otlwgame.com",
  },
  {
    icon: Users,
    title: "Partnerships",
    description: "Business development and collaborations",
    email: "info@otlwgame.com",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Get in <span className="text-[#A4FF42]">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Have questions about Outlaw Games? We'd love to hear from you. Send us a message and we'll respond as soon
              as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#A4FF42]/10 rounded-xl flex items-center justify-center">
                  <option.icon className="w-7 h-7 text-[#A4FF42]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-black">{option.title}</h3>
                <p className="mt-2 text-black/60">{option.description}</p>
                <a
                  href={`mailto:${option.email}`}
                  className="mt-3 inline-block text-[#A4FF42] hover:underline font-medium"
                >
                  {option.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-12"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold text-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
