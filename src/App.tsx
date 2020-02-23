import React from "react";
import styled from "styled-components";

import ArgsContainer from "./Containers/args/args.container";
import OutputContainer from "./Containers/output/output.container";

const AppWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(51, 68, 94);
`;

const App = () => {
  return (
    <AppWrapper>
      <ArgsContainer />
      <OutputContainer />
    </AppWrapper>
  );
};

export default App;
