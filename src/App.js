import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="Pokedex">
        <Pokedex/>;
      </div>
    );
  }
}

export default App;
