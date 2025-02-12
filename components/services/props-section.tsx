"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropsSectionProps {
  lang: "es" | "en"
}

const props = [
  {
    image: "/carteles-scaled.jpg",
    title: { es: "Varios", en: "Various" },
  },
  {
    image: "/rockero-scaled.jpg",
    title: { es: "Guitarras", en: "Guitars" },
  },
  {
    image: "/tropical-scaled.jpg",
    title: { es: "Cabeza", en: "Head" },
  },
  {
    image: "/variado-1-scaled.jpg",
    title: { es: "Sombreros", en: "Hats" },
  },
]

export default function PropsSection({ lang }: PropsSectionProps) {
  const [currentProp, setCurrentProp] = useState(0)

  const nextProp = () => setCurrentProp((prev) => (prev + 1) % props.length)
  const prevProp = () => setCurrentProp((prev) => (prev - 1 + props.length) % props.length)

  useEffect(() => {
    const interval = setInterval(nextProp, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {lang === "es" ? "NUESTRO ATREZZO" : "OUR PROPS"}
        </h2>
        <p className="text-center mb-8 me-2 ms-2">
          {lang === "es"
            ? "Tenemos muchos objetos decorativos, sombreros, gafas, bocadillos photocall, etc... ¡echa un vistazo!"
            : "We have many decorative objects, hats, glasses, photocall speech bubbles, etc... take a look!"}
        </p>
        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProp}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="overflow-hidden h-[450px]"> {/* Increased height */}
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentProp * 100}%)` }}
            >
              {props.map((prop, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative h-[400px] flex items-center justify-center"> {/* Adjusted height */}
                    <Image
                      src={prop.image || "/placeholder.svg"}
                      alt={prop.title[lang]}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 bg-primary text-white p-2 rounded-tl-lg rounded-br-lg">
                      {prop.title[lang]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProp}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
