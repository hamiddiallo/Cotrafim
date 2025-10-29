"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/scroll-utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Accueil", href: "#home", action: () => scrollToSection("home") },
    { label: "À propos", href: "#about", action: () => scrollToSection("about") },
    { label: "Services", href: "#services", action: () => scrollToSection("services") },
    { label: "Projets", href: "#projects", action: () => scrollToSection("projects") },
    { label: "Équipe", href: "#team", action: () => scrollToSection("team") },
    { label: "Contact", href: "#contact", action: () => scrollToSection("contact") },
  ]

  const handleMenuClick = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">COTRAFIMO</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Rendez-vous
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-border"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.action)}
                className="block w-full text-left py-2 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleMenuClick(() => scrollToSection("contact"))}
              className="w-full mt-4 px-6 py-2 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Rendez-vous
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
