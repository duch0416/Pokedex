import {createContext} from "react"
import {initialState} from "./statsReducer"

export const pokemonStatsContext = createContext(initialState)

