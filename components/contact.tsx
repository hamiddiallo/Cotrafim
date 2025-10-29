"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Téléphone invalide"),
  subject: z.string().min(5, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log("Form data:", data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const locations = [
    {
      country: "Guinée",
      city: "Conakry",
      address: "Quartier Kaloum, Conakry",
      phone: "+224 622 123 456",
      email: "guinea@cotrafimo.com",
      hours: "Lun - Ven: 8h - 18h",
    },
    {
      country: "Émirats Arabes Unis",
      city: "Dubaï",
      address: "Business Bay, Dubaï",
      phone: "+971 4 123 4567",
      email: "uae@cotrafimo.com",
      hours: "Lun - Ven: 8h - 18h",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contactez-nous</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour discuter de vos projets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-primary/5 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{location.country}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">{location.city}</p>
                    <p className="text-foreground/60">{location.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-accent flex-shrink-0" size={20} />
                  <p className="text-foreground/60">{location.phone}</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-accent flex-shrink-0" size={20} />
                  <p className="text-foreground/60">{location.email}</p>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-accent flex-shrink-0" size={20} />
                  <p className="text-foreground/60">{location.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 bg-primary/5 rounded-lg border border-border"
        >
          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
              <p className="text-accent font-semibold">Merci ! Votre message a été envoyé avec succès.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nom</label>
                <input
                  {...register("name")}
                  type="text"
                  className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Téléphone</label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+224 ..."
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Sujet</label>
                <input
                  {...register("subject")}
                  type="text"
                  className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Sujet de votre demande"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Votre message..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
