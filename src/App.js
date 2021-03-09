import React, { Component } from 'react';
import './App.css';

import Conversor from "./Components/Conversor"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Conversor de moeda</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        </header>
      </div>
    );
  }
}

export default App;