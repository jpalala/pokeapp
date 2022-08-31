import React from "react";
import getPokemons from "./services/getPokemonService";
import PokeImg from "./PokeImg";
class PokemonList extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    const results = getPokemons().then(res => {
      const pokemons =  res.data.results;
      pokemons.forEach((pokemon, index) => {
        pokemon["id"] = index + 1;
      })
      this.setState({pokemons: pokemons});
    }); 
    //console.log(this.state.pokemons);
  }
  
  render() {

    return (<div>
      {
        this.state.pokemons.map(monster => {
        return (
          <div key={monster.id}>
            <PokeImg pokemonId={monster.id} />
            <br />
            {monster.name}
          </div>
        )})
      }
    </div>
    )
  }
}
export default PokemonList;