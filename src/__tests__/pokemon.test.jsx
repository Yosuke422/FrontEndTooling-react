import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import PokemonList from '../components/Pokemon'
import { act } from 'react-dom/test-utils'

jest.mock('axios')

const mockAxiosGet = axios.get

describe('PokemonList', () => {
  const samplePokemonData = {
    data: {
      id: 1,
      name: 'Bulbasaur',
      sprites: { front_default: 'bulbasaur-image-url' },
      types: [{ type: { name: 'grass' } }],
      height: 70,
      weight: 69,
      stats: [
        { base_stat: 45 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 65 },
        { base_stat: 65 },
        { base_stat: 45 },
      ],
    },
  }
  samplePokemonData.data.powerLevel = samplePokemonData.data.stats.reduce(
    (sum, stat) => sum + stat.base_stat,
    0
  );

  it('fetches and displays a Pokemon with power level', async () => {
    mockAxiosGet.mockResolvedValue(samplePokemonData)

    // Render the component
    render(<PokemonList />)

    // Wait for the loading message to disappear
    await waitFor(() => screen.queryByText('Loading...'))

    // Simulate a button click to fetch a new Pokemon
    act(() => {
      fireEvent.click(screen.getByText('Load New Pokemon', { exact: false }))
    })

    await waitFor(() => screen.queryByText('Loading...'))

    await waitFor(() => screen.getByText('Load New Pokemon', { exact: false }))

    expect(screen.getByText('Load New Pokemon', { exact: false })).toBeInTheDocument()

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByAltText('Image of Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('Type: grass')).toBeInTheDocument()
    expect(screen.getByText('Height: 7 m')).toBeInTheDocument()
    expect(screen.getByText('Weight: 6.9 kg')).toBeInTheDocument()
    expect(screen.getByText('Power Level: 318')).toBeInTheDocument()
  })
})
