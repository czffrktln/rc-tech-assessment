import Hero from "./hero";
import { HeroesProps } from "./types";

function HeroesList({ heroes, setHeroes }: HeroesProps) {
 
  return (
    <div>
      <h2>Heroes</h2>
      <div className="heroes-list">
        { heroes.map((hero) => (
          <Hero key={hero.id} hero={hero} heroes={heroes} setHeroes={setHeroes} />
        ) )}
      </div>
    </div>
  );
}

export default HeroesList;
