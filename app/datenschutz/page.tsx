import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-xl text-gray-600">Letzte Aktualisierung: Januar 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>SportlerDeutschland.com</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>E-Mail:</strong> datenschutz@sportlerdeutschland.com
              </p>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-german-gold pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Lock className="inline w-5 h-5 mr-2" />
                  Automatische Datenerfassung
                </h3>
                <p className="text-gray-700 mb-2">
                  Beim Besuch dieser Website werden automatisch Informationen erfasst:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Browser-Typ und Version</li>
                  <li>Betriebssystem</li>
                  <li>Referrer URL (zuvor besuchte Seite)</li>
                  <li>Übertragene Datenmenge</li>
                </ul>
              </div>

              <div className="border-l-4 border-german-red pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Eye className="inline w-5 h-5 mr-2" />
                  Cookies und Tracking
                </h3>
                <p className="text-gray-700 mb-2">
                  Wir verwenden Cookies und ähnliche Technologien. Details finden Sie in unserer{" "}
                  <Link href="/cookie-richtlinie" className="text-german-gold hover:underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <FileText className="inline w-5 h-5 mr-2" />
                  Kontaktformulare
                </h3>
                <p className="text-gray-700 mb-2">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben gespeichert, um Ihre
                  Anfrage zu bearbeiten.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Analyse-Tools und Werbung</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Google Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website nutzt Google Analytics zur Analyse des Nutzerverhaltens. Die durch Cookies erzeugten
              Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wir haben die IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
              der EU oder in anderen Vertragsstaaten des EWR gekürzt wird.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Affiliate-Marketing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SportlerDeutschland.com nimmt an Affiliate-Programmen teil. Wenn Sie auf einen Link zu einem Wettanbieter
              klicken, wird ein Cookie gesetzt, um die Vermittlung nachzuverfolgen. Diese Cookies enthalten keine
              personenbezogenen Daten.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen
              </li>
              <li>
                <strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen
              </li>
              <li>
                <strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen
              </li>
              <li>
                <strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen
              </li>
              <li>
                <strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem strukturierten Format erhalten
              </li>
              <li>
                <strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Datensicherheit</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir verwenden SSL/TLS-Verschlüsselung für die Datenübertragung. Alle Daten werden auf sicheren Servern in
              Deutschland gespeichert und durch technische und organisatorische Maßnahmen geschützt.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Speicherdauer</h2>
            <p className="text-gray-700 leading-relaxed">
              Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder
              gesetzliche Aufbewahrungsfristen bestehen. Nach Ablauf dieser Fristen werden die Daten routinemäßig
              gelöscht.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Kontakt zum Datenschutzbeauftragten</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Bei Fragen zum Datenschutz wenden Sie sich bitte an: datenschutz@sportlerdeutschland.com
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
