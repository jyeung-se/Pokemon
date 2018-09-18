import React, {Component} from 'react'


let PokemonSFX = [
  "assets/PokemonSounds/001 - Bulbasaur.wav",
  "assets/PokemonSounds/002 - Ivysaur.wav",
  "assets/PokemonSounds/003 - Venusaur.wav",
  "assets/PokemonSounds/004 - Charmander.wav",
  "assets/PokemonSounds/005 - Charmeleon.wav",
  "assets/PokemonSounds/006 - Charizard.wav",
  "assets/PokemonSounds/007 - Squirtle.wav",
  "assets/PokemonSounds/008 - Wartortle.wav",
  "assets/PokemonSounds/009 - Blastoise.wav",
]

class PokemonCard extends Component {
  constructor(props) {
    super(props)
    // console.log('PokemonCard props are: ', props.pokemon)

    this.state={
      showFront: true
    }
  }

  playSound = (pokemon) => {

    let ivysaur = new Audio(PokemonSFX[1])
    let venusaur = new Audio(PokemonSFX[2])
    let charmander = new Audio(PokemonSFX[3])
    let charmeleon = new Audio(PokemonSFX[4])
    let charizard = new Audio(PokemonSFX[5])
    let squirtle = new Audio(PokemonSFX[6])
    let wartortle = new Audio(PokemonSFX[7])
    let blastoise = new Audio(PokemonSFX[8])

  // debugger
  if (this.props.pokemon.name.toLowerCase() === 'ivysaur') {
    ivysaur.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'venusaur') {
    venusaur.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'charmander') {
    charmander.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'charmeleon') {
    charmeleon.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'charizard') {
    charizard.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'squirtle') {
    squirtle.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'wartortle') {
    wartortle.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'blastoise') {
    blastoise.play()
  }
}

  handleClick = (pokemon) => {
    this.setState({
      showFront: !this.state.showFront
    })
    // console.log(pokemon)
    this.playSound(pokemon)
  }


  render() {
    return (
      <div className="five wide column">
          {(this.state.showFront === true) ? <img src={this.props.pokemon.sprites.front} onClick={() => this.handleClick(this.props.pokemon)} alt="pokemon" /> : <img src={this.props.pokemon.sprites.back} onClick={this.handleClick} alt="pokemon" />}
          <br/>
          Name: {this.props.pokemon.name} <br/>
          Type: {this.props.pokemon.types.map(type => type).join(" - ")} <br/>
      </div>
    )
  }
}

export default PokemonCard
