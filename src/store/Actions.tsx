export enum ActionT {
    SET_POKEMON_STATS = "set_pokemon_stats"
}

export const setPokemonStats = (data: any) => {
    return {
        type: ActionT.SET_POKEMON_STATS,
        payload: data,
    }
}

