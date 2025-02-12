"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ReviewsProps {
  lang: "es" | "en"
}
const reviews = {
  es: [
    {
      text: "Pim Pam Fotos hizo un trabajo increíble en nuestra boda. Las fotos son hermosas y capturaron perfectamente la alegría del día.",
      name: "María y Juan",
      date: "15/05/2023",
    },
    {
      text: "El fotomatón fue la estrella de nuestra fiesta de empresa. Todo el mundo se divirtió mucho y las fotos son geniales.",
      name: "Carlos, Eventos Corp.",
      date: "22/06/2023",
    },
    {
      text: "Profesionales, puntuales y con un ojo increíble para capturar momentos especiales. Totalmente recomendados.",
      name: "Ana",
      date: "10/07/2023",
    },
  ],
  en: [
    {
      text: "Pim Pam Fotos did an incredible job at our wedding. The photos are beautiful and perfectly captured the joy of the day.",
      name: "Mary and John",
      date: "05/15/2023",
    },
    {
      text: "The photo booth was the star of our company party. Everyone had a great time and the photos are fantastic.",
      name: "Charles, Events Corp.",
      date: "06/22/2023",
    },
    {
      text: "Professional, punctual, and with an incredible eye for capturing special moments. Highly recommended.",
      name: "Anna",
      date: "07/10/2023",
    },
  ],
}

export default function Reviews({ lang }:ReviewsProps) {
  const [currentReview, setCurrentReview] = useState(0)
  const currentReviews = reviews[lang]

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % currentReviews.length)
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + currentReviews.length) % currentReviews.length)

  useEffect(() => {
    const timer = setInterval(nextReview, 5000) // Change review every 5 seconds
    return () => clearInterval(timer)
  }, [nextReview])

  return (
    <section className="py-16 bg-gradient-to-r from-background to-muted">
      <div className="md:px-0 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
            {lang === "es" ? "Lo que dicen nuestros clientes" : "What our clients say"}
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out text-center"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {currentReviews.map((review, index) => (
                <Card key={index} className="w-full flex-shrink-0">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">{review.text}</p>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={prevReview}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={nextReview}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

