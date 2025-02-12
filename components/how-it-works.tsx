import { Camera, Users, Tv, Printer } from "lucide-react"

const steps = {
  es: [
    {
      title: "FOTO",
      description: "Pulsando el botón verde se inicia la cuenta atrás para el disparo de la foto. PIM PAM FOTO",
      icon: Camera,
    },
    {
      title: "POSAR",
      description: "Los presentes se preparan para el disparo y disfrutan posando. ¡Empieza la diversión!",
      icon: Users,
    },
    {
      title: "RESULTADO",
      description:
        "Crece la expectación para ver cómo ha quedado la foto, que aparece al segundo en la pantalla de televisión.",
      icon: Tv,
    },
    {
      title: "IMPRIMIR",
      description: "Pasas por el cubo y te imprimes las fotos que quieras",
      icon: Printer,
    },
  ],
  en: [
    {
      title: "PHOTO",
      description: "Pressing the green button starts the countdown for the photo shoot. PIM PAM PHOTO",
      icon: Camera,
    },
    {
      title: "POSE",
      description: "The attendees prepare for the shot and enjoy posing. The fun begins!",
      icon: Users,
    },
    {
      title: "RESULT",
      description: "Excitement grows to see how the photo turned out, which appears instantly on the TV screen.",
      icon: Tv,
    },
    {
      title: "PRINT",
      description: "You go to the booth and print the photos you want",
      icon: Printer,
    },
  ],
}

export default function HowItWorks({ lang }) {
  const currentSteps = steps[lang]

  return (
    <section className="py-16 bg-gradient-to-r from-background to-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {lang === "es" ? "¿CÓMO FUNCIONA?" : "HOW DOES IT WORK?"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {step.icon && <step.icon size={64} className="text-primary" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

