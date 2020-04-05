import { pokedex } from "../ApiConfig";

export const getSinglePokemon = async (pokemonName: string) => {
  const pokemon = await pokedex.getPokemonByName(pokemonName);
  return pokemon;
};
