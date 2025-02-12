"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import ServicesHero from "@/components/services/hero"
import PhotoboothSlider from "@/components/services/photobooth-slider"
import PropsSection from "@/components/services/props-section"
import AlbumsSection from "@/components/services/albums-section"
import TemplatesSection from "@/components/services/templates-section"
import NeonSection from "@/components/services/neon-section"
import UsbSection from "@/components/services/usb-section"
import PhotocallsSection from "@/components/services/photocalls-section"
import Contact from "@/components/contact"

export default function ServicesPage() {
  const [lang, setLang] = useState<"es" | "en">("es")

  const handleLanguageChange = (newLang: "es" | "en") => {
    setLang(newLang)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onLanguageChange={handleLanguageChange} />
      <ServicesHero lang={lang} />
      <PhotoboothSlider lang={lang} />
      <PropsSection lang={lang} />
      <AlbumsSection lang={lang} />
      <TemplatesSection lang={lang} />
      <NeonSection lang={lang} />
      <UsbSection lang={lang} />
      <PhotocallsSection lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}

