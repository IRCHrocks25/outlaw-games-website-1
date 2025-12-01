"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: "user" | "bot"; isTyping?: boolean }>
  >([
    {
      id: 1,
      text: "Hey! I'm here to help. What would you like to know about Outlaw Games?",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user" as const,
    }

    setMessages([...messages, userMessage])
    const messageText = inputValue
    setInputValue("")

    // Show typing indicator
    const typingMessage = {
      id: messages.length + 2,
      text: "Typing...",
      sender: "bot" as const,
      isTyping: true,
    }
    setMessages((prev) => [...prev, typingMessage])

    try {
      const response = await fetch("https://katalyst-crm.fly.dev/webhook/7bf164be-6a8c-4af7-bd7b-a2d68bf183d1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      const botResponseText = data.Response || data.response || "I'm sorry, I couldn't process that request. Please try again."

      // Remove typing indicator and add bot response
      setMessages((prev) => {
        const filtered = prev.filter((msg) => !msg.isTyping)
        return [
          ...filtered,
          {
            id: prev.length + 1,
            text: botResponseText,
            sender: "bot" as const,
          },
        ]
      })
    } catch (error) {
      console.error("Error sending message:", error)
      // Remove typing indicator and show error message
      setMessages((prev) => {
        const filtered = prev.filter((msg) => !msg.isTyping)
        return [
          ...filtered,
          {
            id: prev.length + 1,
            text: "Sorry, I'm having trouble connecting right now. Please try again later.",
            sender: "bot" as const,
          },
        ]
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-[#A4FF42] hover:border-[#8FE635] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/images/outlaw-20lime-20green-20logo-20.png"
                alt="Outlaw Chat"
                fill
                className="object-contain"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] bg-black border-2 border-[#A4FF42]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#A4FF42]/10 border-b border-[#A4FF42]/30 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/outlaw-20lime-20green-20logo-20.png"
                    alt="Outlaw"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Outlaw Support</h3>
                  <p className="text-[#A4FF42] text-xs">We're here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-[#A4FF42] text-black"
                        : message.isTyping
                        ? "bg-white/5 text-white/60"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      {message.isTyping ? (
                        <span className="flex items-center gap-1">
                          <span className="animate-pulse">●</span>
                          <span className="animate-pulse delay-75">●</span>
                          <span className="animate-pulse delay-150">●</span>
                        </span>
                      ) : (
                        message.text
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4 bg-black">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#A4FF42]"
                />
                <Button
                  onClick={handleSend}
                  className="bg-[#A4FF42] text-black hover:bg-[#8FE635] px-4"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-white/40 mt-2 text-center">
                Press Enter to send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

