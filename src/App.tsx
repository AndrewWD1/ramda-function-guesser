import React, { useState } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { ramdaTester } from "./utils/guesser";
import "./App.css";

const AppWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: rgb(51, 68, 94);
`;

const ArgsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutputAndFunctionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid blac;
  border-radius: 3px;
`;

const Button = styled.button``;

const App = () => {
  const [args, setArgs] = useState(["value"] as any[]);

  const [expectedOutput, setExpectedOutput] = useState(
    "Expected Output" as any
  );

  return (
    <AppWrapper>
      <ArgsWrapper>
        <form>
          {args.map(arg => (
            <Input
              type="text"
              value={args[0]}
              onChange={e => {
                if (args.length === 0) setArgs([e.target.value]);
                else setArgs(R.adjust(0, x => e.target.value, args));
              }}
            />
          ))}
        </form>
      </ArgsWrapper>
      <OutputAndFunctionWrapper>
        <form>
          <Input
            type="text"
            value={expectedOutput}
            onChange={e => setExpectedOutput(e.target.value)}
          />
        </form>
        <Button onClick={() => console.log(ramdaTester(args, expectedOutput))}>
          Test
        </Button>
      </OutputAndFunctionWrapper>
    </AppWrapper>
  );
};

export default App;
