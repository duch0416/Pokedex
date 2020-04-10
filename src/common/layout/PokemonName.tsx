import * as React from 'react';
import styled from "styled-components";

import { Device } from "../../enums/Device";


const PokemonNameTxt = styled.p<{big?: string}>`
  font-size: ${({big}) => big ? "36px" : "14px"};
  font-weight: 700;
  color: white;
  text-transform: capitalize;
  @media ${Device.MOBILE_L} {
    font-size: 16px;
  }
  @media ${Device.TABLET} {
    font-size: 20px;
  }
  @media ${Device.TABLET_L} {
    font-size: 24px;
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