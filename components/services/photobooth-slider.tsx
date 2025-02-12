/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhotoboothSliderProps {
  lang: string
}

const slides = {
  es: [
    {
      image: "/fotomaton-blanco1-recortado.png",
      title: "MÁQUINA BLANCA VINILABLE",
      description: (
        <>
          <p>Esta máquina es una versión mejorada. La novedad que ofrece esta versión es la de un nuevo aspecto, haciendo que su montaje resulte más rápido y sencillo.</p>
          <p>Sus características principales son:</p>
          <ul className="list-disc list-inside">
            <li>Cámara profesional Réflex, que hace innecesario el uso de focos y aporta una calidad de imagen muy superior a la webcam.</li>
            <li>Sistema en dos cuerpos. Que logra que el servicio de fotografía y el de impresión se puedan hacer de forma simultánea.</li>
            <li>Pantalla de TV para visionar cómo quedan las fotos.</li>
            <li>Impresión rápida de fotografías en diferentes formatos, incluyendo tiras.</li>
            <li>Posibilidad de usar fondos con chroma key.</li>
            <li>Impresión de las fotos en tonos sepias o B/N.</li>
            <li>Opción de disparo múltiple.</li>
            <li>Personalización de las fotos.</li>
            <li>Personalización de la propia máquina con vinilos.</li>
            <li>Descarga instantánea de fotografías a través de USB.</li>
          </ul>
        </>
      ),
    },
    {
      image: "/fotomaton-negro1.png",
      title: "MÁQUINA RETRO",
      description: (
        <>
          <p>Esta máquina cuenta con un aspecto bastante diferente con respecto a la máquina blanca vinilable.</p>
          <p>Cuenta con un color plateado en la barra de sujeción de cámara y televisión.</p>
          <p>La televisión sigue siendo negra como en el resto de máquinas pero el cuerpo en el que se encuentra la pantalla táctil y la impresora es de un color negro bastante elegante. Este cuerpo tiene un estilo retro muy llamativo.</p>
          <p>Las características en cuanto a rendimiento y posibilidades de impresión y servicios es exactamente igual a la máquina blanca vinilable, sólo que con otro aspecto.</p>
        </>
      ),
    }
  ],
  en: [
    {
      image: "/fotomaton-blanco1-recortado.png",
      title: "WHITE VINYL MACHINE",
      description: (
        <>
          <p>This machine is an improved version. The novelty of this version is its new appearance, making its assembly faster and easier.</p>
          <p>Its main features are:</p>
          <ul className="list-disc list-inside">
            <li>Professional Reflex camera, eliminating the need for spotlights and providing superior image quality compared to a webcam.</li>
            <li>Two-body system. This allows photography and printing services to be performed simultaneously.</li>
            <li>TV screen to preview how the photos will look.</li>
            <li>Fast printing of photos in different formats, including strips.</li>
            <li>Option to use chroma key backgrounds.</li>
            <li>Printing photos in sepia or black and white tones.</li>
            <li>Multiple shot option.</li>
            <li>Photo customization.</li>
            <li>Customization of the machine itself with vinyl.</li>
            <li>Instant download of photos via USB.</li>
          </ul>
        </>
      ),
    },
    {
      image: "/fotomaton-negro1.png",
      title: "RETRO MACHINE",
      description: (
        <>
          <p>This machine has a quite different appearance compared to the white vinyl machine.</p>
          <p>It features a silver color on the camera and TV support bar.</p>
          <p>The TV remains black, as in the other machines, but the body containing the touch screen and printer is a very elegant black. This body has a very striking retro style.</p>
          <p>In terms of performance and printing and service possibilities, it is exactly the same as the white vinyl machine, just with a different look.</p>
        </>
      ),
    },
    {
      image: "/fotomaton-madera-1-recortado.png",
      title: "VINTAGE WOOD MACHINE",
      description: (
        <>
          <p>This machine, manufactured in-house, is our "vintage" machine with its own software.</p>
          <p>New features:</p>
          <ul className="list-disc list-inside">
            <li>Adjustable tripod with camera and TV, making the machine more adaptable.</li>
            <li>Real-time playback on the TV of the image captured by the camera.</li>
            <li>Print reel capacity of up to 700 prints.</li>
            <li>Vintage aesthetics.</li>
            <li>Ability to create photo compositions without consecutive shots.</li>
            <li>Option to zoom in on images before printing.</li>
            <li>System with a more agile interface, reducing printing times.</li>
            <li>Email delivery of photos.</li>
          </ul>
          <p>Features that differentiate it from the others:</p>
          <ul className="list-disc list-inside">
            <li>Printing in strip format (under modification).</li>
            <li>Multiple shots.</li>
            <li>Printing photos in sepia and black and white tones.</li>
            <li>Ability to customize the machine's appearance.</li>
          </ul>
        </>
      ),
    },
  ],
}

export default function PhotoboothSlider({ lang }: PhotoboothSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSlides = slides[lang as keyof typeof slides]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % currentSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length)

  return (
    <section className="py-16 bg-muted">
      <div className="md:px-0 px-4">
        <div className="container mx-auto">
          <div className="flex flex-row items-center">
            <Button variant="ghost" size="icon" onClick={prevSlide} className="mr-4 sm:mr-0 sm:mb-4">
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <div className="flex-1 flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 flex justify-center h-[500px]"> {/* Fixed height */}
                <Image
                  src={currentSlides[currentSlide].image || "/placeholder.svg"}
                  alt={currentSlides[currentSlide].title}
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg object-cover w-full h-full" // Ensure image fills the container
                />
              </div>
              <div className="w-full sm:w-2/3 pl-8 flex flex-col justify-center hidden sm:block">
                <h2 className="text-3xl font-bold mb-4">{currentSlides[currentSlide].title}</h2>
                <div className="text-sm">{currentSlides[currentSlide].description}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={nextSlide} className="ml-4 sm:ml-0 sm:mt-4">
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}