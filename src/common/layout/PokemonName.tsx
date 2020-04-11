import * as React from 'react';
import styled from "styled-components";

import { Device } from "../../enums/Device";


const PokemonNameTxt = styled.p<{big?: string}>`
  font-size: ${({big}) => big ? "2.5rem" : "0.9rem"};
  font-weight: 700;
  color: white;
  text-transform: capitalize;
   @media ${Device.TABLET} {
    font-size: ${({big}) => big ? "2.5rem" : "1.5rem"}
  }
`;

export interface PokemonNameProps {
    name: string
    big?: string
}
 
const PokemonName: React.SFC<PokemonNameProps> = ({name, big}) => {
return ( <PokemonNameTxt big={big}>{name}</PokemonNameTxt> );
}
 
export default PokemonName;