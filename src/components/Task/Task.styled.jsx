import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragging, isDraggable }) =>
    isDragging ? "lightgreen" : isDraggable ? "gray" : "white"};
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;
