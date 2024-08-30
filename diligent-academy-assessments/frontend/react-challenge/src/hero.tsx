import { HeroProps } from "./types";

const Hero = ({hero, setHeroes}: HeroProps) => {

  const changeAvailability = (id: number) => {
    setHeroes(prevHeroes =>
      prevHeroes.map(hero =>
        hero.id === id ? { ...hero, available: !hero.available} : hero
      )
    )
  }

  return (
    <div className="hero-item">
      {hero.available ? 
        <p onClick={() => changeAvailability(hero.id)} style={{color:"green"}}>{hero.id}. {hero.name} "Available" </p> :
        <p onClick={() => changeAvailability(hero.id)} style={{color:"red"}}>{hero.id}. {hero.name} </p>
      }
    </div>
  )
};

export default Hero;