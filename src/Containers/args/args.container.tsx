import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setArgs, addArgument, removeArgument } from "../../redux/actions";
import * as R from "ramda";

const Input = styled.input`
  border: 1px solid blac;
  border-radius: 3px;
`;

const ArgsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div``;

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
    <form>
      <ArgsWrapper>
        {args.map((arg, index) => (
          <>
            <Input
              type="text"
              value={arg.value}
              key={index}
              onChange={e => {
                if (args) {
                  if (args.length === 0) setArgs([e.target.value]);
                  else
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
                }
              }}
            />
          </>
        ))}
        <Button onClick={() => addArgument()}>Add an Argument</Button>
        <Button onClick={() => removeArgument()}>Remove an argument</Button>
      </ArgsWrapper>
    </form>
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
