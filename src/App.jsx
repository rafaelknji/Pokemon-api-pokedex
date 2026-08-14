import { useState } from 'react'
import pokedex from './assets/pokedex.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={pokedex} alt="pokedex-img" />
    </div>
    
  )
}

export default App
