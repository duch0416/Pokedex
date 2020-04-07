import {createContext} from "react"
import {initialState} from "./genReducer"

export const pokemonGenContext = createContext(initialState)

export const Provider = pokemonGenContext.Provider
export const Consumer = pokemonGenContext.Consumer