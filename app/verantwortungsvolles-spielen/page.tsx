"use client"

import Link from "next/link"
import { ShieldAlert, Phone, Mail, AlertTriangle, Ban, Clock, Euro, UserX } from "lucide-react"

export default function VerantwortungsvollesSpielenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-black/80 rounded-lg p-6 lg:p-8 text-white">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Verantwortungsvolles Spielen</h1>
        </div>

        <div className="space-y-6">
          {/* Introduction */}
          <section>
            <p className="text-gray-200 leading-relaxed">
              Sportwetten sollen Spaß machen und eine Form der Unterhaltung sein. Für die meisten Menschen ist das auch
              der Fall. Allerdings kann Glücksspiel für manche zu einem Problem werden. Wir nehmen verantwortungsvolles
              Spielen sehr ernst und möchten Ihnen Informationen und Werkzeuge an die Hand geben, um sicher zu wetten.
            </p>
          </section>

          {/* Warning Signs */}
          <section className="bg-german-red/20 border border-german-red rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-german-gold">
              <AlertTriangle className="w-6 h-6" />
              Warnzeichen für problematisches Spielverhalten
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie wetten mit Geld, das Sie für andere wichtige Dinge benötigen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie versuchen, Verluste durch weitere Wetten wieder hereinzuholen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie vernachlässigen Familie, Freunde oder berufliche Verpflichtungen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie leihen sich Geld, um zu wetten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie denken ständig ans Wetten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-german-gold mt-1">•</span>
                <span>Sie verheimlichen Ihr Wettverhalten vor anderen</span>
              </li>
            </ul>
          </section>

          {/* Self-Protection Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-german-gold">Selbstschutz-Maßnahmen</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Euro className="w-5 h-5 text-german-gold" />
                  <h3 className="font-bold">Einzahlungslimits</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Setzen Sie sich tägliche, wöchentliche oder monatliche Einzahlungslimits. In Deutschland gilt ein
                  gesetzliches Limit von 1.000€ pro Monat.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-german-gold" />
                  <h3 className="font-bold">Zeitlimits</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Legen Sie fest, wie viel Zeit Sie maximal mit Wetten verbringen möchten. Viele Anbieter bieten
                  automatische Erinnerungen.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Ban className="w-5 h-5 text-german-gold" />
                  <h3 className="font-bold">Selbstsperre</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Sperren Sie sich temporär oder dauerhaft über OASIS. Die Sperre gilt bundesweit für alle lizenzierten
                  Anbieter.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <UserX className="w-5 h-5 text-german-gold" />
                  <h3 className="font-bold">Auszeit</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Nehmen Sie eine Pause von 24 Stunden bis zu mehreren Wochen. Während dieser Zeit können Sie nicht
                  wetten.
                </p>
              </div>
            </div>
          </section>

          {/* OASIS Section */}
          <section className="bg-gradient-to-r from-german-red/30 to-black/30 rounded-lg p-6 border border-german-gold">
            <h2 className="text-2xl font-bold mb-4 text-german-gold flex items-center gap-2">
              <ShieldAlert className="w-7 h-7" />
              OASIS - Bundesweite Selbstsperre
            </h2>

            <p className="text-gray-200 leading-relaxed mb-4">
              OASIS (Onlineabfrage Spielerstatus) ist die zentrale Sperrdatei für Online-Glücksspiele in Deutschland.
              Eine Selbstsperre über OASIS gilt automatisch für alle lizenzierten Anbieter in Deutschland.
            </p>

            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-3">So funktioniert die OASIS-Sperre:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>Registrierung auf der OASIS-Website mit Personalausweis</li>
                <li>Wahl der Sperrdauer (mindestens 3 Monate, maximal unbegrenzt)</li>
                <li>Sofortige Sperrung bei allen deutschen Online-Glücksspielanbietern</li>
                <li>Nach Ablauf der Frist können Sie eine Entsperrung beantragen</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.oasis-sperre.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-german-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors text-center"
              >
                Zur OASIS-Selbstsperre
              </Link>
              <Link
                href="https://www.oasis-sperre.de/spielerstatus-abfragen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors border border-white/30 text-center"
              >
                OASIS-Status prüfen
              </Link>
            </div>
          </section>

          {/* Help Organizations */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-german-gold">Hilfe und Beratung</h2>

            <p className="text-gray-200 leading-relaxed mb-4">
              Wenn Sie das Gefühl haben, dass Ihr Spielverhalten außer Kontrolle gerät, zögern Sie nicht, professionelle
              Hilfe in Anspruch zu nehmen. Es gibt viele Organisationen, die kostenlose und vertrauliche Unterstützung
              anbieten.
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-bold mb-2 text-german-gold">
                  Bundeszentrale für gesundheitliche Aufklärung (BZgA)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-german-gold" />
                    <span>Telefonische Beratung: 0800 1 37 27 00 (kostenlos und anonym)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-german-gold" />
                    <Link
                      href="https://www.check-dein-spiel.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-german-gold hover:underline"
                    >
                      www.check-dein-spiel.de
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-bold mb-2 text-german-gold">Gemeinsame Glücksspielbehörde der Länder (GGL)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-german-gold" />
                    <Link
                      href="https://www.gluecksspiel-behoerde.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-german-gold hover:underline"
                    >
                      www.gluecksspiel-behoerde.de
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-bold mb-2 text-german-gold">Anonyme Spieler (Selbsthilfegruppe)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-german-gold" />
                    <span>Hotline: 0800 1 52 90 00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-german-gold" />
                    <Link
                      href="https://www.anonyme-spieler.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-german-gold hover:underline"
                    >
                      www.anonyme-spieler.org
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-bold mb-2 text-german-gold">Internationale Organisationen</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-german-gold" />
                    <Link
                      href="https://www.gamcare.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-german-gold hover:underline"
                    >
                      GamCare (UK)
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-german-gold" />
                    <Link
                      href="https://www.begambleaware.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-german-gold hover:underline"
                    >
                      BeGambleAware (UK)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips for Responsible Gambling */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-german-gold">Tipps für verantwortungsvolles Wetten</h2>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Setzen Sie sich Limits:</strong> Bestimmen Sie vor dem Wetten, wie viel Geld und Zeit Sie
                    investieren möchten
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Wetten Sie nur mit Geld, das Sie sich leisten können zu verlieren:</strong> Nutzen Sie
                    niemals Geld für Miete, Rechnungen oder andere wichtige Ausgaben
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Jagen Sie Verlusten nicht hinterher:</strong> Akzeptieren Sie Verluste als Teil des Spiels
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Wetten Sie nicht unter Alkohol- oder Drogeneinfluss:</strong> Treffen Sie Entscheidungen nur
                    mit klarem Kopf
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Machen Sie regelmäßig Pausen:</strong> Wetten sollte nicht Ihre einzige Freizeitaktivität
                    sein
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Führen Sie ein Wett-Tagebuch:</strong> Dokumentieren Sie Ihre Wetten, um den Überblick zu
                    behalten
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-german-gold mt-1">✓</span>
                  <span>
                    <strong>Sprechen Sie mit Freunden und Familie:</strong> Verheimlichen Sie Ihr Wettverhalten nicht
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Minderjährigenschutz */}
          <section className="bg-german-red/20 border border-german-red rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3 text-german-gold">Schutz von Minderjährigen</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Glücksspiel ist in Deutschland erst ab 18 Jahren erlaubt. Alle lizenzierten Anbieter sind verpflichtet,
              das Alter ihrer Kunden zu überprüfen. Eltern sollten darauf achten, dass Kinder und Jugendliche keinen
              Zugang zu Glücksspiel-Websites haben. Nutzen Sie Jugendschutzfilter und sprechen Sie mit Ihren Kindern
              über die Risiken von Glücksspiel.
            </p>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-6">
            <Link
              href="/"
              className="inline-block bg-german-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
