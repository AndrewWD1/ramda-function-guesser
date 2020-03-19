import React from "react";
import { DragElementWrapper, DragSourceOptions } from "react-dnd";
import styled from "styled-components";

const HamburgerButtonWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
  width: 25px;
  cursor: pointer;
`;

const HamburgerLine = styled.div`
  height: 30%;
  border-bottom: 2px solid black;
`;

const HamburgerButton: React.FC<{
  ref: DragElementWrapper<DragSourceOptions>;
}> = ({ ref }) => (
  <HamburgerButtonWrapper ref={ref}>
    <HamburgerLine />
    <HamburgerLine />
    <HamburgerLine />
  </HamburgerButtonWrapper>
);

export default HamburgerButton;
