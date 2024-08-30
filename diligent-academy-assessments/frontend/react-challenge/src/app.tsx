import HeroesList from "./heroes-list";
import useGetHeroes from './useGetHeroes';
import FailedToFetch from "./failed-to-fetch";
import "./style.css"

function App() {

  const {heroes, setHeroes, isLoading, isFetchingFailed } = useGetHeroes()
  
  return (
    <>
      <h1>App</h1>
      {isLoading ? 
        <h1>Loading...</h1> : isFetchingFailed ? <FailedToFetch /> :
        <HeroesList heroes={heroes} setHeroes={setHeroes}/> 
      }
    </>
  );
}

export default App;


