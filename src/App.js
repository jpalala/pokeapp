import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import "./App.css";
import pokemonLogo from './images/pokemonLogo.png';
class App extends Component {
render() {
    return (
      <div className="App">
        <header className="App-header"><img src={pokemonLogo} /></header>
      </div>
    );
  }
}
export default hot(App);
