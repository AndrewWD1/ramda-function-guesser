import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { Dispatch } from "redux";
import { setExpectedOutput, setGuess } from "../../redux/actions";
import { ramdaTester } from "../../utils/guesser";
import { isMobile } from "is-mobile";

const Input = styled.input`
  border-radius: 3px;
  font-weight: bold;
  width: 68%;
  padding: 0 0.5rem;
`;

const OutputWrapper = styled.div`
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
  border-radius: 3px;
  color: white;
  ${() =>
    isMobile() &&
    css`
      width: 95%;
    `}
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
        <Select
          value={expectedOutput.type}
          onChange={e => {
            setExpectedOutput({
              ...expectedOutput,
              type: e.target.value
            });
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
