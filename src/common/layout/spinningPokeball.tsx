import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 100px;
`;
const PokeballImg = styled.img`
  animation: rotate 0.7s ease infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinningPokeball: React.SFC = () => {
  return (
    <Wrapper>
      <PokeballImg src="/images/pokeball-icon.svg" />
    </Wrapper>
  );
};

export default SpinningPokeball;
