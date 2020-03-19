import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { Dispatch } from "redux";
import { setArgs, addArgument, removeArgument } from "../../redux/actions";
import { Button } from "../../Components/custom-button/custom-button.component";
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
      setArgs(
        update(args, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
    },
    // eslint-disable-next-line
    [args]
  );

  return (
    <ArgsWrapper>
      {args.map((arg, index) => (
        <DraggableArg
          key={arg.id}
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
      <p style={{ color: "white", fontSize: "1.1rem" }}>
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
