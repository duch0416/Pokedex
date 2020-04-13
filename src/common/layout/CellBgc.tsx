import * as React from "react";
import styled from "styled-components";

import { ColorMap, Types} from "../../enums/Colors";
import { Device } from "../../enums/Device";

const Background = styled.div<{ type: Types | undefined }>`
    background-color:  ${({ type }) => type  ? `${ColorMap.get(type)}81` : "gray"};
    border-radius: 20px;
    margin-bottom: 10px;
   
    @media ${Device.TABLET} {
    margin-bottom: 20px;
    margin-right: 15px;
  }

  @media ${Device.TABLET_L} {
    margin-bottom: 25px;
  }
`

interface PokemonIdProps {
  type?: Types | undefined;
}

const PokemonId: React.SFC<PokemonIdProps> = ({ children, type }) => {
  return (
  <Background type={type}>{children}</Background>
  );
};

export default PokemonId;
