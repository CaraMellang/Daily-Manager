import dayjs from "dayjs";
import React from "react";
import { check } from "react-interaction";
import styled from "styled-components";
import { Todo } from "../components/Calendar/CalendarBody";

interface CompleteTodoProps {
  Todo: Todo;
}
function CompleteTodo({ Todo }: CompleteTodoProps) {
  const conDeleteClick = () => {
    check("정말로 삭제할꺼얌?", { dimmedClassName: "my-check-dimmed" }).then(
      (r) => window.alert(`${r} 아이`)
    );
  };
  return (
    <CompleteTodoWrap className="padd">
      <div className="col item-block">
        <div className="row dd">
          <div className="">{Todo.todo}</div>
          <div className="">
            <button className="fix-but">수정</button>
            <button className="del-but" onClick={conDeleteClick}>
              삭제
            </button>
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
  }
  .del-but {
    position: relative;
    opacity: 0;
    top: 6px;
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
      animation: fade 0.2s 0.2s;
      animation-fill-mode: forwards;
    }
  }
`;

export default CompleteTodo;
