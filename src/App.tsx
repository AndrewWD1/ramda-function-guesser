import React from "react";
import { isMobile } from "is-mobile";
import styled, { css } from "styled-components";

import ArgsContainer from "./Containers/args/args.container";
import OutputContainer from "./Containers/output/output.container";

const WholeApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #282a36;
  ${() =>
    isMobile() &&
    css`
      flex-direction: column;
      justify-content: start;
      align-items: center;
    `}
`;

const App = () => {
  return (
    <WholeApp>
      <div
        className="navbar navbar-inverse"
        style={{ margin: "0", borderRadius: "0px", backgroundColor: "#884499" }}
        role="navigation"
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="http://ramdajs.com">
            <strong>Ramda </strong>
            <span className="version">v0.27.0</span>
          </a>
        </div>
        <div className="navbar-collapse collapse"></div>
      </div>
      <AppWrapper>
        <ArgsContainer />
        <OutputContainer />
      </AppWrapper>
    </WholeApp>
  );
};

export default App;
