import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setExpectedOutput, setGuess } from "../../redux/actions";
import { ramdaTester } from "../../utils/guesser";

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

interface IProps {
  args: any[];
  expectedOutput: any;
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
      <form>
        <Input
          type="text"
          value={expectedOutput}
          onChange={e => setExpectedOutput(e.target.value)}
        />
      </form>
      <Button
        onClick={() =>
          setGuess(
            ramdaTester(
              args.map(x => x.value),
              expectedOutput
            )
          )
        }
      >
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
