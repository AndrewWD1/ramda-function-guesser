import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { Dispatch } from "redux";
import { setArgs, addArgument, removeArgument } from "../../redux/actions";
import * as R from "ramda";
import { isMobile } from "is-mobile";

const Input = styled.input`
  font-weight: bold;
  border-radius: 3px;
  width: 68%;
  padding: 0 0.5rem;
`;

const ArgsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  ${() =>
    isMobile() &&
    css`
      width: 95%;
    `}
`;

const SingleArgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45vw;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  ${() =>
    isMobile() &&
    css`
      width: 95%;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px 10px;
  margin: 5px;
  color: white;
`;

const Select = styled.select`
  border-radius: 5px;
  display: "flex";
  justify-content: "space-around";
  width: 28%;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 2px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;

interface IProps {
  args: any[];
  setArgs: Function;
  addArgument: Function;
  removeArgument: Function;
}

const ArgsContainer: React.FC<IProps> = ({
  args,
  setArgs,
  addArgument,
  removeArgument
}) => {
  return (
    <ArgsWrapper>
      {args.map((arg, index) => (
        <SingleArgWrapper>
          <Select
            value={arg.type}
            onChange={e => {
              setArgs(
                R.adjust(
                  index,
                  x => ({
                    ...x,
                    type: e.target.value
                  }),
                  args
                )
              );
            }}
          >
            <option value="string">String </option>
            <option value="number">number </option>
            <option value="boolean">boolean</option>
            <option value="object">object</option>
            <option value="function">function</option>
            <option value="array">array</option>
          </Select>
          <Input
            type="text"
            value={arg.value}
            key={index}
            onChange={e => {
              setArgs(
                R.adjust(
                  index,
                  x => ({
                    ...x,
                    value: e.target.value
                  }),
                  args
                )
              );
            }}
          />
        </SingleArgWrapper>
      ))}
      <ButtonWrapper>
        <Button onClick={() => addArgument()}>Add an Argument</Button>
        <Button onClick={() => removeArgument()}>Remove an argument</Button>
      </ButtonWrapper>
    </ArgsWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  args: state.args
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setArgs: (newArgs: any[]) => dispatch(setArgs(newArgs)),
  addArgument: () => dispatch(addArgument()),
  removeArgument: () => dispatch(removeArgument())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArgsContainer);
