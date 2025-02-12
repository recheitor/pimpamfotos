import Image from "next/image"

interface TemplatesSectionProps {
  lang: string
}

const templates = [
  "/plantillas/sam_1925-1.jpg",
  "/plantillas/sam_1930-1.jpg",
  "/plantillas/sam_1934-1.jpg",
  "/plantillas/sam_1936-1.jpg",
  "/plantillas/sam_1939-1.jpg",
  "/plantillas/sam_1947-1.jpg",
]

export default function TemplatesSection({ lang }: TemplatesSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {lang === "es" ? "NUESTRAS PLANTILLAS DE FOTOS" : "OUR PHOTO TEMPLATES"}
        </h2>
        <p className="text-center mb-8">
          {lang === "es"
            ? "Impresión de fotos con cualquier logo o frase y en diferentes formatos"
            : "Photo printing with any logo or phrase and in different formats"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={template || "/placeholder.svg"}
                alt={`Template ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

