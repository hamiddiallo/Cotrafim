"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const values = [
    { title: "Expertise", description: "Décennies d'expérience dans nos domaines" },
    { title: "Fiabilité", description: "Respect des engagements et délais" },
    { title: "Innovation", description: "Solutions modernes et durables" },
    { title: "Partenariat", description: "Relation de confiance long terme" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            COTRAFIMO est un groupe international opérant en Guinée et aux Émirats Arabes Unis, spécialisé dans le BTP,
            l'immobilier, la logistique et le conseil industriel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Notre Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fournir des solutions intégrées et innovantes qui transforment les défis en opportunités, en mettant
                l'accent sur la qualité, la durabilité et la satisfaction client.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Notre Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                Être le partenaire de référence pour les projets d'envergure en Afrique de l'Ouest et au Moyen-Orient,
                reconnu pour notre excellence opérationnelle et notre engagement envers la communauté.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-primary/5 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <CheckCircle2 className="text-accent mb-3" size={24} />
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-foreground/60">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
