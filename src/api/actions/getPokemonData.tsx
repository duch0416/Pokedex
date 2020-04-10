import { pokedex } from "../ApiConfig";

export const getSinglePokemon = async (pokemonName: string) => {
  const pokemon = await pokedex.getPokemonByName(pokemonName);
  return pokemon;
};

export const getPokemonArray = async (interval: {limit: number, offset: number} | undefined) => {
  const pokemonArray = await pokedex.getPokemonsList(interval);
  return pokemonArray;
};

export const getEvolutionChain = async (name: string) => {
  const species = await pokedex.getPokemonSpeciesByName(name)
  const evolutionChain = await pokedex.resource(species.evolution_chain.url)
  return evolutionChain
}

