import * as React from "react";
import styled from "styled-components";

import PokeballImg from "../../common/layout/PokeballImg";
import { useStartersImgs } from "../actions/useStartersImgs";
import {  NavLink } from "react-router-dom";
import {Paths} from "../../enums/Paths"
import CellBgc from "../../common/layout/CellBgc";
import {Device} from "../../enums/Device"



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
    transform: translatex(3%) translateY(-3%);
  }
  @media ${Device.MOBILE_M}{
    width: 160px;
    height: 120px;
  }
  @media ${Device.TABLET}{
    width: 220px;
    height: 160px;
  }
  @media ${Device.LAPTOP}{
    width: 250px;
    height: 180px;
  }
`;

const PokeballImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  transform: translateX(5%) translateY(15%);
  @media ${Device.TABLET}{
    width: 100px;
    height: 100px;
  }
  @media ${Device.LAPTOP}{
    width: 120px;
    height: 120px;
  }
`;

const PokemonStartersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80%;
`;
const PokemonImg = styled.img<{ index: number; title: string}>`
  position: absolute;
  bottom: -20%;
  right: 50%;
  z-index: 2;
  width: ${({ title }) => (title === "Generation 7" ? "96px" : "")};
  height: ${({ title}) => (title === "Generation 7" ? "96px" : "")};
  transform: ${({ index }) =>
    index === 0 ? "translateX(100%)" : index === 1 ? "translateX(50%)" : "translateX(0%)"};
  @media ${Device.TABLET}{
    width: 130px;
    height: 130px;
  }
  @media ${Device.LAPTOP}{
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h2`
  color: #303943;
  font-size: 13px;
  font-family: "Pokemon";
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
  @media ${Device.TABLET}{
    margin-top: 20px;
    font-size: 18px;
  }
`;

interface PokemonGenerationCellProps {
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
      <Wrapper  to={`${Paths.POKEMONS}/${genNum}/1`} > 
        <Title>{title}</Title>
        <PokemonStartersWrapper>
          {startersImgs.map((pokeImg: string, index: number) => {
            return (
              <PokemonImg
                key={pokeImg}
                src={pokeImg}
                index={index}
                title={title}
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
