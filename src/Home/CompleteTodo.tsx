import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import { Todo } from "../components/Calendar/CalendarBody";

interface CompleteTodoProps {
  Todo: Todo;
}
function CompleteTodo({ Todo }: CompleteTodoProps) {
  return (
    <CompleteTodoWrap className="row ">
      <div>{Todo.todo}</div>
      <div>{dayjs(Todo.createdAt).format("HH:mm:ss")}</div>
    </CompleteTodoWrap>
  );
}

const CompleteTodoWrap = styled.div``;

export default CompleteTodo;
