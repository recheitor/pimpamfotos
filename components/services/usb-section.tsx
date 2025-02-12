"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UsbSectionProps {
  lang: string
}

const usbs = [
  "/usb/sam_1873-o66cv6b97clr9ffet7l72wbkr2n9tbzd23xep1iwpo.jpg",
  "/usb/sam_1889-o66cnqf93kex98roea214ur7dhmtmf1mikwgil945w.jpg",
]

export default function UsbSection({ lang }: UsbSectionProps) {
  const [currentUsb, setCurrentUsb] = useState(0)

  const nextUsb = () => setCurrentUsb((prev) => (prev + 1) % usbs.length)
  const prevUsb = () => setCurrentUsb((prev) => (prev - 1 + usbs.length) % usbs.length)

  useEffect(() => {
    const interval = setInterval(nextUsb, 3000) // Auto-slide every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {lang === "es" ? "NUESTROS PEN DRIVE" : "OUR USB DRIVES"}
        </h2>
        <p className="text-center mb-8">
          {lang === "es" ? "Usb de madera con grabado PIM PAM fotos" : "Wooden USB with PIM PAM photos engraving"}
        </p>
        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevUsb}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="overflow-hidden h-[400px]"> {/* Adjusted height */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentUsb * 100}%)` }}
            >
              {usbs.map((usb, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative h-[350px] flex items-center justify-center"> {/* Adjusted height */}
                    <Image
                      src={usb || "/placeholder.svg"}
                      alt={`USB ${index + 1}`}
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
            onClick={nextUsb}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
