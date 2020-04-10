import * as React from 'react';
import styled from "styled-components"

import { Device } from "../../enums/Device";

const Wrapper = styled.div`
    background-color: #ffffff32;
    padding:  2px 20px;
    margin-right: 7px;
    border-radius: 38px;
`
const Typetxt = styled.p`
    color: white;
    font-size: "12px";
   
`

export interface PokemonTypeBigProps {
    type: string;
}
 
const PokemonTypeBig: React.SFC<PokemonTypeBigProps> = ({type}) => {
    return ( 
        <Wrapper>
            <Typetxt>{type}</Typetxt>
        </Wrapper>
     );
}
 
export default PokemonTypeBig;