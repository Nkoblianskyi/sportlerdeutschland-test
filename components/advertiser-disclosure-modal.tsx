"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col">
        <div className="bg-gradient-to-r from-gray-800 to-black text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Werbehinweis</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Wie wir Geld verdienen</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Betting Best German Sites ist eine unabhängige Vergleichswebsite, die Nutzern hilft, die besten
                Wettanbieter in Deutschland zu finden. Wir können eine Vergütung erhalten, wenn Sie auf Links zu
                Wettseiten klicken, die auf unserer Website vorgestellt werden.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Unser Engagement für Sie</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Diese Vergütung beeinflusst nicht unsere Rankings, Bewertungen oder Empfehlungen. Unser Redaktionsteam
                behält vollständige Unabhängigkeit bei der Bewertung von Wettseiten basierend auf Faktoren wie:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Lizenzierung und Regulierung</li>
                <li>Sicherheits- und Schutzmaßnahmen</li>
                <li>Wettquoten und Märkte</li>
                <li>Willkommensboni und Aktionen</li>
                <li>Kundenservice-Qualität</li>
                <li>Zahlungsmethoden und Auszahlungsgeschwindigkeiten</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Transparenz</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Wir glauben an vollständige Transparenz gegenüber unseren Nutzern. Alle auf unserer Plattform
                vorgestellten Wettseiten sind klar gekennzeichnet, und wir empfehlen nur Betreiber, die in Deutschland
                oder anderen seriösen Gerichtsbarkeiten lizenziert und reguliert sind.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Ihre Verantwortung</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Obwohl wir uns bemühen, genaue und aktuelle Informationen bereitzustellen, liegt es in Ihrer
                Verantwortung, alle Geschäftsbedingungen direkt beim Wettanbieter zu überprüfen, bevor Sie Wetten
                platzieren. Spielen Sie immer verantwortungsbewusst und innerhalb Ihrer Möglichkeiten.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Nur deutsche Spieler | Glücksspiel kann süchtig machen — Spielen Sie sicher.
          </p>
        </div>
      </div>
    </div>
  )
}
