import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{big?: string}>`
    width: 100%;
    height: ${({big}) => big ? "100vh" : "100%"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const PikachuImg = styled.img`
  width: 160px;
`;
const ErrorTxt = styled.h2`
  font-size: 30px;
`;

interface ErrorMsgInterface {
  msg: string;
  big?: string;
}

const ErrorMsg: React.SFC<ErrorMsgInterface> = ({msg, big}) => {
  return (
    <Wrapper big={big}>
      <ErrorTxt>{msg}</ErrorTxt>
      <PikachuImg src="/images/pikachu-error.png" />
    </Wrapper>
  );
};

export default ErrorMsg;
