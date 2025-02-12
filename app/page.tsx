"use client"

import { SetStateAction, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import InfoSection from "@/components/info-section"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"


export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es")

  const handleLanguageChange = (newLang:SetStateAction<"es" | "en">) => {
    setLang(newLang)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onLanguageChange={handleLanguageChange} />
      <Hero lang={lang} onContactClick={scrollToContact} />
      <InfoSection lang={lang} />
      <HowItWorks lang={lang} />
      <Pricing lang={lang} />
      <Reviews lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}

