import * as React from "react";
import styled from "styled-components";

import PokemonMiniature from "../pokemonList/components/PokemonMiniature";

export interface PokemonsPageProps {}

const PokemonsPage: React.SFC<PokemonsPageProps> = () => {
  return <PokemonMiniature />;
};

export default PokemonsPage;
