import {createContext} from "react"
import {initialStatsState} from "./PokemonReducer"

export const pokemonContext = createContext(initialStatsState)
