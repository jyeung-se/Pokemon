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
  "assets/PokemonSounds/010 - Caterpie.wav",
  "assets/PokemonSounds/011 - Metapod.wav",
  "assets/PokemonSounds/012 - Butterfree.wav",
  "assets/PokemonSounds/013 - Weedle.wav",
  "assets/PokemonSounds/014 - Kakuna.wav",
  "assets/PokemonSounds/015 - Beedrill.wav",
  "assets/PokemonSounds/016 - Pidgey.wav",
  "assets/PokemonSounds/017 - Pidgeotto.wav",
  "assets/PokemonSounds/018 - Pidgeot.wav",
  "assets/PokemonSounds/019 - Rattata.wav",
  "assets/PokemonSounds/020 - Raticate.wav",
  "assets/PokemonSounds/021 - Spearow.wav",
  "assets/PokemonSounds/022 - Fearow.wav",
  "assets/PokemonSounds/023 - Ekans.wav",
  "assets/PokemonSounds/024 - Arbok.wav",
  "assets/PokemonSounds/025 - Pikachu.wav", // Pikachu sound file does not exist. Download and sub in a sound
  "assets/PokemonSounds/026 - Raichu.wav",
  "assets/PokemonSounds/027 - Sandshrew.wav",
  "assets/PokemonSounds/028 - Sandslash.wav",
  "assets/PokemonSounds/029 - Nidoran (Female).wav",
  "assets/PokemonSounds/030 - Nidorina.wav",
  "assets/PokemonSounds/031 - Nidoqueen.wav",
  "assets/PokemonSounds/032 - Nidoran (Male).wav",
  "assets/PokemonSounds/033 - Nidorino.wav",
  "assets/PokemonSounds/034 - Nidoking.wav",
  "assets/PokemonSounds/035 - Clefairy.wav",
  "assets/PokemonSounds/036 - Clefable.wav",
  "assets/PokemonSounds/037 - Vulpix.wav",
  "assets/PokemonSounds/038 - Ninetales.wav",
  "assets/PokemonSounds/039 - Jigglypuff.wav",
  "assets/PokemonSounds/040 - Wigglytuff.wav",
  "assets/PokemonSounds/041 - Zubat.wav",
  "assets/PokemonSounds/042 - Golbat.wav",
  "assets/PokemonSounds/043 - Oddish.wav",
  "assets/PokemonSounds/044 - Gloom.wav",
  "assets/PokemonSounds/045 - Vileplume.wav",
  "assets/PokemonSounds/046 - Paras.wav",
  "assets/PokemonSounds/047 - Parasect.wav",
  "assets/PokemonSounds/048 - Venonat.wav",
  "assets/PokemonSounds/049 - Venomoth.wav",
  "assets/PokemonSounds/050 - Diglett.wav",
  "assets/PokemonSounds/051 - Dugtrio.wav",
  "assets/PokemonSounds/052 - Meowth.wav",
  "assets/PokemonSounds/053 - Persian.wav",
  "assets/PokemonSounds/054 - Psyduck.wav",
  "assets/PokemonSounds/055 - Golduck.wav",
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

    let bulbasaur = new Audio(PokemonSFX[0])
    let ivysaur = new Audio(PokemonSFX[1])
    let venusaur = new Audio(PokemonSFX[2])
    let charmander = new Audio(PokemonSFX[3])
    let charmeleon = new Audio(PokemonSFX[4])
    let charizard = new Audio(PokemonSFX[5])
    let squirtle = new Audio(PokemonSFX[6])
    let wartortle = new Audio(PokemonSFX[7])
    let blastoise = new Audio(PokemonSFX[8])
    let caterpie = new Audio(PokemonSFX[9])
    let metapod = new Audio(PokemonSFX[10])
    let butterfree = new Audio(PokemonSFX[11])
    let weedle = new Audio(PokemonSFX[12])
    let kakuna = new Audio(PokemonSFX[13])
    let beedrill = new Audio(PokemonSFX[14])
    let pidgey = new Audio(PokemonSFX[15])
    let pidgeotto = new Audio(PokemonSFX[16])
    let pidgeot = new Audio(PokemonSFX[17])
    let rattata = new Audio(PokemonSFX[18])
    let raticate = new Audio(PokemonSFX[19])
    let spearow = new Audio(PokemonSFX[20])
    let fearow = new Audio(PokemonSFX[21])
    let ekans = new Audio(PokemonSFX[22])
    let arbok = new Audio(PokemonSFX[23])
    let pikachu = new Audio(PokemonSFX[24])
    let raichu = new Audio(PokemonSFX[25])
    let sandshrew = new Audio(PokemonSFX[26])
    let sandslash = new Audio(PokemonSFX[27])
    let nidoranFemale = new Audio(PokemonSFX[28])
    let nidorina = new Audio(PokemonSFX[29])
    let nidoqueen = new Audio(PokemonSFX[30])
    let nidoranMale = new Audio(PokemonSFX[31])
    let nidorino = new Audio(PokemonSFX[32])
    let nidoking = new Audio(PokemonSFX[33])
    let clefairy = new Audio(PokemonSFX[34])
    let clefable = new Audio(PokemonSFX[35])
    let vulpix = new Audio(PokemonSFX[36])
    let ninetales = new Audio(PokemonSFX[37])
    let jigglypuff = new Audio(PokemonSFX[38])
    let wigglytuff = new Audio(PokemonSFX[39])
    let zubat = new Audio(PokemonSFX[40])
    let golbat = new Audio(PokemonSFX[41])
    let oddish = new Audio(PokemonSFX[42])
    let gloom = new Audio(PokemonSFX[43])
    let vileplume = new Audio(PokemonSFX[44])
    let paras = new Audio(PokemonSFX[45])
    let parasect = new Audio(PokemonSFX[46])
    let venonat = new Audio(PokemonSFX[47])
    let venomoth = new Audio(PokemonSFX[48])
    let diglett = new Audio(PokemonSFX[49])
    let dugtrio = new Audio(PokemonSFX[50])
    let meowth = new Audio(PokemonSFX[51])
    let persian = new Audio(PokemonSFX[52])
    let psyduck = new Audio(PokemonSFX[53])
    let golduck = new Audio(PokemonSFX[54])


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
  } else if (this.props.pokemon.name.toLowerCase() === 'caterpie') {
    caterpie.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'metapod') {
    metapod.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'butterfree') {
    butterfree.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'weedle') {
    weedle.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'kakuna') {
    kakuna.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'beedrill') {
    beedrill.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'pidgey') {
    pidgey.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'pidgeotto') {
    pidgeotto.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'pidgeot') {
    pidgeot.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'rattata') {
    rattata.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'raticate') {
    raticate.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'spearow') {
    spearow.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'fearow') {
    fearow.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'ekans') {
    ekans.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'arbok') {
    arbok.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'pikachu') {
    pikachu.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'raichu') {
    raichu.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'sandshrew') {
    sandshrew.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'sandslash') {
    sandslash.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidoran-f') {
    nidoranFemale.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidorina') {
    nidorina.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidoqueen') {
    nidoqueen.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidoran-m') {
    nidoranMale.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidorino') {
    nidorino.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'nidoking') {
    nidoking.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'clefairy') {
    clefairy.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'clefable') {
    clefable.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'vulpix') {
    vulpix.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'ninetales') {
    ninetales.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'jigglypuff') {
    jigglypuff.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'wigglytuff') {
    wigglytuff.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'zubat') {
    zubat.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'golbat') {
    golbat.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'oddish') {
    oddish.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'gloom') {
    gloom.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'vileplume') {
    vileplume.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'paras') {
    paras.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'parasect') {
    parasect.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'venonat') {
    venonat.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'venomoth') {
    venomoth.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'diglett') {
    diglett.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'dugtrio') {
    dugtrio.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'meowth') {
    meowth.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'persian') {
    persian.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'psyduck') {
    psyduck.play()
  } else if (this.props.pokemon.name.toLowerCase() === 'golduck') {
    golduck.play()
  }
}

  // handleClick = (pokemon) => {
  //   this.setState({
  //     showFront: !this.state.showFront
  //   })
  //   // console.log(pokemon)
  //   this.playSound(pokemon)
  // }

  handleFlip = (pokemon) => {
    this.setState({
      showFront: !this.state.showFront
    })
  }


  handleSound = (pokemon) => {
    this.playSound(pokemon)
  }

  render() {
    return (
      // <div className="five wide column">
      //     {(this.state.showFront === true) ? <img src={this.props.pokemon.sprites.front} onClick={() => this.handleClick(this.props.pokemon)} alt="pokemon" /> : <img src={this.props.pokemon.sprites.back} onClick={this.handleClick} alt="pokemon" />}
      //     <br/>
      //     Name: {this.props.pokemon.name} <br/>
      //     Type: {this.props.pokemon.types.map(type => type).join(" - ")} <br/>
      // </div>

      <div className="pokemon-container">
          <div style={ {width:230 ,margin:10, background:'#b4ff82', color:'#8290ff'} } className="pokemon-frame">
          <h1 className="center-text">{this.props.pokemon.name}</h1>
          <div style={ {width:239, margin:'auto'} }>
          <div style={ {width:96,margin:'auto'} }>
              {(this.state.showFront === true) ? <img src={this.props.pokemon.sprites.front} onClick={() => this.handleSound(this.props.pokemon)} alt="pokemon" /> : <img src={this.props.pokemon.sprites.back} onClick={this.handleClick} alt="pokemon" />}
          </div>
          </div>
          <button onClick={() => this.handleFlip(this.props.pokemon)} style={{padding:10}} className="center-text flip-image" data-action="flip-image"><b>FLIP ME DAMMIT!!</b></button>
          </div>
      </div>

    )
  }
}

export default PokemonCard
