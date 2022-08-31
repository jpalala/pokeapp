import React from 'react';
import ReactDOM from 'react-dom';
 
 const PokemonImg = ({pokemonId}) => {
  const imgBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back";
  const imgUrl = `${imgBaseUrl}/${pokemonId}.png`;
  return  <img src={imgUrl} />
}

export default PokemonImg;
