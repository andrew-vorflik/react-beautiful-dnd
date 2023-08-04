import { styled } from "styled-components";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const TaskList = styled.ul`
  padding: 8px;
  flex-grow: 1;
  transition: background-color 0.2s;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "lightblue" : "white"};
`;
