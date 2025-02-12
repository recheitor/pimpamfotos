import { Afacad } from "next/font/google" // Correct import for Afacad
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type React from "react" // Added import for React

// Configure the Afacad font with the desired variant (e.g., "flux")
const afacad = Afacad({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Specify the font weight (e.g., 400 for regular, 700 for bold)
  style: "normal", // Specify the font style (e.g., normal, italic)
  variable: "--font-afacad", // Optional: Define a CSS variable for the font
})

export const metadata = {
  title: "Pim Pam Fotos - Fotografía de Bodas y Eventos",
  description: "Capturando momentos inolvidables en bodas y eventos",
  icons: {
    icon: [
      { url: "/favicon.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={afacad.className}> {/* Apply the font class */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}