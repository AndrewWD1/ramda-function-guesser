import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { Dispatch } from "redux";
import { setArgs, addArgument, removeArgument } from "../../redux/actions";
import { isMobile } from "is-mobile";
import { DraggableArg } from "../../Components/draggable-arg/draggable-arg.component";
import update from "immutability-helper";

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
  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = args[dragIndex];
      console.log(hoverIndex, dragIndex);
      setArgs(
        update(args, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
    },
    [args]
  );

  return (
    <ArgsWrapper>
      {args.map((arg, index) => (
        <DraggableArg
          id={arg.id}
          index={index}
          moveCard={moveCard}
          setArgs={setArgs}
          arg={arg}
          args={args}
        />
      ))}
      <ButtonWrapper>
        <Button onClick={() => addArgument()}>Add an Argument</Button>
        <Button onClick={() => removeArgument()}>Remove an argument</Button>
      </ButtonWrapper>
      <p style={{ color: "white", fontSize: ".9rem" }}>
        Enter objects in JSON format
      </p>
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
