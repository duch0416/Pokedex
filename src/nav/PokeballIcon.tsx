import * as React from "react";
import styled from "styled-components";

const Picon = styled.img<{ active: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  z-index: 4;
  cursor: pointer;
  transition: ease 0.2s;
  transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
`;

export interface PokeballIconProps {
  navActive: boolean;
  setNavActive: any;
}

const PokeballIcon: React.SFC<PokeballIconProps> = ({setNavActive,navActive}) => {
    console.log(navActive)
  const handleClick = () => {
    setNavActive(!navActive);
  };
  return (
    <Picon
      onClick={handleClick}
      src="/images/pokeball-icon.svg"
      active={navActive}
    />
  );
};

export default PokeballIcon;
