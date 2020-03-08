import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setExpectedOutput, setGuess } from "../../redux/actions";
import { ramdaTester } from "../../utils/guesser";
import { RadioGroup, Radio } from "react-radio-group";

const Input = styled.input`
  border-radius: 3px;
  font-weight: bold;
`;

const OutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
`;

const Button = styled.div`
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px 10px;
  margin: 5px;
  color: white;
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
const Label = styled.label`
  font-size: 1.3rem;
  text-align: center;
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
          <Label>
            <Radio value="string" /> <br />
            String
          </Label>
          <Label>
            <Radio value="number" />
            <br />
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
        <div style={{ color: "white" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://ramdajs.com/docs/#${x}`}
          >
            {x}
          </a>
        </div>
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
