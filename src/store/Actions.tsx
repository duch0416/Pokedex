import {ActionT} from "./genReducer"

export const changePokemonGeneration = (gen: number) => {
    return {
        type: ActionT.CHANGE_GENERATION,
        payload: gen,
    }
}