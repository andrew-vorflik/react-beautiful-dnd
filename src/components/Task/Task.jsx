import React from "react";
import { Container } from "./Task.styled";

export const Task = ({ task }) => {
  return <Container>{task.content}</Container>;
};
