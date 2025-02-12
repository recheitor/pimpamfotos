import Image from "next/image"

interface AlbumsSectionProps {
  lang: string
}

const albums = [
  "/albumes/hojas-blancas-album.jpg",
  "/albumes/hojas-negras-album.jpg",
  "/albumes/imagen-album-portada.jpg",
  "/albumes/sam_1853tt.jpg",
  "/albumes/sam_1898.jpg",
  "/albumes/sam_1913-1.jpg"
]

export default function AlbumsSection({ lang }: AlbumsSectionProps) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{lang === "es" ? "NUESTROS ÁLBUMES" : "OUR ALBUMS"}</h2>
        <p className="text-center mb-8">
          {lang === "es"
            ? "Escribir dedicatorias, pegar fotos... ¡lo que se te ocurra!"
            : "Write dedications, stick photos... whatever you can think of!"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {albums.map((album, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={album || "/placeholder.svg"}
                alt={`Album ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

