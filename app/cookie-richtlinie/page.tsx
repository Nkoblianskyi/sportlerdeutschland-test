import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie-Richtlinie</h1>
          <p className="text-xl text-gray-600">Letzte Aktualisierung: Januar 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was sind Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen.
              Sie helfen uns, Ihre Präferenzen zu speichern und Ihre Erfahrung auf unserer Website zu verbessern.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welche Cookies verwenden wir?</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-german-gold pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Notwendige Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Diese Cookies sind für den Betrieb der Website unerlässlich und können nicht deaktiviert werden.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cookie-Einwilligungsstatus</li>
                  <li>Sitzungs-IDs</li>
                  <li>Sicherheitstoken</li>
                </ul>
              </div>

              <div className="border-l-4 border-german-red pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Funktionale Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Spracheinstellungen</li>
                  <li>Bevorzugte Ansichten</li>
                  <li>Gespeicherte Filter</li>
                </ul>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Analyse-Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Google Analytics</li>
                  <li>Besucherstatistiken</li>
                  <li>Seitenaufrufe und Verweildauer</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Marketing-Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Affiliate-Tracking</li>
                  <li>Werbe-IDs</li>
                  <li>Conversion-Tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wie können Sie Cookies verwalten?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie können Ihre Cookie-Einstellungen jederzeit ändern. Die meisten Browser ermöglichen es Ihnen, Cookies
              zu blockieren oder zu löschen. Bitte beachten Sie, dass das Blockieren von Cookies die Funktionalität
              unserer Website beeinträchtigen kann.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Browser-Einstellungen:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Einstellungen → Datenschutz → Cookies blockieren
                </li>
                <li>
                  <strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Drittanbieter-Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Einige Cookies werden von Drittanbietern gesetzt, wenn Sie unsere Website besuchen:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Google Analytics (Analyse des Nutzerverhaltens)</li>
              <li>Affiliate-Partner (Tracking von Empfehlungen)</li>
              <li>Social Media Plugins (wenn eingebettet)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Ihre Rechte</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Sie haben das Recht, Ihre Einwilligung zur Verwendung von Cookies jederzeit zu widerrufen. Dies hat keinen
              Einfluss auf die Rechtmäßigkeit der Verarbeitung vor dem Widerruf.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:
              <br />
              <strong>E-Mail:</strong> datenschutz@sportlerdeutschland.com
            </p>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
