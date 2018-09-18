import React from 'react'
import Pokemon from './PokemonCard'

const PokemonList = props => {
console.log('pokemonMapper props are ', props.pokemons)

  const pokemonMapper = props.pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} handleClick={props.handleClick} />
  })

  const allPokemonMapper = props.allPokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} handleClick={props.handleClick} />
  })

  return (
    <div>
      {props.searchInput === '' && props.typeInput !== '' ? pokemonMapper : (props.searchInput !== '' && props.typeInput === '' ? pokemonMapper : allPokemonMapper)}
        {/* {props.searchInput === '' ? allPokemonMapper : pokemonMapper} */}
        {/* {props.typeInput === '' ? allPokemonMapper : pokemonMapper} */}
      }
    </div>
  )
}

export default PokemonList
