import { faTools, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { check } from "react-interaction";
import styled from "styled-components";
import { Todo } from "../Calendar/CalendarBody";
import { backPath } from "../../lib/HttpPath";

interface CompleteTodoProps {
  Todo: Todo;
  token: string;
  completeHandle(bool: boolean): void;
  clickFixTodoHandle(todo: Todo): void;
  clickFixHandle(bool: boolean): void;
}
function CompleteTodo({
  Todo,
  token,
  completeHandle,
  clickFixHandle,
  clickFixTodoHandle,
}: CompleteTodoProps) {
  const conDeleteClick = async () => {
    let yesClick;

    await check("정말로 삭제하시겠습니까??", {
      dimmedClassName: "my-check-dimmed",
    }).then((r) => (yesClick = r));
    if (yesClick) {
      const data = {
        token: token,
        todoId: Todo._id,
      };
      await axios
        .delete(`${backPath}/todo/delete`, { data })
        .then((rr) => {
          completeHandle(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <CompleteTodoWrap className="padd">
      <div className="col item-block">
        <div className="row dd">
          <div className="">{Todo.todo}</div>
          <div className="">
            <FontAwesomeIcon
              className="fix-but"
              icon={faTools}
              onClick={() => {
                clickFixHandle(true);
                clickFixTodoHandle(Todo);
              }}
            />
            <FontAwesomeIcon
              className="del-but"
              icon={faTrash}
              onClick={conDeleteClick}
            />
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          {dayjs(Todo.createdAt).format("HH:mm:ss")}
        </div>
      </div>
    </CompleteTodoWrap>
  );
}

const CompleteTodoWrap = styled.div`
  width: 100%;
  .dd {
    justify-content: space-between;
  }
  .fix-but {
    position: relative;
    opacity: 0;
    top: 6px;
    cursor: pointer;
    padding-right: 0.5rem;
  }
  .del-but {
    position: relative;
    opacity: 0;
    top: 6px;
    cursor: pointer;
    padding-right: 0.25rem;
  }
  .item-block {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 6px;
    box-sizing: border-box;
  }
  .item-block:hover {
    @keyframes fade {
      0% {
        opacity: 0;
        top: 6px;
      }
      25% {
        opacity: 0.35;
      }
      100% {
        opacity: 1;
        top: 0px;
      }
    }
    .fix-but {
      animation: fade 0.2s;
      animation-fill-mode: forwards; 
    }
    .del-but {
      animation: fade 0.2s 0.1s;
      animation-fill-mode: forwards;
    }
  }
`;

export default CompleteTodo;
