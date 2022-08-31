import { hot } from 'react-hot-loader/root';
import React from "react";
import "./App.css";
import pokemonLogo from "./images/pokemonLogo.png";
import PokemonList from "./PokemonList";

function App() {

  return (
        <div className="App">
          <header className="App-header"><img src={pokemonLogo} /></header>
          <PokemonList></PokemonList>
        </div>
      );
  }
  export default hot(App);
