"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-utils"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">COTRAFIMO</h1>
            <p className="text-xl text-foreground/70 mb-4 font-semibold">
              Consulting. Trading. Financement. Immobilier.
            </p>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Construire l'avenir avec expertise & engagement. Nous sommes votre partenaire de confiance pour les
              projets d'envergure en BTP, immobilier, logistique et conseil industriel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Nos services
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-primary text-primary rounded-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                Contactez-nous
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden"
          >
            <img
              src="/modern-building-construction.png"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
