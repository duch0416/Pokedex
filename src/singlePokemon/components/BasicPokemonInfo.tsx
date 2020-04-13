import * as React from "react";
import styled from "styled-components";

import PokemonName from "../../common/layout/PokemonName";
import PokemonTypeBig from "../../singlePokemon/components/PokemonTypeBig";
import PokemonId from "../../common/layout/PokemonId";
import {PokemonInterface} from "../../types/Types"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Id = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const TypesContainer = styled.div`
  display: flex;
`;

export interface BasicPokemonInfoProps {
  pokemon: PokemonInterface;
}

const BasicPokemonInfo: React.SFC<BasicPokemonInfoProps> = ({ pokemon }) => {
  return (
    <Wrapper>
      <PokemonName name={pokemon.name} big="big" />
      <TypesContainer>
        <PokemonTypeBig type={pokemon.types[0]} />
        {pokemon.types[1] && <PokemonTypeBig type={pokemon.types[1]} />}
      </TypesContainer>
      <Id>
        <PokemonId id={pokemon.id} big="big" />
      </Id>
    </Wrapper>
  );
};

export default BasicPokemonInfo;
