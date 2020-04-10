import * as React from "react";
import styled from "styled-components";

import { ColorMap, Colors } from "../../enums/Colors";
import { Device } from "../../enums/Device";

const Background = styled.div<{ type: any }>`
    background-color:  ${({ type }) => type ? `${ColorMap.get(type)}81` : "gray"};
    border-radius: 20px;
    margin-bottom: 10px;
    @media ${Device.TABLET} {
    margin-bottom: 15px;
  }

  @media ${Device.TABLET_L} {
    margin-bottom: 20px;
  }
`

export interface PokemonIdProps {
  type?: string;
}

const PokemonId: React.SFC<PokemonIdProps> = ({ children, type }) => {
  return (
  <Background type={type}>{children}</Background>
  );
};

export default PokemonId;
