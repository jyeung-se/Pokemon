import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PokemonContainer from './Containers/PokemonContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonContainer />
      </div>
    );
  }
}

export default App;
