import { faTools, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { check } from "react-interaction";
import styled from "styled-components";
import { Todo } from "../components/Calendar/CalendarBody";

interface CompleteTodoProps {
  Todo: Todo;
  token: string;
  completeHandle(bool: boolean): void;
}
function CompleteTodo({ Todo, token, completeHandle }: CompleteTodoProps) {
  const conDeleteClick = async () => {
    let yesClick;

    await check("정말로 삭제할꺼얌?", {
      dimmedClassName: "my-check-dimmed",
    }).then((r) => (yesClick = r));
    if (yesClick) {
      const data = {
        token: token,
        todoId: Todo._id,
      };
      await axios
        .delete(`http://localhost:5000/todo/delete`, { data })
        .then((rr) => {
          console.log("야호", rr);
          completeHandle(false);
        })
        .catch((e) => {
          console.log("왜안되는데", e);
        });
    }
  };
  return (
    <CompleteTodoWrap className="padd">
      <div className="col item-block">
        <div className="row dd">
          <div className="">{Todo.todo}</div>
          <div className="">
            <FontAwesomeIcon className="fix-but" icon={faTools} />
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
      animation-fill-mode: forwards; //애니메이션 마지막상태유지
    }
    .del-but {
      animation: fade 0.2s 0.1s;
      animation-fill-mode: forwards;
    }
  }
`;

export default CompleteTodo;
