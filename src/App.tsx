import * as React from "react";
import styled from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import Routing from "./navigation/Routing";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routing />
    </>
  );
}

export default App;
