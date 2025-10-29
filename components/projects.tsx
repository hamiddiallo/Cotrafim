"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Complexe Résidentiel Premium",
      category: "immobilier",
      image: "/luxury-residential-building.png",
      description: "Développement d'un complexe résidentiel de 200 unités aux normes internationales",
    },
    {
      id: 2,
      title: "Centre Logistique Régional",
      category: "logistique",
      image: "/logistics-warehouse.png",
      description: "Construction d'un centre logistique de 50,000 m² avec technologies modernes",
    },
    {
      id: 3,
      title: "Rénovation Usine Textile",
      category: "btp",
      image: "/industrial-factory.jpg",
      description: "Rénovation complète et modernisation d'une usine textile",
    },
    {
      id: 4,
      title: "Centre Commercial Moderne",
      category: "immobilier",
      image: "/modern-shopping-mall.jpg",
      description: "Construction d'un centre commercial de 80,000 m² avec espaces premium",
    },
    {
      id: 5,
      title: "Optimisation Chaîne Logistique",
      category: "conseil",
      image: "/supply-chain-optimization.png",
      description: "Audit et optimisation de la chaîne logistique pour réduction de 30% des coûts",
    },
    {
      id: 6,
      title: "Parc Industriel Intégré",
      category: "btp",
      image: "/industrial-park.png",
      description: "Développement d'un parc industriel multi-secteurs de 150 hectares",
    },
  ]

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "btp", label: "BTP" },
    { id: "immobilier", label: "Immobilier" },
    { id: "logistique", label: "Logistique" },
    { id: "conseil", label: "Conseil" },
  ]

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projets Réalisés</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Découvrez nos réalisations et l'expertise que nous apportons à chaque projet
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-sm font-semibold transition-all ${
                filter === cat.id ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg border border-border hover:border-accent transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm text-accent font-semibold mb-2">{project.category.toUpperCase()}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
