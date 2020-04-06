import * as React from "react";
import styled from "styled-components";

const PokeballImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -23%);
`;

export interface PokeballImgProps {
  color: string;
}

const PokeballImg: React.SFC<PokeballImgProps> = ({ color }) => {
  return (
    <PokeballImgWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="249"
        height="250"
        fill="none"
        viewBox="0 0 249 250"
      >
        <path
          fill={color}
          d="M249 135.152h-64.609c-4.867 28.676-29.829 50.512-59.891 50.512-30.062 0-55.024-21.836-59.891-50.512H0c5.208 64.199 58.96 114.675 124.5 114.675 65.541 0 119.292-50.476 124.5-114.675zm-.118-21.842h-64.739c-5.416-28.001-30.06-49.147-59.643-49.147-29.583 0-54.228 21.146-59.643 49.147H.118C5.972 49.762 59.425 0 124.5 0s118.528 49.762 124.382 113.31zm-82.632 11.604c0 23.058-18.692 41.75-41.75 41.75s-41.75-18.692-41.75-41.75 18.692-41.75 41.75-41.75 41.75 18.692 41.75 41.75z"
          opacity="0.6"
        />
      </svg>
    </PokeballImgWrapper>
  );
};

export default PokeballImg;
