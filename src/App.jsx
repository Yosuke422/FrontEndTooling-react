import React,{ useState } from 'react'
import PokemonList from '../src/components/Pokemon'

function App() {
  const [fetchCount, setFetchCount] = useState(0)

  const fetchNewPokemon = () => {
    setFetchCount((prevCount) => prevCount + 1)
  }

  return (
    <PokemonList 
      key={fetchCount} 
      onFetchNewPokemon={fetchNewPokemon}
    />
  )
}

export default App
