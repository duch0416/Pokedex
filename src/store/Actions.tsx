export enum ActionT {
    SET_POKEMON__DATA  = "set_pokemon_data",
}

export const setPokemonData = (stats: any, evolutionData:any) => {
    return {
        type: ActionT.SET_POKEMON__DATA,
        stats: stats,
        evolutionData: evolutionData
    }
}



