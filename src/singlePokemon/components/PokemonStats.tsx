import * as React from 'react';
import {useContext} from 'react';
import styled from "styled-components"

import {PokemonContext} from "../../store/store"
import StatsBar from "./StatsBar"
import {Device} from "../../enums/Device"

const Wrapper = styled.div`
    width: 100%;
    margin-top: 26px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 25px;
`
const StatsColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const PokeStat = styled.p<{name?: string}>`
    color: #303943;
    opacity:${({name}) => name ? "0.6" : "1"};
    text-transform: capitalize;
    font-size: 14px;
    margin-top: 10px;
    @media ${Device.MOBILE_L}{
        font-size: 1.2rem;
    }
`


 
const PokemonStats: React.SFC =  () => {
    const stats = useContext(PokemonContext).stats
   
    return ( 
        <Wrapper>
            <StatsColumn>
                {stats.map((item:any) => {
                    if(item.stat.name === "special-defense" || item.stat.name === "special-attack"){
                        const shortcut = item.stat.name.split('').splice(8,3).join("")
                        return <PokeStat name="name" key={item.stat.name}>{`sp. ${shortcut}`}</PokeStat>
                    }else {
                    return <PokeStat name="name" key={item.stat.name}>{item.stat.name}</PokeStat>
                    }
                })}
            </StatsColumn>
            <StatsColumn>
                {stats.map((item:any) => {
                    return <PokeStat key={item.stat.name}>{item.base_stat}</PokeStat>
                })}
            </StatsColumn>
            <StatsColumn>
                {stats.map((item:any) => {
                    if(item.stat.name === "attack" || item.stat.name === "speed" || item.stat.name === "hp"){
                        return <StatsBar key={item.stat.name} red="red" baseStat={item.base_stat}/>
                    }else{
                    return <StatsBar key={item.stat.name} baseStat={item.base_stat}/>
                    }
                })}
            </StatsColumn>
        </Wrapper>
     );
}
 
export default PokemonStats;