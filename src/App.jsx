import { useState } from 'react'
import pokedex from './assets/pokedex.png'
import './App.css'
import SearchBar from './components/SearchBar'
import NavigationButtons from './components/NavigationButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <main>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif" alt="pokemon-img" className='pokemon-img'/>

        <h1 className='pokemon_data'>
          <span className='pokemon-number'>6</span> - 
          <span className='pokemon_name'> charizard</span>
        </h1>

        <SearchBar/>

        <NavigationButtons/>

        <img src={pokedex} alt="pokedex-img" className='pokedex-img' />
      </main>
    </div>   
  )
}

export default App
