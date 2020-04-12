import * as React from "react";
import styled from "styled-components";

import { Colors } from "../../enums/Colors";
import { Device } from "../../enums/Device";

const IdTxt = styled.p<{big?: string}>`
  font-size: ${({big}) => big ? "1.3rem" :  "14px"};
  color: ${({big}) => big ? Colors.WHITE : Colors.BLACK + "36"};
  font-weight: 700;
  @media ${Device.TABLET} {
    font-size: ${({big}) => big ? "1.5rem" :  "1.2rem"};
  }
`;

export interface PokemonIdProps {
  id: number;
  big?: string;
}

const PokemonId: React.SFC<PokemonIdProps> = ({ id, big }) => {
  return (
    <IdTxt big={big}>{id < 100 ? (id < 10 ? `#00${id}` : `#0${id}`) : `#${id}`}</IdTxt>
  );
};

export default PokemonId;
