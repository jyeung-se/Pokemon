import React, {Component} from 'react'

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state={
      selectedType: null,
    }
  }

  handleChange = (event) => {
    this.setState({
      selectedType: event.target.value
    },() => console.log("selectedType state is", this.state.selectedType))
  }

  render() {
    return (
      <select name="types" onChange={this.handleChange}>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="normal">Normal</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="bug">Bug</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="steel">Steel</option>
        <option value="dragon">Dragon</option>
      </select>
    )
  }
}

export default Dropdown
