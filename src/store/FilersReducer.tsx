import {ActionT} from "./Actions"

export const initialFiltersState = {phrase: ""}


export const FiltersReducer = (state: {phrase: string}, action:any) => {
    switch(action.type){
        case ActionT.SET_FILTER_DATA:{
            console.log(action.phrase)
            return{
                phrase: state.phrase = action.phrase
            }
        }
        default: {
            return state
        }    
    }
}