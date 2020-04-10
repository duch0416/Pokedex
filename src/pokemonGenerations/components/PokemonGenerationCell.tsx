import * as React from "react";
import styled from "styled-components";
import {useContext, useReducer} from "react"

import PokeballImg from "../../common/layout/PokeballImg";
import { useStartersImgs } from "../actions/useStartersImgs";
import {  NavLink } from "react-router-dom";
import {paths} from "../../navigation/paths"
import CellBgc from "../../common/layout/CellBgc";



const Wrapper = styled(NavLink)`
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
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
  text-decoration: none;
  cursor: pointer;
  background-color: white;
  transition: ease 0.2s;
  &:hover {
    transform: translatex(5%) translateY(-5%);
  }
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
const PokemonImg = styled.img<{ index: number; title: string, dark: string | undefined}>`
  position: absolute;
  bottom: -20%;
  filter: ${({dark }) => dark  ? "brightness(0)" : ""};
  right: 5%;
  z-index: 2;
  width: ${({ title }) => (title === "Generation 7" ? "96px" : "")};
  height: ${({ title}) => (title === "Generation 7" ? "96px" : "")};
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
  genNum: number;
  dark?: string | undefined;
}

const PokemonGenerationCell: React.SFC<PokemonGenerationCellProps> = ({
  title,
  pokemonsNames,
  dark,
  genNum
}) => {
  const { startersImgs } = useStartersImgs(pokemonsNames);
 
  return (
    <CellBgc>
      <Wrapper  to={`${paths.POKEMONS}/${genNum}`} > 
        <Title>{title}</Title>
        <PokemonStartersWrapper>
          {startersImgs.map((pokeImg: string, index: number) => {
            return (
              <PokemonImg
                key={pokeImg}
                src={pokeImg}
                index={index}
                title={title}
                dark={dark}
              />
            );
          })}
        </PokemonStartersWrapper>
        <PokeballImgWrapper>
          <PokeballImg color="#dddddd" />
        </PokeballImgWrapper>
      </Wrapper>
    </CellBgc>
  );
};

export default PokemonGenerationCell;
