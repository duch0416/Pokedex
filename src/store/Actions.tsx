import { statsType, evolutionDataType } from "../types/Types";

export enum ActionT {
  SET_POKEMON__DATA = "set_pokemon_data",
}



export const setPokemonData = (stats: statsType, evolutionData:evolutionDataType) => {
  return {
    type: ActionT.SET_POKEMON__DATA,
    stats: stats,
    evolutionData: evolutionData,
  };
};


