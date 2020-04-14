import {createContext} from "react"
import {initialPokemonsState} from "./PokemonReducer"

export const pokemonContext = createContext(initialPokemonsState)

