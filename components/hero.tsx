"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  lang: "es" | "en"
  onContactClick: () => void
}

const slides = {
  es: [
    {
      image: "/hero/87fe8e968bee-736x414.jpg",
      title: "Capturando momentos inolvidables",
      subtitle: "Especialistas en bodas",
      buttonText: "Reserva tu boda",
    },
    {
      image: "/hero/ftomaton4-736x414.jpg",
      title: "Eventos únicos, recuerdos duraderos",
      subtitle: "Expertos en eventos corporativos",
      buttonText: "Planifica tu evento",
    },
    {
      image: "/hero/img_20160725_112639-2-e1491502764516-736x414.jpg",
      title: "Tu día especial, nuestro enfoque",
      subtitle: "Bodas personalizadas",
      buttonText: "Consulta disponibilidad",
    },
    {
      image: "/hero/img-20190413-wa0012-736x414.jpg",
      title: "Capturando la esencia de tu marca",
      subtitle: "Fotografía de eventos empresariales",
      buttonText: "Solicita presupuesto",
    },
    {
      image: "/hero/proveedores-bodaplan-8642-736x414.jpg",
      title: "Amor en cada detalle",
      subtitle: "Bodas íntimas y grandes celebraciones",
      buttonText: "Descubre nuestros paquetes",
    }
  ],
  en: [
    {
      image: "/hero/87fe8e968bee-736x414.jpg",
      title: "Capturing unforgettable moments",
      subtitle: "Wedding specialists",
      buttonText: "Book your wedding",
    },
    {
      image: "/hero/ftomaton4-736x414.jpg",
      title: "Unique events, lasting memories",
      subtitle: "Corporate event experts",
      buttonText: "Plan your event",
    },
    {
      image: "/hero/img_20160725_112639-2-e1491502764516-736x414.jpg",
      title: "Your special day, our focus",
      subtitle: "Personalized weddings",
      buttonText: "Check availability",
    },
    {
      image: "/hero/img-20190413-wa0012-736x414.jpg",
      title: "Capturing your brand essence",
      subtitle: "Business event photography",
      buttonText: "Request a quote",
    },
    {
      image: "/hero/proveedores-bodaplan-8642-736x414.jpg",
      title: "Love in every detail",
      subtitle: "Intimate weddings and grand celebrations",
      buttonText: "Discover our packages",
    }
  ],
}

export default function Hero({ lang, onContactClick }:HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSlides = slides[lang]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % currentSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {currentSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Wedding or event photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
            {currentSlides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8">{currentSlides[currentSlide].subtitle}</p>
          <Button onClick={onContactClick}>{currentSlides[currentSlide].buttonText}</Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </section>
  )
}