import React from "react";
import { Container, TaskList, Title } from "./Column.styled";
import { Task } from "../Task/Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const Column = ({ column, tasks, isDropDisabled, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable
            droppableId={column.id}
            type={column.id === "column-3" ? "done" : "active"}
            isDropDisabled={isDropDisabled}
          >
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};
