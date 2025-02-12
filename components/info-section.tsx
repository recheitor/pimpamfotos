interface InfoProps {
  lang: "es" | "en"
}

export default function InfoSection({ lang }:InfoProps) {
  return (
    <section id="services" className="py-16 bg-gradient-to-r from-muted to-muted/50">
      <div className="md:px-0 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
            {lang === "es" ? "DIVERSIÓN CON UN BOTÓN" : "FUN WITH A BUTTON"}
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            {lang === "es"
              ? "El alto nivel de calidad de nuestras fotografías nos enorgullece. Le proponemos una muestra de nuestro trabajo en la galería de imágenes. En Pim Pam Fotos empleamos tecnología y equipos de última generación para obtener imágenes nítidas de excelente calidad."
              : "We take pride in the high quality of our photographs. We invite you to view a sample of our work in the image gallery. At Pim Pam Fotos, we use cutting-edge technology and equipment to obtain sharp, excellent quality images."}
          </p>
        </div>
      </div>
    </section>
  )
}

