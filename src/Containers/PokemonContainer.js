import React, {Component} from 'react'
import PokemonList from '../Components/PokemonList'
import Search from '../Components/Search'
import TypeSearch from '../Components/TypeSearch'
import Dropdown from '../Components/Dropdown'


class PokemonContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      pokemons: [],
      searchInput: '',
      typeInput: '',
      selectedType: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemons')
    .then(res => res.json())
    .then(pokemonData => this.setState({
      pokemons: pokemonData
    }))
    // },() => console.log("pokemons are",this.state.pokemons)))
  }

  handleChange = (event) => {
    console.log("Before: SEARCH INPUT IS", this.state.searchInput)
    // let filteredPokemonByName = this.state.pokemons.filter(pokemon => {
    //   return pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    // })

    this.setState({
      searchInput: event.target.value
      // filteredPokemonByName: filteredPokemonByName
    }, () => console.log("After: SEARCH INPUT IS", this.state.searchInput))
  }

  handleTypeChange = (event) => {

    this.setState({
      typeInput: event.target.value
    })
  }


  render() {

    let filteredPokemonByName = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    let filteredPokemonByType = this.state.pokemons.filter(pokemon => {
      if (pokemon.types.length > 1) {
        return (pokemon.types[0].toLowerCase().includes(this.state.typeInput.toLowerCase())) || (pokemon.types[1].toLowerCase().includes(this.state.typeInput.toLowerCase()))
      } else {
        return (pokemon.types[0].toLowerCase().includes(this.state.typeInput.toLowerCase()))
      }
    })

    // console.log("filteredPokemonByName is",filteredPokemonByName)
    // console.log("this.state.pokemons are", this.state.pokemons)
    return (
      <div>
        <b>Pokemon Name: </b><Search searchInput={this.state.searchInput} handleChange={this.handleChange} />
        <center>--------------------------</center>
        <b>Pokemon Type: </b><TypeSearch typeInput={this.state.typeInput} handleTypeChange={this.handleTypeChange} />
        {
          this.state.searchInput !== '' ?
          <PokemonList pokemons={filteredPokemonByName} handleClick={this.handleClick} searchInput={this.state.searchInput} typeInput={this.state.typeInput} allPokemons={this.state.pokemons} />
          :
          <PokemonList pokemons={filteredPokemonByType} handleClick={this.handleClick} searchInput={this.state.searchInput} typeInput={this.state.typeInput} allPokemons={this.state.pokemons} />
        }
      </div>
    )
  }
}

export default PokemonContainer
