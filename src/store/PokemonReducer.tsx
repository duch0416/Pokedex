import {ActionT} from "./Actions"
import {statsType, evolutionDataType} from "../types/Types"

export const initialStatsState = {stats: [], evolutionData: { evolutionsNames: [], imgs: []}}


export const PokemonReducer = (state:{stats: statsType, evolutionData: evolutionDataType}, action:any) => {
    switch(action.type){
        case ActionT.SET_POKEMON__DATA:{
            return{
                ...state,
                stats:  state.stats = action.stats,
                evolutionData: state.evolutionData = action.evolutionData
            }
        }
        default: {
            return state
        }    
    }
}