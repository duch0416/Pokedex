import {createContext} from "react"
import {initialPokemonsState} from "./PokemonReducer"
import {initialFiltersState} from "./FilersReducer"

export const pokemonContext = createContext(initialPokemonsState)
export const filtersContext = createContext(initialFiltersState)
