/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "next-themes"

interface NavbarProps {
  onLanguageChange: (newLang: "es" | "en") => void // Correct type for `onLanguageChange`
}
export default function Navbar({ onLanguageChange }:NavbarProps) {
  const [lang, setLang] = useState("es")
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es"
    setLang(newLang)
    onLanguageChange(newLang)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Pim Pam Fotos Logo"
            width={240}
            height={80}
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-xl font-medium transition-transform duration-200 hover:text-primary"
          >
            {lang === "es" ? "Inicio" : "Home"}
          </Link>
          <Link
            href="/services"
            className="text-xl font-medium transition-transform duration-200 hover:text-primary"
          >
            {lang === "es" ? "Servicios" : "Services"}
          </Link>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-xl font-medium transition-transform duration-200 hover:text-primary"
          >
            {lang === "es" ? "Contacto" : "Contact"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            className="h-12 w-12 p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XIcon /> 
            ) : (
              <MenuIcon  /> 
            )}
          </Button>
        </div>

        {/* Theme and Language Toggles */}
        <div className="hidden md:flex items-center space-x-2">
          <Toggle aria-label="Toggle language" pressed={lang === "en"} onPressedChange={toggleLanguage}>
            {lang === "es" ? "ES" : "EN"}
          </Toggle>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden ">
          <div className="container mx-auto flex flex-col items-center space-y-4 py-4 px-4 text-center">
            <Link
              href="/"
              className="text-sm font-medium transition-transform duration-200 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-transform duration-200 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {lang === "es" ? "Servicios" : "Services"}
            </Link>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                toggleMobileMenu()
              }}
              className="text-sm font-medium transition-transform duration-200 hover:text-primary"
            >
              {lang === "es" ? "Contacto" : "Contact"}
            </button>
            <div className="flex items-center space-x-2">
              <Toggle aria-label="Toggle language" pressed={lang === "en"} onPressedChange={toggleLanguage}>
                {lang === "es" ? "ES" : "EN"}
              </Toggle>
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}