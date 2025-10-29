"use client"

import { motion } from "framer-motion"
import { Building2, Truck, Lightbulb, DollarSign } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-utils"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "BTP & Immobilier",
      description: "Construction, rénovation et développement immobilier de projets résidentiels et commerciaux.",
    },
    {
      icon: Truck,
      title: "Logistique",
      description: "Solutions logistiques complètes : transport, stockage et gestion de chaîne d'approvisionnement.",
    },
    {
      icon: Lightbulb,
      title: "Conseil Industriel",
      description: "Expertise en optimisation des processus, stratégie industrielle et transformation digitale.",
    },
    {
      icon: DollarSign,
      title: "Mobilisation Financement",
      description: "Structuration et mobilisation de financements pour vos projets d'envergure.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Une gamme complète de services pour accompagner votre croissance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-accent font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all"
                >
                  En savoir plus →
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
