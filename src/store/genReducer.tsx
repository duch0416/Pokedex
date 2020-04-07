import {createContext} from "react"

export enum ActionT {
    CHANGE_GENERATION = "change_generation"
}


export const initialState = {genNum: 1}


export const genReducer = (state:any, action:any) => {
    switch(action.type){
        case ActionT.CHANGE_GENERATION:{
            console.log(action.payload)
            return{
                genNum: state.genNum + 1
            }
        }
        default: {
            return state
        }    
    }
}