import * as React from 'react';
import {useContext} from 'react';
import styled from "styled-components"

import {pokemonStatsContext} from "../../store/store"
import {pokedex} from "../../api/ApiConfig"
import StatBar from "./statBar"

const Wrapper = styled.div`
    width: 100%;
    margin-top: 26px;
    display: flex;
    justify-content: space-around;
`
const StatsColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const PokeStat = styled.p<{name?: string}>`
    color: #303943;
    opacity:${({name}) => name ? "0.6" : "1"};
`

export interface PokemonStatsProps {
    
}
 
const PokemonStats: React.SFC<PokemonStatsProps> =  () => {
    const stats = useContext(pokemonStatsContext).stats

    return ( 
        <Wrapper>
            <StatsColumn>
                {stats.map((item:any) => {
                    if(item.stat.name == "special-defense" || item.stat.name == "special-attack"){
                        const shortcut = item.stat.name.split('').splice(8,3).join("")
                        return <PokeStat name="name" key={item.stat.name}>{`Sp. ${shortcut}`}</PokeStat>
                    }else {
                    return <PokeStat name="name" key={item.stat.name}>{item.stat.name}</PokeStat>
                    }
                })}
            </StatsColumn>
            <StatsColumn>
                {stats.map((item:any) => {
                    return <PokeStat key={item.stat.base_stat}>{item.base_stat}</PokeStat>
                })}
            </StatsColumn>
            <StatsColumn>
                {stats.map((item:any) => {
                    if(item.stat.name == "attack" || item.stat.name == "speed" || item.stat.name == "hp"){
                        return <StatBar key={item.stat.url} red="red" baseStat={item.base_stat}/>
                    }else{
                    return <StatBar key={item.stat.url} baseStat={item.base_stat}/>
                    }
                })}
            </StatsColumn>
        </Wrapper>
     );
}
 
export default PokemonStats;