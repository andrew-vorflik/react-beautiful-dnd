import React from "react";
import { Container, TaskList, Title } from "./Column.styled";
import { Task } from "../Task/Task";

export const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};
