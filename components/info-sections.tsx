"use client"

import Link from "next/link"
import { ShieldAlert, Ban } from "lucide-react"

export function InfoSections() {
  return (
    <div className="mt-16 max-w-[1300px] mx-auto">
      <section className="relative rounded-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-german-red/90 to-black/90"></div>

        <div className="relative z-10 px-4 py-6 text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldAlert className="w-8 h-8 text-german-gold" />
            <h2 className="text-2xl font-bold">Selbstsperre (OASIS)</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-center leading-relaxed">
              OASIS ist die zentrale Sperrdatei für Online-Glücksspiele in Deutschland. Wenn Sie sich selbst sperren
              möchten, werden Sie bundesweit bei allen lizenzierten Anbietern gesperrt.
            </p>

            <div className="bg-black/40 rounded-lg p-4 space-y-3">
              <h3 className="font-bold text-lg text-german-gold flex items-center gap-2">
                <Ban className="w-5 h-5" />
                So funktioniert die OASIS-Sperre:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Besuchen Sie die offizielle OASIS-Website</li>
                <li>Registrieren Sie sich mit Ihren persönlichen Daten</li>
                <li>Wählen Sie die Sperrdauer (mindestens 3 Monate)</li>
                <li>Die Sperre gilt sofort für alle deutschen Online-Glücksspielanbieter</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://www.oasisscan.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-german-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center gap-2"
              >
                <ShieldAlert className="w-5 h-5" />
                Zur OASIS-Selbstsperre
              </Link>

              <Link
                href="/verantwortungsvolles-spielen"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors border border-white/30"
              >
                Mehr Informationen
              </Link>
            </div>

            <p className="text-xs text-center text-gray-300">
              Die Selbstsperre ist kostenlos und kann jederzeit beantragt werden. Nach Ablauf der Sperrfrist können Sie
              eine Entsperrung beantragen.
            </p>
          </div>
        </div>
      </section>

      <section className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 px-4 py-6 lg:py-8 text-white flex flex-col items-center text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-german-gold">
            Ihr Leitfaden für legale Sportwetten in Deutschland
          </h2>

          <div className="space-y-4 w-full">
            <p className="text-gray-200 leading-relaxed text-sm">
              Seit dem neuen Glücksspielstaatsvertrag 2021 sind Online-Sportwetten in Deutschland vollständig reguliert.
              Wir helfen Ihnen, die besten lizenzierten Anbieter zu finden, die höchste Sicherheitsstandards erfüllen
              und attraktive Wettmöglichkeiten bieten.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">
                Was macht einen guten deutschen Wettanbieter aus?
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Ein seriöser Sportwetten-Anbieter in Deutschland muss über eine gültige Lizenz der Gemeinsamen
                Glücksspielbehörde der Länder (GGL) verfügen. Darüber hinaus sollte er faire Quoten, eine breite Auswahl
                an Sportarten, sichere Zahlungsmethoden und einen deutschsprachigen Kundenservice bieten.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Unsere Testkriterien</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Wir bewerten jeden Anbieter nach strengen Kriterien: Lizenzierung und Sicherheit, Quotenqualität,
                Wettangebot (Fußball, Tennis, Basketball, Eishockey etc.), Live-Wetten und Livestreams,
                Zahlungsmethoden, Bonusangebote, mobile App-Qualität und Kundenservice. Nur Anbieter, die in allen
                Bereichen überzeugen, werden von uns empfohlen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Beliebte Sportarten für Wetten</h3>
              <p className="text-gray-200 leading-relaxed text-sm mb-2">
                Deutsche Wetter bevorzugen vor allem Fußball-Wetten, insbesondere auf die Bundesliga, Champions League
                und internationale Turniere. Auch Tennis, Basketball (NBA und BBL), Eishockey (DEL), Handball und
                American Football erfreuen sich großer Beliebtheit.
              </p>
              <p className="text-gray-200 leading-relaxed text-sm">
                Die besten Anbieter bieten Hunderte von Wettmärkten pro Spiel, von klassischen 1X2-Wetten bis hin zu
                speziellen Wetten auf Torschützen, Ecken, Karten und vieles mehr.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Willkommensboni richtig nutzen</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Viele deutsche Wettanbieter locken Neukunden mit attraktiven Willkommensboni. Diese können als
                Gratiswetten, Einzahlungsboni oder risikofreie Wetten angeboten werden. Wichtig ist, die
                Bonusbedingungen genau zu lesen: Achten Sie auf Umsatzanforderungen, Mindestquoten und Gültigkeitsdauer
                des Bonus.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Rechtliche Rahmenbedingungen</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Der deutsche Glücksspielstaatsvertrag regelt Online-Sportwetten streng. Lizenzierte Anbieter müssen
                Spielerschutzmaßnahmen implementieren, darunter Einzahlungslimits (max. 1.000€ pro Monat),
                Selbstausschluss-Optionen über OASIS und Werbeeinschränkungen. Diese Regelungen dienen Ihrem Schutz und
                sorgen für ein sicheres Wettumfeld.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Live-Wetten und Cash-Out</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Moderne Wettanbieter bieten umfangreiche Live-Wetten-Optionen, bei denen Sie während des laufenden
                Spiels wetten können. Die Cash-Out-Funktion ermöglicht es Ihnen, Ihre Wette vorzeitig auszuzahlen und
                Gewinne zu sichern oder Verluste zu minimieren. Diese Features erhöhen die Flexibilität und Kontrolle
                über Ihre Wetten erheblich.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-german-gold">Verantwortungsvolles Spielen</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Sportwetten sollten immer als Unterhaltung betrachtet werden, nicht als Einkommensquelle. Setzen Sie
                sich feste Limits, wetten Sie nur mit Geld, das Sie sich leisten können zu verlieren, und nutzen Sie die
                Selbstschutz-Tools der Anbieter. Bei Anzeichen von problematischem Spielverhalten zögern Sie nicht,
                professionelle Hilfe in Anspruch zu nehmen.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-600 w-full">
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                DIESER INHALT IST URHEBERRECHTLICH GESCHÜTZT. ALLE ANGEBOTE GELTEN NUR FÜR PERSONEN AB 18 JAHREN MIT
                WOHNSITZ IN DEUTSCHLAND.
              </p>
              <p>
                ES GELTEN DIE JEWEILIGEN GESCHÄFTSBEDINGUNGEN DER ANBIETER. GLÜCKSSPIEL KANN SÜCHTIG MACHEN. SPIELEN SIE
                VERANTWORTUNGSBEWUSST.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
