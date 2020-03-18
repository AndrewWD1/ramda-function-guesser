import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import * as R from "ramda";
import { isMobile } from "is-mobile";

import { IArg } from "../../redux/reducer";

const Input = styled.input`
  font-weight: bold;
  border-radius: 3px;
  width: 50%;
  padding: 0 0.5rem;
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

export interface CardProps {
  id: any;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  arg: IArg;
  args: IArg[];
  setArgs: Function;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const Card: React.FC<CardProps> = ({
  id,
  index,
  moveCard,
  arg,
  args,
  setArgs
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: "CARD", id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <SingleArgWrapper ref={ref} key={`${arg.type}${index}wrapper`}>
      <Select
        key={`${arg.type}${index}`}
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
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="boolean">boolean</option>
        <option value="object">object</option>
        <option value="function">function</option>
        <option value="array">array</option>
      </Select>
      <Input
        type="text"
        value={arg.value}
        key={`input`}
        onChange={e => {
          setArgs(
            R.adjust<IArg>(
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
  );
};

export const DraggableArg = Card;
