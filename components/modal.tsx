"use client"
import { useState, useEffect } from "react"
import { X, Star, Trophy, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Modal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const modalShown = sessionStorage.getItem("welcome-modal-shown")
    if (!modalShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("welcome-modal-shown", "true")
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  const topSite = bettingSites[0]

  return (
    <div className="flex fixed inset-0 bg-black/90 backdrop-blur-md z-50 items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="fixed top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 z-10 w-8 h-8 sm:w-10 sm:h-10 p-0 rounded-full"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      <div className="w-full max-w-[350px] sm:max-w-2xl lg:max-w-3xl my-auto">
        <div className="text-center mb-3 sm:mb-6">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3">

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              Willkommen bei SportlerDeutschland!
            </h2>

          </div>
          <p className="text-gray-300 text-sm sm:text-lg">Entdecken Sie unseren Top-bewerteten Wettanbieter</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-german-gold/20 to-german-red/20 rounded-xl sm:rounded-2xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 sm:border-4 border-german-gold rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">

            <div className="bg-black p-4 sm:p-8 flex items-center justify-center min-h-[100px] sm:min-h-[140px]">
              <img
                src={topSite?.logo || "/placeholder.svg"}
                alt={topSite?.name || "Site"}
                className="h-16 sm:h-24 w-auto object-contain"
              />
            </div>

            <div className="p-4 sm:p-8 text-center">
              <div className="flex justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-7 sm:h-7 fill-german-gold text-german-gold" />
                ))}
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-german-gold mb-2 sm:mb-3">
                  {topSite?.bonus}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-white font-semibold">{topSite?.welcomeOffer}</div>
              </div>


              <Link href={topSite?.link || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-xl w-full shadow-lg hover:shadow-xl transition-all">
                  JETZT BONUS SICHERN →
                </Button>
              </Link>

              <p className="text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4 leading-relaxed">
                18+ | Nur für Neukunden | Es gelten die AGB des Anbieters | Spielen Sie verantwortungsbewusst
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
