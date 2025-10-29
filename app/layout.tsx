import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COTRAFIMO - Consulting. Trading. Financement. Immobilier.",
  description:
    "COTRAFIMO: Expert en BTP, immobilier, logistique et conseil industriel. Construire l'avenir avec expertise et engagement.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
