import {ActionT} from "./Actions"

export const initialStatsState = {stats: []}


export const statsReducer = (state:any, action:any) => {
    switch(action.type){
        case ActionT.SET_POKEMON_STATS:{
            console.log(action.payload)
            return{
                stats:  state.stats = action.payload
            }
        }
        default: {
            return state
        }    
    }
}