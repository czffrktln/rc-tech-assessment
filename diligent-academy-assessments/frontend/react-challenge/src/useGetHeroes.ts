import { useEffect, useState } from "react"
import { Hero } from "./types"
import { callApi } from "./call-api"
import { heroesRoute } from "./constants";

const useGetHeroes = () => {
  const [ heroes, setHeroes ] = useState<Hero[]>([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isFetchingFailed, setIsFetchingFailed ] = useState(false)

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const data: Hero[] = await callApi(heroesRoute)
        setHeroes(data);
      } catch(e) {
        setIsFetchingFailed(true)
      } finally {
        setIsLoading(false)
      }
    }
    getHeroes();

  }, [])

  return {heroes, setHeroes, isLoading, isFetchingFailed}
};

export default useGetHeroes;


