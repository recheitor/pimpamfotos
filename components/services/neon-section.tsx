"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NeonSectionProps {
  lang: string
}

const neons = [
  "/neones/beso.png",
  "/neones/corazon-oamarillo-mas-peque.jpg",
  "/neones/corazon-rojo-mas-peque.jpg",
  "/neones/delfin-mas-peque.jpg",
  "/neones/estrella-mas-peque.jpg",
  "/neones/love-mas-pequerojo.jpg",
  "/neones/palmeramas-peque.jpg",
  "/neones/unicaornio-mas-peque.jpg",
]

export default function NeonSection({ lang }: NeonSectionProps) {
  const [currentNeon, setCurrentNeon] = useState(0)

  const nextNeon = () => setCurrentNeon((prev) => (prev + 1) % neons.length)
  const prevNeon = () => setCurrentNeon((prev) => (prev - 1 + neons.length) % neons.length)

  useEffect(() => {
    const interval = setInterval(nextNeon, 3000) // Auto-slide every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{lang === "es" ? "NUESTROS NEONES" : "OUR NEONS"}</h2>
        <p className="text-center mb-8">
          {lang === "es"
            ? "Ilumina tus fotos con nuestras luces de fantasía"
            : "Light up your photos with our fantasy lights"}
        </p>
        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevNeon}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="overflow-hidden h-[450px]"> {/* Increased height */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentNeon * 100}%)` }}
            >
              {neons.map((neon, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative h-[400px] flex items-center justify-center"> {/* Adjusted height */}
                    <Image
                      src={neon || "/placeholder.svg"}
                      alt={`Neon ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextNeon}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
