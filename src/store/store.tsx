import {createContext} from "react"
import {initialPokemonsState} from "./PokemonReducer"

export const PokemonContext = createContext(initialPokemonsState)

