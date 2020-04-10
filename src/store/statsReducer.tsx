export enum ActionT {
    SET_POKEMON_STATS = "set_pokemon_stats"
}


export const initialState = {stats: []}


export const statsReducer = (state:any, action:any) => {
    switch(action.type){
        case ActionT.SET_POKEMON_STATS:{
            return{
                stats:  state.stats = action.payload
            }
        }
        default: {
            return state
        }    
    }
}