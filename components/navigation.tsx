"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type NavItem = 
  | { name: string; hash: string; href?: never }
  | { name: string; href: string; hash?: never }

const navItems: NavItem[] = [
  { name: "Games", hash: "#games" },           // Maps to id="games" in GamesSection
  { name: "About Us", hash: "#about" },        // Maps to id="about" in AboutSection
  { name: "Technology", hash: "#technology" }, // Maps to id="technology" in TechSection
  { name: "Articles", href: "/articles" },     // Maps to /articles route
  { name: "Support", href: "/support" },        // Maps to /support page
  { name: "Contact", href: "/contact" },        // Maps to /contact page
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/outlaw-20lime-20green-20logo-20.png"
              alt="Outlaw Games"
              width={50}
              height={40}
              className="h-8 lg:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg lg:text-xl tracking-tight">OUTLAW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              // If item has href, use it directly (like Articles)
              // If item has hash, check if we're on homepage
              const href = item.href || (pathname === "/" ? item.hash : `/${item.hash}`)
              return (
                <Link
                  key={item.name}
                  href={href}
                  className="text-white/80 hover:text-[#A4FF42] transition-colors text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A4FF42] transition-all group-hover:w-full" />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* App Store Icons */}
            <div className="flex items-center gap-3">
              {/* Android - Active */}
              <a
                href="https://play.google.com/store/apps/details?id=com.outlawgame.android"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Download on Google Play"
              >
                <Image
                  src="/icons/google.webp"
                  alt="Get it on Google Play"
                  width={140}
                  height={40}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                />
              </a>
              
              {/* iOS - App Store */}
              <a
                href="https://apps.apple.com/us/app/outlaw-games/id6753969904"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/app_store_logo2.webp"
                  alt="Download on the App Store"
                  width={140}
                  height={40}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  style={{ 
                    border: 'none',
                    outline: 'none'
                  }}
                />
              </a>
            </div>
            
            <Button
              asChild
              className="relative bg-gradient-to-b from-[#A4FF42] via-[#8FE635] to-[#7AD528] text-white font-bold text-sm px-6 py-2 rounded-full border-4 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4),inset_0_2px_8px_rgba(255,255,255,0.3),inset_0_-2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6),inset_0_2px_12px_rgba(255,255,255,0.4),inset_0_-2px_12px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden whitespace-nowrap"
            >
              <a
                href="https://app.outieputt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)" }}
              >
                PLAY NOW
              </a>
            </Button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const href = item.href || (pathname === "/" ? item.hash : `/${item.hash}`)
                return (
                  <Link
                    key={item.name}
                    href={href}
                    className="block text-white/80 hover:text-[#A4FF42] transition-colors text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              
              {/* Mobile Search Button */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsSearchOpen(true)
                }}
                className="flex items-center gap-2 text-white/80 hover:text-[#A4FF42] transition-colors text-lg font-medium w-full"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
              
              {/* Mobile App Store Icons */}
              <div className="flex items-center gap-3 pt-2">
                {/* Android - Active */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.outlawgame.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label="Download on Google Play"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/icons/google.webp"
                    alt="Get it on Google Play"
                    width={140}
                    height={40}
                    className="h-10 w-full object-contain opacity-90 active:opacity-100 transition-opacity"
                  />
                </a>
                
                {/* iOS - App Store */}
                <a
                  href="https://apps.apple.com/us/app/outlaw-games/id6753969904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label="Download on the App Store"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/app_store_logo2.webp"
                    alt="Download on the App Store"
                    width={140}
                    height={40}
                    className="h-10 w-full object-contain opacity-90 active:opacity-100 transition-opacity"
                    style={{ 
                      border: 'none',
                      outline: 'none'
                    }}
                  />
                </a>
              </div>
              
              <Button
                asChild
                className="relative bg-gradient-to-b from-[#A4FF42] via-[#8FE635] to-[#7AD528] text-white font-bold text-sm px-6 py-3 w-full rounded-full border-4 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4),inset_0_2px_8px_rgba(255,255,255,0.3),inset_0_-2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6),inset_0_2px_12px_rgba(255,255,255,0.4),inset_0_-2px_12px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a
                  href="https://app.outieputt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)" }}
                >
                  PLAY NOW
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[500px] bg-black/95 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Search</DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    router.push(`/articles?search=${encodeURIComponent(searchQuery.trim())}`)
                    setIsSearchOpen(false)
                    setSearchQuery("")
                  }
                }}
                className="pl-10 bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-[#A4FF42]"
                autoFocus
              />
            </div>
            <Button
              onClick={() => {
                if (searchQuery.trim()) {
                  router.push(`/articles?search=${encodeURIComponent(searchQuery.trim())}`)
                  setIsSearchOpen(false)
                  setSearchQuery("")
                }
              }}
              className="bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold"
            >
              Search
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.header>
  )
}
