import React from "react";
import { Container, Handle } from "./Task.styled";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index }) => {
  const isDraggable = task.id === "task-1";
  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDraggable}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDraggable={isDraggable}
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
