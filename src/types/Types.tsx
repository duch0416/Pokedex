import {Types} from "../enums/Colors"
export type statsType = {
    stats: Array<string>;
  };
  
export type evolutionDataType = {
      evolutionData: { evolutionsNames: Array<string>; imgs: Array<string> }
  }

  export interface PokemonInterface {
    id: number;
    name: string;
    img: string;
    types: Array<Types>;
    stats: Array<string>;
  }