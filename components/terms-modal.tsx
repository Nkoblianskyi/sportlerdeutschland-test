"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col">
        <div className="bg-gradient-to-r from-gray-800 to-black text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Allgemeine Geschäftsbedingungen</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Allgemeine Bedingungen</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Durch die Nutzung von Betting Best German Sites erklären Sie sich damit einverstanden, die folgenden
                Geschäftsbedingungen einzuhalten und an diese gebunden zu sein. Diese Bedingungen gelten für alle Nutzer
                unserer Website und Dienste.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Altersbeschränkungen</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Sie müssen mindestens 18 Jahre alt sein, um diese Website zu nutzen. Wir nehmen die Altersüberprüfung
                ernst und fördern verantwortungsvolle Glücksspielpraktiken. Wenn Sie unter 18 Jahre alt sind, verlassen
                Sie bitte sofort diese Website.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Verantwortungsvolles Spielen</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Wir setzen uns für die Förderung verantwortungsvollen Glücksspiels ein. Bitte denken Sie daran:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Spielen Sie nur mit Geld, das Sie sich leisten können zu verlieren</li>
                <li>Setzen Sie Zeit- und Ausgabenlimits, bevor Sie beginnen</li>
                <li>Jagen Sie niemals Ihren Verlusten hinterher</li>
                <li>Machen Sie regelmäßige Pausen vom Glücksspiel</li>
                <li>Suchen Sie Hilfe, wenn Glücksspiel zum Problem wird</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Informationsgenauigkeit</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Obwohl wir uns bemühen, genaue und aktuelle Informationen über Wettseiten, Boni und Aktionen
                bereitzustellen, können wir die Genauigkeit aller Inhalte nicht garantieren. Geschäftsbedingungen können
                sich ohne Vorankündigung ändern.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Links zu Drittanbietern</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Unsere Website enthält Links zu Wettseiten von Drittanbietern. Wir sind nicht verantwortlich für den
                Inhalt, die Bedingungen oder die Praktiken dieser externen Websites. Überprüfen Sie immer deren
                Geschäftsbedingungen vor der Nutzung.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Haftungsbeschränkung</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Betting Best German Sites haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus
                Ihrer Nutzung dieser Website oder der darin enthaltenen Informationen ergeben.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Hilfe & Unterstützung</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Wenn Sie Hilfe bei Glücksspielsucht benötigen, wenden Sie sich bitte an:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>
                  <strong>Bundeszentrale für gesundheitliche Aufklärung:</strong> www.bzga.de
                </li>
                <li>
                  <strong>Spielen mit Verantwortung:</strong> www.spielen-mit-verantwortung.de
                </li>
                <li>
                  <strong>Anonyme Spieler:</strong> www.anonyme-spieler.at
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Es gelten Wett- und AGB | Spielen Sie verantwortungsbewusst
          </p>
        </div>
      </div>
    </div>
  )
}
