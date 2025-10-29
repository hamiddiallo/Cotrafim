"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Entreprise: ["À propos", "Carrières", "Presse", "Blog"],
    Services: ["BTP & Immobilier", "Logistique", "Conseil Industriel", "Financement"],
    Ressources: ["Documentation", "Support", "FAQ", "Contact"],
    Légal: ["Politique de confidentialité", "Conditions d'utilisation", "Mentions légales", "Cookies"],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-lg">COTRAFIMO</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour les projets d'envergure en BTP, immobilier, logistique et conseil
              industriel.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">© {currentYear} COTRAFIMO. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
