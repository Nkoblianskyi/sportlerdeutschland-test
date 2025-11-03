"use client"
import { Shield, Clock } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUAR",
      "FEBRUAR",
      "MÄRZ",
      "APRIL",
      "MAI",
      "JUNI",
      "JULI",
      "AUGUST",
      "SEPTEMBER",
      "OKTOBER",
      "NOVEMBER",
      "DEZEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Hero Section - Desktop */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
        style={{ background: "rgba(0, 0, 0, 0.45)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          <div className="space-y-1">
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              BESTE <span className="text-german-gold">SPORTWETTEN</span> IN DEUTSCHLAND
            </h1>

            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              GETESTET FÜR {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-2 lg:space-y-2 mx-auto">
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
              Entdecken Sie die besten lizenzierten Sportwetten-Anbieter in Deutschland. Unsere Experten haben alle
              führenden Plattformen getestet und bewertet, damit Sie sicher und legal wetten können.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              Profitieren Sie von attraktiven Willkommensboni, erstklassigen Quoten und schnellen Auszahlungen bei
              Anbietern mit deutscher Lizenz.
            </p>

            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Es gelten die AGB der jeweiligen Anbieter. Nur für neue Kunden. Mindestalter 18+
            </p>
          </div>

          <div className="space-y-2 lg:space-y-4 mt-1">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legal & Sicher</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-black"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-german-red"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-german-gold"></div>
                </div>
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Deutsche Lizenz</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Schnelle Auszahlungen</span>
              </div>
            </div>

            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Spielen Sie verantwortungsbewusst. Es gelten die AGB der Anbieter.
              <button
                onClick={onAdvertiserModalOpen}
                className="underline ml-1 hover:text-german-gold transition-colors"
              >
                Werbehinweis
              </button>
              <span> | </span>
              <button onClick={onTermsModalOpen} className="underline hover:text-german-gold transition-colors">
                18+ AGB gelten
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Tablet */}
      <div
        className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
        style={{ background: "rgba(0, 0, 0, 0.85)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              BESTE <span className="text-german-gold">SPORTWETTEN</span> IN DEUTSCHLAND
            </h1>
            <h2 className="text-base md:text-lg font-bold">GETESTET FÜR {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex gap-0.5 md:gap-1">
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-black"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-german-red"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-german-gold"></div>
              </div>
              <span className="text-xs md:text-sm font-bold">DE Lizenz</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Schnell</span>
            </div>
          </div>

          <div className="text-[10px] md:text-xs">
            Spielen Sie verantwortungsbewusst; Es gelten die AGB.
            <button onClick={onAdvertiserModalOpen} className="underline ml-1">
              Werbehinweis
            </button>
            <span> | </span>
            <button onClick={onTermsModalOpen} className="underline">
              18+ AGB gelten
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-1 w-full h-[100px]"
        style={{
          backgroundImage: "url(/images/german-stadium.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 px-2 text-center flex flex-col justify-center">
            <div className="mb-1">
              <h1 className="text-sm font-bold mb-0.5 drop-shadow-lg leading-tight">
                BESTE <span className="text-german-gold">SPORTWETTEN</span>
              </h1>
              <h2 className="text-[9px] font-bold drop-shadow-lg leading-tight">
                GETESTET FÜR {getCurrentMonthYear()}
              </h2>
            </div>

            <div className="flex justify-center gap-2 mb-1">
              <div className="flex flex-col items-center">
                <Shield className="w-2.5 h-2.5 mb-0.5" />
                <span className="text-[6px] font-bold leading-tight">100% Legal</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-0.5">
                  <div className="w-0.5 h-2 bg-black"></div>
                  <div className="w-0.5 h-2 bg-german-red"></div>
                  <div className="w-0.5 h-2 bg-german-gold"></div>
                </div>
                <span className="text-[6px] font-bold leading-tight">DE Lizenz</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-2.5 h-2.5 mb-0.5" />
                <span className="text-[6px] font-bold leading-tight">Schnell</span>
              </div>
            </div>

            <div className="text-[5px] leading-tight">
              <div>Spielen Sie verantwortungsbewusst. Es gelten die AGB.</div>
              <div>
                <button onClick={onAdvertiserModalOpen} className="underline hover:text-german-gold">
                  Werbehinweis
                </button>
                <span> | </span>
                <button onClick={onTermsModalOpen} className="underline hover:text-german-gold">
                  18+ AGB gelten
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
