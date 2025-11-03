"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { StarRating } from "./star-rating"
import { BettingSite } from "@/data/mock-data"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-50" : "bg-white"

  const isFirstCard = rank === 1
  const borderColor = isFirstCard ? "border-german-gold border-2" : "border-black border"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 215 : 350
    const shouldShow = site.terms.length > limit

    setShowReadMore(shouldShow)
  }, [site.terms, site.name, isMobile])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 3 || rank === 6
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP MARKE"
    if (rank === 2) return "EXKLUSIVES ANGEBOT"
    if (rank === 3) return "BELIEBT"
    if (rank === 6) return "TOP WACHSTUM"
    return ""
  }

  return (
    <div className="block">
      {rank === 1 && (
        <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
          <div className="h-[40px] flex items-center px-6">
            <div className="flex-[0_0_30%] text-center pr-2">
              <span className="text-xs font-bold">WETTANBIETER</span>
            </div>
            <div className="flex-[0_0_25%] text-center px-2">
              <span className="text-xs font-bold">BONUSANGEBOT</span>
            </div>
            <div className="flex-[0_0_20%] text-center px-2">
              <span className="text-xs font-bold">NUTZERBEWERTUNG</span>
            </div>
            <div className="flex-[0_0_12%] text-center px-2">
              <span className="text-xs font-bold">BEWERTUNG</span>
            </div>
            <div className="flex-[0_0_13%] text-center pl-2">
              <span className="text-xs font-bold">WEBSITE BESUCHEN</span>
            </div>
          </div>
        </div>
      )}

      <div
        className={`hidden lg:block ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`absolute top-0 left-0 ${isFirstCard ? "bg-german-gold" : "bg-german-gold"} text-black px-3 py-1 rounded-tl-md rounded-bl-md text-sm font-bold z-10`}
          >
            #{rank}
          </div>
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-12 bg-german-gold text-black px-3 py-1 rounded-tr-md rounded-br-md text-sm font-bold z-10">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="h-[130px] flex items-center px-6">
            <div className="flex-[0_0_30%] flex justify-center items-center h-full pr-2 bg-black p-4 ">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain mt-4"
              />
            </div>
            <div className="flex-[0_0_25%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-lg xl:text-xl font-bold text-gray-900 mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 leading-tight break-words text-nowrap">
                {site.welcomeOffer}
              </div>
            </div>
            <div className="flex-[0_0_20%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-xs text-black mb-0.5">Bewerten! ({formatVotes(site.votes)})</div>
              <div className="flex justify-center">
                <StarRating rating={site.rating} size="md" />
              </div>
            </div>
            <div className="flex-[0_0_12%] text-center flex flex-col justify-center h-full px-1">
              <div className="text-[44px] xl:text-[56px] font-bold leading-none text-green-600">
                {site.rating.toFixed(1)}
              </div>
            </div>
            <div className="flex-[0_0_13%] text-center flex flex-col justify-center items-center h-full pl-1">
              <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-1 xl:px-2 py-2 rounded-md text-xs xl:text-sm w-full max-w-[120px] h-[38px] xl:h-[45px] mb-1 transition-colors">
                BONUS HOLEN
              </Button>
              <div className="text-xs text-gray-500 underline">{site.name} besuchen</div>
            </div>
          </div>
        </Link>
        <div className="bg-gray-100 text-[8px] text-gray-500 px-6 py-2" ref={termsContainerRef}>
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`hidden md:block lg:hidden ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`absolute top-0 left-0 ${isFirstCard ? "bg-german-gold" : "bg-german-gold"} text-black px-2 py-1 rounded-tl-md rounded-bl-md text-xs font-bold z-10`}
          >
            #{rank}
          </div>
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-10 bg-red-600 text-white px-2 py-1 rounded-tr-md rounded-br-md text-xs font-bold z-10">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="p-4 pt-6 min-h-[140px]">
            <div className="flex items-center mb-3">
              <div className="flex-[0_0_30%] flex justify-center items-center h-full bg-black  pr-2">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[70px] object-contain flex-shrink-0"
                />
              </div>
              <div className="flex-[0_0_25%] text-center px-2">
                <div className="text-base font-bold text-gray-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
                <div className="text-base font-bold text-gray-900 leading-tight break-words text-nowrap">
                  {site.welcomeOffer}
                </div>
              </div>
              <div className="flex-[0_0_20%] text-center px-2">
                <div className="text-xs text-gray-600 mb-0.5">({formatVotes(site.votes)})</div>
                <div className="flex justify-center">
                  <StarRating rating={site.rating} size="sm" />
                </div>
              </div>
              <div className="flex-[0_0_12%] text-center px-1">
                <div className="text-[40px] font-bold leading-none text-green-600">{site.rating.toFixed(1)}</div>
              </div>
              <div className="flex-[0_0_13%] text-center pl-1">
                <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-2 py-2 rounded-md text-xs w-full max-w-[100px] mx-auto transition-colors">
                  BONUS HOLEN
                </Button>
              </div>
            </div>
          </div>
        </Link>
        <div className="border-t border-gray-200 text-gray-500 text-[7px] px-4 py-3 bg-gray-100">
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline mt-1 text-[8px] font-medium"
              >
                {isTermsExpanded ? "Weniger" : "Mehr"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`absolute top-0 left-0 ${isFirstCard ? "bg-german-gold" : "bg-german-gold"} text-black px-2 py-0.5 rounded-tl-md rounded-bl-md text-[10px] font-bold z-20`}
          >
            #{rank}
          </div>
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-8 bg-red-600 text-white px-2 py-0.5 rounded-tr-md rounded-br-md text-[10px] font-bold z-20">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="grid grid-cols-[45%_55%] h-[175px]">
            <div className="bg-[rgb(242,242,242)] flex flex-col justify-between items-center py-2 px-2">
              <div className="flex-1 flex items-center justify-center bg-black p-4">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-1 w-full">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-1">
                    <StarRating rating={site.rating} size="sm" />
                  </div>
                  <div className="text-[12px] text-black text-center leading-tight">
                    Bewerten
                    <br />({formatVotes(site.votes)})
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold leading-none text-green-600">{site.rating.toFixed(1)}</div>
                  <div className="text-[10px] text-black font-bold mt-1">Bewertung</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-2 px-2">
              <div className="text-center flex-1 flex flex-col justify-center">
                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">{site.bonus}</div>
                <div className="text-lg font-bold text-gray-900 leading-tight text-nowrap">{site.welcomeOffer}</div>
              </div>
              <div className="flex justify-center mt-2">
                <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-3 py-1.5 rounded-md text-sm transition-colors w-full">
                  BONUS HOLEN
                </Button>
              </div>
            </div>
          </div>
        </Link>
        <div className="border-t border-gray-200 bg-gray-100 px-2 py-2">
          <div className="text-center">
            <div
              className={`text-gray-500 text-[8px] leading-[1.4] transition-all duration-300 ${
                !isTermsExpanded ? "line-clamp-2" : ""
              }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline text-[9px] font-medium"
              >
                {isTermsExpanded ? "Weniger" : "Mehr"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
