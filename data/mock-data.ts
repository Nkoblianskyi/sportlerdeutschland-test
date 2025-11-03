export interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  bonus: string
  welcomeOffer: string
  terms: string
  userRating: number
  votes: number
  link: string

}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Betway",
    logo: "/betway.webp",
    rating: 9.8,
    bonus: "Einzahlungsbonus",
    welcomeOffer: "Bis zu 100€",
    terms: "18+ | GGL-Lizenz | OASIS-Selbstsperre: Socialguard.app | Spielen Sie verantwortungsbewusst",
    userRating: 9.8,
    votes: 7491,
    link: "https://betway.de/",
  },
  {
    id: 2,
    name: "Betano",
    logo: "/betano.svg",
    rating: 9.7,
    bonus: "Bis zu 80€ BONUSGUTHABEN",
    welcomeOffer: "+ 20€ Freiwette",
    terms: "18+ | GGL-Lizenz | OASIS-Selbstsperre: Socialguard.app | Verantwortungsvoll spielen",
    userRating: 9.7,
    votes: 8537,
    link: "https://www.betano.de/",
  },
  {
    id: 3,
    name: "BWIN",
    logo: "/bwin.png",
    rating: 9.6,
    bonus: "Einzahlungsbonus",
    welcomeOffer: "Bis zu 100€",
    terms: "18+ | GGL-Lizenz | OASIS-Selbstsperre: Socialguard.app | Spielen Sie verantwortungsbewusst",
    userRating: 9.6,
    votes: 7794,
    link: "https://www.bwin.de/",
  },
  {
    id: 4,
    name: "LeoVegas",
    logo: "/leovegas.svg",
    rating: 9.5,
    bonus: "Einzahlen und 100% ",
    welcomeOffer: "bis zu 100€ extra erspielen",
    terms: "18+ | GGL-Lizenz | OASIS-Selbstsperre: Socialguard.app | Verantwortungsvoll wetten",
    userRating: 9.5,
    votes: 7351,
    link: "https://www.leovegas.de/",
  },
]
