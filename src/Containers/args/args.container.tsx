import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setArgs, addArgument, removeArgument } from "../../redux/actions";
import * as R from "ramda";
import { RadioGroup, Radio } from "react-radio-group";

const Input = styled.input`
  font-weight: bold;
  border-radius: 3px;
`;

const ArgsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
`;

const SingleArgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45vw;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  color: white;
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
const Label = styled.label`
  font-size: 1.3rem;
  text-align: center;
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
          <RadioGroup
            name={`${index}-type`}
            selectedValue={arg.type}
            onChange={(value: string) => {
              setArgs(
                R.adjust(
                  index,
                  x => ({
                    ...x,
                    type: value
                  }),
                  args
                )
              );
            }}
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "70%"
            }}
          >
            <Label>
              <Radio value="string" />
              <br />
              String
            </Label>
            <Label>
              <Radio value="number" /> <br />
              number
            </Label>
            <Label>
              <Radio value="boolean" />
              <br />
              boolean
            </Label>
            <Label>
              <Radio value="object" />
              <br />
              object
            </Label>
            <Label>
              <Radio value="function" />
              <br />
              function
            </Label>
            <Label>
              <Radio value="array" />
              <br />
              array
            </Label>
          </RadioGroup>
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
