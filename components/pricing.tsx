import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingProps {
  lang: "es" | "en"
}
const pricingPlans = {
  es: [
    {
      name: "Básico",
      price: "€330 + IVA",
      features: ["2 horas de cobertura", "Fotos e impresiones ilimitadas", "Operario todo el evento"],
    },
    {
      name: "Estándar",
      price: "€440 + IVA",
      features: ["3 horas de cobertura", "Fotos e impresiones ilimitadas", "Operario todo el evento", "Álbum incluido", "USB incluido"],
    },
    {
      name: "Profesional",
      price: "€500 + IVA",
      features: ["4 horas de cobertura", "Fotos e impresiones ilimitadas", "Operario todo el evento", "Álbum incluido", "USB incluido"],
    },
  ],
  en: [
    {
      name: "Basic",
      price: "€330 + VAT",
      features: ["2 hours of coverage", "Unlimited photos and prints", "Attendant throughout the event"],
    },
    {
      name: "Standard",
      price: "€440 + VAT",
      features: ["3 hours of coverage", "Unlimited photos and prints", "Attendant throughout the event", "Album included", "USB included"],
    },
    {
      name: "Professional",
      price: "€500 + VAT",
      features: ["4 hours of coverage", "Unlimited photos and prints", "Attendant throughout the event", "Album included", "USB included"],
    },
  ],
};

export default function Pricing({ lang }:PricingProps) {
  const currentPlans = pricingPlans[lang]

  return (
    <section className="py-16 bg-gradient-to-r from-muted to-muted/50">
      <div className="md:px-0 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
            {lang === "es" ? "Nuestros Precios" : "Our Prices"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {currentPlans.map((plan, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

