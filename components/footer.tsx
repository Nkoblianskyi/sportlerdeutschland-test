import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 mt-16 border-t-4 border-german-gold">
      <div className="container mx-auto px-4">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity mb-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Image src="/favicon.ico" alt="SportlerDeutschland Logo" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold font-serif tracking-wide">
              <span className="text-white">Sportler</span>
              <span className="text-german-red">Deutsch</span>
              <span className="text-yellow-500">land</span>
            </h3>
          </Link>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Ihre vertrauenswürdige Quelle für Sportwetten-Vergleiche in Deutschland. Wir helfen Ihnen, die besten
            lizenzierten Wettanbieter zu finden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
          <div>
            <h4 className="text-german-gold font-bold mb-3 text-sm uppercase tracking-wide">Über uns</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/uber-uns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Über SportlerDeutschland
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-german-gold font-bold mb-3 text-sm uppercase tracking-wide">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/cookie-richtlinie" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-german-gold font-bold mb-3 text-sm uppercase tracking-wide">Verantwortung</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/verantwortungsvolles-spielen"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Verantwortungsvolles Spielen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming Partners */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-center text-german-gold font-bold mb-4 text-sm uppercase tracking-wide">
            Partner für verantwortungsvolles Spielen
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://www.gluecksspiel-behoerde.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/gluecksspiel-behoerde.webp" alt="Glücksspielbehörde" className="h-10" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/gamecare.svg" alt="Gamecare" className="h-10" />
            </Link>
            <Link
              href="https://socialguard.app/oasis/spielersperre-abfragen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/social-guard.webp" alt="Social Guard" className="h-10" />
            </Link>
            <Link
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/gamble.webp" alt="BeGambleAware" className="h-10" />
            </Link>
            <Link
              href="https://www.anonyme-spieler.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/anonye-spieler.webp" alt="Anonye Spieler" className="h-10" />
            </Link>
            <Link
              href="https://www.oasisscan.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-gray-300 p-2 rounded-md"
            >
              <img src="/oasisscan.png" alt="OASIS Scan" className="h-10" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 mb-2 text-sm">© 2025 SportlerDeutschland.com. Alle Rechte vorbehalten.</p>
          <p className="text-red-400 font-bold text-sm mb-2">
            18+ | Nur für deutsche Spieler | Glücksspiel kann süchtig machen
          </p>
          <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
            SportlerDeutschland.com ist eine unabhängige Vergleichsplattform für Sportwetten. Wir erhalten
            möglicherweise Provisionen von den auf dieser Website beworbenen Anbietern. Bitte spielen Sie
            verantwortungsbewusst.
          </p>
        </div>
      </div>
    </footer>
  )
}
