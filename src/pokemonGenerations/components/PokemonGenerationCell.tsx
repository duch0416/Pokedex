import * as React from "react";
import styled from "styled-components";

import PokeballImg from "../../common/PokeballImg";
import { useStartersImgs } from "../actions/useStartersImgs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 111px;
  border-radius: 20px;
  position: relative;
  padding: 5px 13px;
  box-sizing: border-box;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
`;

const PokeballImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  transform: translateX(5%) translateY(15%);
`;

const PokemonStartersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80%;
`;
const PokemonImg = styled.img<{ index: number, gen7: string | undefined }>`
  position: absolute;
  bottom: -20%;
  right: 5%;
  z-index: 2;
  width: ${({ gen7 }) => gen7 ? "96px" : ""};
  height: ${({ gen7 }) => gen7 ? "96px" : ""};
  transform: ${({ index }) =>
    index == 0 ? "translateX(-50%)" : index == 2 ? "translateX(50%)" : ""};
`;

const Title = styled.h2`
  color: #303943;
  font-size: 13px;
  font-family: "Pokemon";
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
`;
export interface PokemonGenerationCellProps {
  title: string;
  pokemonsNames: string[];
  gen7?: string | undefined;
}

const PokemonGenerationCell: React.SFC<PokemonGenerationCellProps> = ({
  title,
  pokemonsNames,
  gen7,
}) => {
  const { startersImgs } = useStartersImgs(pokemonsNames);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <PokemonStartersWrapper>
        {startersImgs.map((pokeImg: string, index: number) => {
          return <PokemonImg key={pokeImg} src={pokeImg} index={index} gen7={gen7} />;
        })}
      </PokemonStartersWrapper>
      <PokeballImgWrapper >
        <PokeballImg color="#dddddd" />
      </PokeballImgWrapper>
    </Wrapper>
  );
};

export default PokemonGenerationCell;
