import * as React from "react";
import styled from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import Routing from "./navigation/Routing";

// const Wrapper = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;


function App() {
  return (
    <>
      <GlobalStyle />
      <Routing />
    </>
  );
}

export default App;
