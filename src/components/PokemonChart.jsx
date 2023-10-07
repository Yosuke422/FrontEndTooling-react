
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './PokemonChart.scss'
import Plot from 'react-plotly.js'

function calculatePowerLevel(pokemon) {
  const baseStats = Object.values(pokemon.stats).map((stat) => stat.base_stat)
  const powerLevel = baseStats.reduce((sum, stat) => sum + stat, 0)
  return powerLevel
}

function PokemonChart() {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
        const pokemonList = response.data.results

        const detailedPokemonData = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailedResponse = await axios.get(pokemon.url)
            return detailedResponse.data
          })
        );

        setPokemonData(detailedPokemonData)
      } catch (error) {
        console.error('Error fetching Pokémon data:', error)
      }
    }

    fetchPokemonData()
  }, []);

  return (
    <div className="pokemon-chart-container">
      <h3>Pokémon Power Levels</h3>
      {pokemonData.length > 0 && (
        <Plot
          data={[
            {
              x: pokemonData.map((pokemon) => pokemon.name),
              y: pokemonData.map((pokemon) => calculatePowerLevel(pokemon)),
              type: 'bar',
            },
          ]}
          layout={{
            xaxis: { title: 'Pokemon' },
            yaxis: { title: 'Power Level' },
            title: 'Pokemon Power Levels Chart',
          }}
        />
      )}
    </div>
  )
}

export default PokemonChart
