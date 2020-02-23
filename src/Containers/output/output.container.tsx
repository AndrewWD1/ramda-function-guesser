import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setExpectedOutput, setGuess } from "../../redux/actions";
import { ramdaTester } from "../../utils/guesser";
import { RadioGroup, Radio } from "react-radio-group";

const Input = styled.input`
  border: 1px solid blac;
  border-radius: 3px;
`;

const OutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px 10px;
  margin: 5px;
`;

const SingleArgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49vw;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
`;

interface IProps {
  args: any[];
  expectedOutput: { type: "string"; value: "string" };
  setExpectedOutput: Function;
  guess: any[];
  setGuess: Function;
}

const OutputContainer: React.FC<IProps> = ({
  args,
  expectedOutput,
  setExpectedOutput,
  guess,
  setGuess
}) => {
  return (
    <OutputWrapper>
      <SingleArgWrapper>
        <RadioGroup
          name={`output-type`}
          selectedValue={expectedOutput.type}
          onChange={(value: string) => {
            setExpectedOutput({
              ...expectedOutput,
              type: value
            });
          }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%"
          }}
        >
          <label>
            <Radio value="string" />
            String
          </label>
          <label>
            <Radio value="number" />
            number
          </label>
          <label>
            <Radio value="boolean" />
            boolean
          </label>
          <label>
            <Radio value="object" />
            object
          </label>
          <label>
            <Radio value="function" />
            function
          </label>
          <label>
            <Radio value="array" />
            array
          </label>
        </RadioGroup>
        <Input
          type="text"
          value={expectedOutput.value}
          onChange={e =>
            setExpectedOutput({
              ...expectedOutput,
              value: e.target.value
            })
          }
        />
      </SingleArgWrapper>
      <Button onClick={() => setGuess(ramdaTester(args, expectedOutput))}>
        Test
      </Button>
      {guess.map(x => (
        <div>{x}</div>
      ))}
    </OutputWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  args: state.args,
  expectedOutput: state.expectedOutput,
  guess: state.guess
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setExpectedOutput: (newExpectedOutput: any) =>
    dispatch(setExpectedOutput(newExpectedOutput)),
  setGuess: (newGuess: any[]) => dispatch(setGuess(newGuess))
});

export default connect(mapStateToProps, mapDispatchToProps)(OutputContainer);
