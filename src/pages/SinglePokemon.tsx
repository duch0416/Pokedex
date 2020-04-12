import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps, NavLink } from "react-router-dom";

import { usePokemonData } from "../singlePokemon/actions/usePokemonData";
import { ColorMap} from "../enums/Colors";
import BasicPokemonInfo from "../singlePokemon/components/BasicPokemonInfo";
import DetailPokemonInfo from "../singlePokemon/components/DetailPokemonInfo";
import { Device} from "../enums/Device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.TABLET} {
    min-height: 100vh;
    justify-content: center;
  }
`;
const ColorWrapper = styled.div<{ type: any }>`
  background-color: ${({ type }) => ColorMap.get(type)};
  max-width: 1000px;
  @media ${Device.TABLET} {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 7px 7px 7px;
    border-radius: 30px;
  }
  @media ${Device.TABLET_L} {
    padding: 0px 15px 15px 15px;
  }
  @media ${Device.LAPTOP} {
    width: 75%;
  }
`;
const TopSection = styled.div`
  position: relative;
  padding: 60px 27px 0 27px;
  margin-bottom: 120px;
  @media ${Device.TABLET} {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Arrow = styled.img`
  width: 22px;
  transform: rotate(180deg);
`;

export interface SinglePokemonProps {
  name: string;
}

const SinglePokemon: React.SFC<RouteComponentProps<SinglePokemonProps>> = (
  props
) => {
  const pokName = props.match.params.name;
  const { pokemon } = usePokemonData(pokName);
  // const [pok, setPokemon] = useState<any>()

  return (
    <Wrapper>
      <ColorWrapper type={pokemon && pokemon.types[0]}>
        <TopSection>
          <Arrow src="/images/arrow.svg" />
          <BasicPokemonInfo pokemon={pokemon} />
        </TopSection>
        <DetailPokemonInfo pokemon={pokemon} />
      </ColorWrapper>
    </Wrapper>
  );
};

export default SinglePokemon;
