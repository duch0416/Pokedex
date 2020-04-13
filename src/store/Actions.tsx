import { statsType, evolutionDataType } from "../types/Types";

export enum ActionT {
  SET_POKEMON__DATA = "set_pokemon_data",
  SET_FILTER_DATA = "set_filter_data"
}



export const setPokemonData = (stats: statsType, evolutionData:evolutionDataType) => {
  return {
    type: ActionT.SET_POKEMON__DATA,
    stats: stats,
    evolutionData: evolutionData,
  };
};


export const setFilterData = (phrase:string) => {
  return {
    type: ActionT.SET_FILTER_DATA,
    phrase: phrase
  };
};
