import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { confirmJsonAlert } from "../../redux/actions";

const JsonAlertWrapper = styled.div`
  background-color: #e1d0e6;
  color: #8d4c9d;
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  width: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 30%;
  margin-top: -50px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ConfirmButton = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  background-color: #a766b7;
  color: #e1d0e6;
  cursor: pointer;
`;

const JsonAlert: React.FC<{ confirmJsonAlert: Function }> = ({
  confirmJsonAlert
}) => (
  <JsonAlertWrapper>
    Please enter objects as JSON <br></br>
    <ConfirmButton onClick={() => confirmJsonAlert()}>confirm</ConfirmButton>
  </JsonAlertWrapper>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  confirmJsonAlert: () => dispatch(confirmJsonAlert())
});

export default connect(null, mapDispatchToProps)(JsonAlert);
