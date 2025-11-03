"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-md border-t-4 border-german-gold shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2">🍪 Cookie-Einstellungen</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und um Ihnen personalisierte
              Inhalte anzubieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.{" "}
              <Link href="/cookie-richtlinie" className="text-german-gold hover:underline">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={acceptCookies}
              className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-6 py-2"
            >
              Alle akzeptieren
            </Button>
            <Button
              onClick={declineCookies}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-6 py-2 bg-transparent"
            >
              Ablehnen
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
