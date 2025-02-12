interface ServicesHeroProps {
  lang: string
}

export default function ServicesHero({ lang }: ServicesHeroProps) {
  return (
    <section className="relative h-[200px] bg-gradient-to-r from-primary to-primary flex items-center justify-center text-white">
      <div className="md:px-0 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{lang === "es" ? "NUESTROS FOTOMATONES" : "OUR PHOTOBOOTHS"}</h1>
          <p className="text-xl mb-8">{lang === "es" ? "Elegantes y rápidos" : "Elegant and fast"}</p>
        </div>
      </div>  
    </section>
  )
}

