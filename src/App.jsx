import { useState, useEffect } from 'react'
import pokedex from './assets/pokedex.png'
import './App.css'
import SearchBar from './components/SearchBar'
import NavigationButtons from './components/NavigationButtons'
import fetchPokemon from './services/api'

function App() {

  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buscarPokemon(1);}, []);


  const buscarPokemon = async(pokemon) => {   
    setLoading(true)

    try {
      const data = await fetchPokemon(pokemon);
      setPokemonData(data);
      setError("");
    } 
    catch (error) {
      setPokemonData(null);
      setError(error.message);
    } 
    finally {
      setLoading(false)
    }
  };


  return (
    <div className='content'>
      <main>
       
      {pokemonData && ( 
        <img src={pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default || pokemonData.sprites.front_default} alt={pokemonData.name} className='pokemon-img'/>
      )}

        <h1 className='pokemon_data'>
          {loading ? (
            <span className='loading'>Loading...</span>
          ) : pokemonData ? ( 
          <>
            <span className='pokemon-number'>{pokemonData.id}</span>
            {" - "}
            <span className='pokemon_name'> {pokemonData.name}</span>
          </>  
          ) : error ? (
            <span className='not_found'> Not found :(</span> 
          ) : null }
        </h1>

        <SearchBar
          pokemon={pokemon}
          setPokemon={setPokemon}
          buscarPokemon={buscarPokemon}
        />

        <NavigationButtons
        pokemonData={pokemonData}
        buscarPokemon={buscarPokemon}
        />
        

        <img src={pokedex} alt="pokedex-img" className='pokedex-img' />
      </main>
    </div>   
  )
}

export default App
