import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const PikachuImg = styled.img`
  width: 160px;
`;
const ErrorMsg = styled.h2`
  font-size: 30px;
`;

const FetchingErr: React.SFC = () => {
  return (
    <Wrapper>
      <ErrorMsg>Error</ErrorMsg>
      <PikachuImg src="/images/pikachu-error.png" />
    </Wrapper>
  );
};

export default FetchingErr;
