import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import { Todo } from "../components/Calendar/CalendarBody";

interface NotCompleteTodoProps {
  Todo: Todo;
}

function NotCompleteTodo({ Todo }: NotCompleteTodoProps) {
  return (
    <NotCompleteTodoWrap className="row ">
      <div>{Todo.todo}</div>
      <div>{dayjs(Todo.createdAt).format("HH:mm:ss")}</div>
    </NotCompleteTodoWrap>
  );
}

const NotCompleteTodoWrap = styled.div``;

export default NotCompleteTodo;
