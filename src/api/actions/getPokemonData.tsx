import { pokedex } from "../ApiConfig";

export const getSinglePokemon = async (pokemonName: string) => {
  const pokemon = await pokedex.getPokemonByName(pokemonName);
  return pokemon;
};

export const getPokemonArray = async (interval: {limit: number, offset: number} | undefined) => {
  const pokemonArray = await pokedex.getPokemonsList(interval);
  return pokemonArray;
};

export const test = async () => {
    console.log(await pokedex.getCharacteristicById(1))
};
