import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Pokemon.scss'
import { Primary } from '../components/Buttons.stories'

function calculatePowerLevel(pokemon) {
  const baseStats = Object.values(pokemon.stats).map((stat) => stat.base_stat)
  const powerLevel = baseStats.reduce((sum, stat) => sum + stat, 0)
  return powerLevel
}

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchRandomPokemon = async () => {
    setLoading(true)

    try {
      const randomPokemonId = Math.floor(Math.random() * 200) + 1
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      const pokemonData = response.data
      setPokemonList([pokemonData])
    } catch (error) {
      console.error('Error fetching Pokémon:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
  }, [])

  return (
    <div className="pokemon-list-container">
      <h1>Hello, Pokemons!</h1>
      <h2>Pokemon List</h2>
      <Primary onButtonClick={fetchRandomPokemon} label={'Load New Pokémon'}></Primary>
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : (
          pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <img
                src={pokemon.sprites.front_default}
                alt={`Image of ${pokemon.name}`}
              />
              <h2>{pokemon.name}</h2>
              <p>Type: {pokemon.types[0].type.name}</p>
              <p>Height: {pokemon.height / 10} m</p>
              <p>Weight: {pokemon.weight / 10} kg</p>
              <p>Power Level: {calculatePowerLevel(pokemon)}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default PokemonList
