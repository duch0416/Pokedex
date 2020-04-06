import { pokedex } from "../ApiConfig";

export const getSinglePokemon = async (pokemonName: string) => {
  const pokemon = await pokedex.getPokemonByName(pokemonName);
  return pokemon;
};

export const getPokemonArray = async (interval: {limit: number, offset: number}) => {
  const pokemonArray = await pokedex.getPokemonsList(interval);
  return pokemonArray;
};
