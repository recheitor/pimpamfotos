"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface PhotocallsSectionProps {
  lang: string
}

const photocalls = [
  "/photocalls/e7fe99796826.jpg",
  "/photocalls/g7fe95b97e0e.jpg",
  "/photocalls/photobooth-3.jpg",
  "/photocalls/photocall-con-neones.jpg",
]

export default function PhotocallsSection({ lang }: PhotocallsSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {lang === "es" ? "NUESTROS PHOTOCALLS" : "OUR PHOTOCALLS"}
        </h2>
        <p className="text-center mb-8">
          {lang === "es"
            ? "Guirnaldas de luces, flores, telas sencillas, fondos coloridos y personalizados..."
            : "Light garlands, flowers, simple fabrics, colorful and customized backgrounds..."}
        </p>
        <div className="grid justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {photocalls.map((photocall, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-[400px] h-[300px] flex items-center justify-center">
                  <Image
                    src={photocall || "/placeholder.svg"}
                    alt={`Photocall ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    onClick={() => setSelectedImage(photocall)}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <Image
                  src={selectedImage || photocall}
                  alt={`Photocall ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}