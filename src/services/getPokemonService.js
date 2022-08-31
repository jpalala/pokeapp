import axios from 'axios';
function getPokemons() {
 return axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
}
export default getPokemons;