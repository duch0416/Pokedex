import {createContext} from "react"
import {initialStatsState} from "./statsReducer"

export const pokemonStatsContext = createContext(initialStatsState)
