import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps, NavLink } from "react-router-dom";

import { usePokemonData } from "../singlePokemon/actions/usePokemonData";
import { ColorMap, Types } from "../enums/Colors";
import BasicPokemonInfo from "../singlePokemon/components/BasicPokemonInfo";
import DetailPokemonInfo from "../singlePokemon/components/DetailPokemonInfo";
import SpinningPokeball from "../common/layout/spinningPokeball";
import { Device } from "../enums/Device";
import FetchingError from "../common/layout/ErrorMsg"
import {ErrorMsgs} from "../enums/ErrorMsgs"
import Navigation from "../navigation/Navigation"
import {Paths} from "../enums/Paths"
import {PokemonContext} from "../store/store"
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media ${Device.TABLET} {
    min-height: 100vh;
    justify-content: center;
  }
`;
const ColorWrapper = styled.div<{ type: Types }>`
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


interface SinglePokemonProps {
  name: string;
  generation: string;
  pageNum: string;
}

const SinglePokemon: React.SFC<RouteComponentProps<SinglePokemonProps>> = (props) => {
  const pokName = props.match.params.name;
  const generation = props.match.params.generation;
  const pageNum = props.match.params.pageNum;

  const { pokemon, isLoading, fetchingError,state } = usePokemonData(pokName);

  return (
    <>
      {pokemon.id && pokName === pokemon.name ? (
        <Wrapper>
          {isLoading ? (<SpinningPokeball />) :
           (<>
            <Navigation generation={generation}/>
            <ColorWrapper type={pokemon.types[0]}>
              <TopSection>
                <NavLink to={`${Paths.POKEMONS}/${generation}/${pageNum}`}>
                  <Arrow src="/images/arrow.svg" />
                </NavLink>
                <BasicPokemonInfo pokemon={pokemon} />
              </TopSection>
              <PokemonContext.Provider  value={state}>
                <DetailPokemonInfo
                  pokemon={pokemon}
                  fetchingError={fetchingError}
                />
                </PokemonContext.Provider>
              </ColorWrapper>
            </>)}
        </Wrapper>) : (<><Navigation generation={generation}/><FetchingError msg={ErrorMsgs.INVALID_POKEMON_NAME} big="big"/></>)}
    </>
  );
};

export default SinglePokemon;
