import {ActionT} from "./statsReducer"

export const setPokemonStats = (data: any) => {
    return {
        type: ActionT.SET_POKEMON_STATS,
        payload: data,
    }
}