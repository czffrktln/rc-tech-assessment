import { SetStateAction } from "react"

export type Hero = {
  id: number,
  name: string,
  available: boolean
}

export type HeroesProps = { 
  heroes: Hero[], 
  setHeroes: React.Dispatch<SetStateAction<Hero[]>>
}

export type HeroProps = {
  hero: Hero,
  heroes: Hero[], 
  setHeroes: React.Dispatch<SetStateAction<Hero[]>>
}