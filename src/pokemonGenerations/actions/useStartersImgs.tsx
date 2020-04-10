import { useState, useEffect } from "react";

import {getSinglePokemon} from "../../api/actions/getPokemonData"



export const useStartersImgs = (startersNames: any) => {
    const [startersImgs, setStartersImgs] = useState<Array<string>>([])

    const getStartersImgs = async () => {
            startersNames.map(async (pokeName: string) => {
                const pokemon = await getSinglePokemon(pokeName)
                setStartersImgs((prevState:any) => {
                   return  [...prevState, pokemon.sprites.front_default]
                })
            });
          
    }
      
    useEffect(() => {
        getStartersImgs()
    }, [])

    return {
        startersImgs
    }
}