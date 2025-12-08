"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  main: [
    { name: "Games", href: "#games" },
    { name: "About Us", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Support", href: "/contact" },
  ],
  external: [
    {
      name: "Outlawgames.app",
      href: "https://outlawgames.app",
      external: true,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Scrolling Text Banner */}
      <div className="py-8 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-6xl lg:text-8xl font-bold text-white/10 mx-8">
            OUTLAWS POWERED. GAMES PERFECTED.
          </span>
          <span className="text-6xl lg:text-8xl font-bold text-white/10 mx-8">
            OUTLAWS POWERED. GAMES PERFECTED.
          </span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/outlaw-20lime-20green-20logo-20.png"
                alt="Outlaw Games"
                width={50}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl">OUTLAW</span>
            </Link>
          </div>

          {/* Main Links */}
          <div>
            {footerLinks.main.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white hover:text-[#A4FF42] transition-colors mb-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* External Links */}
          <div>
            {footerLinks.external.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-[#A4FF42] transition-colors mb-3"
              >
                <span className="text-[#A4FF42]">↗</span> {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="font-semibold mb-4 text-white">FOLLOW US</p>
            <a
              href="https://linktr.ee/outlawgamefi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-[#A4FF42] transition-colors"
            >
              <span className="text-[#A4FF42]">↗</span> Linktree
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-center">
            <p className="text-white/60 text-sm">
              © 2025 - {new Date().getFullYear()} Outlaw Games. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
