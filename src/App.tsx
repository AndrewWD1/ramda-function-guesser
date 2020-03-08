import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ArgsContainer from "./Containers/args/args.container";
import OutputContainer from "./Containers/output/output.container";
import JsonAlert from "./Components/json-alert/json-alert.component";

import { Dispatch } from "redux";
import { confirmJsonAlert } from "./redux/actions";

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
`;

const App: React.FC<{
  JsonAlertToggle: boolean;
  confirmJsonAlert: Function;
}> = ({ JsonAlertToggle, confirmJsonAlert }) => {
  useEffect(() => {
    document.addEventListener("click", () => confirmJsonAlert());
  });

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
      {!JsonAlertToggle && <JsonAlert />}
      <AppWrapper>
        <ArgsContainer />
        <OutputContainer />
      </AppWrapper>
    </WholeApp>
  );
};

const mapStateToProps = (state: any) => ({
  JsonAlertToggle: state.JsonAlertToggle
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  confirmJsonAlert: () => dispatch(confirmJsonAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
