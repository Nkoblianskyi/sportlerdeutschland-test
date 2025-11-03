import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Shield, Award } from "lucide-react"

export default function AboutUsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Über </span>
            <span className="text-german-red">Sportler</span>
            <span className="text-german-gold">Deutschland</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ihre vertrauenswürdige Quelle für Sportwetten-Vergleiche in Deutschland
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wer wir sind</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SportlerDeutschland.com ist eine unabhängige Vergleichsplattform für Sportwetten in Deutschland. Seit
              unserer Gründung haben wir es uns zur Aufgabe gemacht, deutschen Sportwettenfans dabei zu helfen, die
              besten und sichersten Wettanbieter zu finden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unser Team besteht aus erfahrenen Sportwetten-Experten, die den deutschen Markt genau kennen und
              verstehen, worauf es bei der Auswahl eines Wettanbieters ankommt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-german-gold/10 to-german-red/10 rounded-xl p-6 border-2 border-german-gold/30">
              <Target className="w-12 h-12 text-german-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unsere Mission</h3>
              <p className="text-gray-700">
                Wir möchten Transparenz in den deutschen Sportwetten-Markt bringen und Spielern helfen, informierte
                Entscheidungen zu treffen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-german-red/10 to-black/10 rounded-xl p-6 border-2 border-german-red/30">
              <Shield className="w-12 h-12 text-german-red mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sicherheit zuerst</h3>
              <p className="text-gray-700">
                Wir listen nur Anbieter mit gültiger deutscher Lizenz und setzen uns für verantwortungsvolles Spielen
                ein.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was wir tun</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-german-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Unabhängige Bewertungen:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Wir testen und bewerten Wettanbieter nach strengen Kriterien wie Lizenzierung, Quotenqualität,
                    Zahlungsmethoden und Kundenservice.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-german-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Aktuelle Informationen:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Wir halten unsere Inhalte stets aktuell und informieren über neue Anbieter, Bonusangebote und
                    Marktentwicklungen.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-german-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Aufklärung:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Wir informieren über verantwortungsvolles Spielen und bieten Ressourcen für Spieler, die Hilfe
                    benötigen.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg p-8 text-white mb-8">
            <h2 className="text-2xl text-white font-bold mb-4">Unsere Werte</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-german-gold font-bold mb-2">Transparenz</h3>
                <p className="text-gray-300 text-sm">
                  Wir legen offen, wie wir arbeiten und wie wir unsere Bewertungen erstellen.
                </p>
              </div>
              <div>
                <h3 className="text-german-gold font-bold mb-2">Unabhängigkeit</h3>
                <p className="text-gray-300 text-sm">
                  Unsere Bewertungen sind objektiv und werden nicht von Anbietern beeinflusst.
                </p>
              </div>
              <div>
                <h3 className="text-german-gold font-bold mb-2">Verantwortung</h3>
                <p className="text-gray-300 text-sm">
                  Wir setzen uns aktiv für Spielerschutz und verantwortungsvolles Spielen ein.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-lg font-bold text-red-900 mb-2">Wichtiger Hinweis</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              SportlerDeutschland.com ist eine Vergleichsplattform und kein Wettanbieter. Wir erhalten möglicherweise
              Provisionen von den auf dieser Website beworbenen Anbietern. Dies beeinflusst jedoch nicht unsere
              Bewertungen oder Rankings, die ausschließlich auf objektiven Kriterien basieren.
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
