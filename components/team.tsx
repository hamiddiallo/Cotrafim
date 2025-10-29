"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Ahmed Diallo",
      role: "Directeur Général",
      specialty: "Stratégie & Développement",
      image: "/professional-man-portrait.png",
    },
    {
      name: "Fatimatou Diallo",
      role: "Directrice Opérations",
      specialty: "Gestion de Projets",
      image: "/professional-woman-portrait.png",
    },
    {
      name: "Hamid Diallo",
      role: "Informaticien de l'Entreprise",
      specialty: "BTP & Infrastructure",
      image: "/professional-man-portrait.png",
    },
    {
      name: "Aïssatou Bah",
      role: "Directrice Financière",
      specialty: "Finance & Mobilisation",
      image: "/professional-woman-portrait.png",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Notre Équipe</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Des experts passionnés au service de votre succès
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                  <button className="p-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-accent font-semibold text-sm mb-1">{member.role}</p>
              <p className="text-foreground/60 text-sm">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
