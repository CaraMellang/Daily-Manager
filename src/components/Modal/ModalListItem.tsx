import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Todo } from "../Calendar/CalendarBody";
import { cloneDeep } from "lodash";
import {
  faCheckCircle,
  faTrash,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { backPath } from "../../lib/HttpPath";

interface ModalListItemProps {
  Todos: Todo;
  fulldate: string;
  completeHandle(bool: boolean): void;
  clickListToggleHandle(bool: boolean): void;
  onClickListHandle(data: any): void;
}

function ModalListItem({
  Todos,
  fulldate,
  completeHandle,
  clickListToggleHandle,
  onClickListHandle,
}: ModalListItemProps) {
  const [checkBox, setCheckBox] = useState(Todos.success);
  const userSelector: any = useSelector((state) => state);
  //   const clone = JSON.parse(JSON.stringify(DateInfo)); // deep copy 개느림.

  const deleteClick = async (e: any) => {
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: Todos._id,
    };
    await axios
      .delete(`${backPath}/todo/delete`, { data })
      .then((rr) => {
        console.log("딜리트클릭 성공", rr);
      })
      .catch((e) => {
        console.log("딜리트 왜안되는데", e);
      });
    completeHandle(false);
  };
  const checkedHandle = async (e: any) => {
    setCheckBox((prev) => !prev);
    console.log("gggddd", checkBox); // 비동기라서 변하기 전값이 찍히는데 결과는 잘나옴;
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: Todos._id,
      success: checkBox,
    };
    await axios
      .patch(`${backPath}/todo/updatesuc`, data)
      .then((res) => {
        console.log("상태패치완료", res);
        completeHandle(false);
      })
      .catch((e) => {
        console.log(e);
        window.alert("얘! 상태오류란다!(상태패치)");
      });
  };

  const onClickTodo = () => {
    const data = {
      todoId: Todos._id,
      todo: Todos.todo,
      createdAt: Todos.createdAt,
      success: Todos.success,
      updatedAt: Todos.updatedAt,
      fulldate,
    };
    console.log(data);
    onClickListHandle(data);
    clickListToggleHandle(true);
  };

  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };

  return (
    <ModalListItemWrap>
      <div>
        {checkBox ? (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="items-icon green icon-cursor"
            onClick={checkedHandle}
          />
        ) : (
          <FontAwesomeIcon
            icon={farCheckCircle}
            className="items-icon gray icon-cursor"
            onClick={checkedHandle}
          />
        )}
      </div>

      <div className={Todos.success ? `complete-todo-checking` : ``}>
        {Todos.todo}
      </div>
      <div className="row">
        <FontAwesomeIcon
          className="fix-but icon-cursor"
          icon={faTools}
          onClick={onClickTodo}
        />
        <FontAwesomeIcon
          className="del-but icon-cursor"
          onClick={deleteClick}
          icon={faTrash}
        />
      </div>
    </ModalListItemWrap>
  );
}

const ModalListItemWrap = styled.div`
  display: flex;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  div {
    font-weight: bold;
    :nth-child(1) {
      //사용법 : 부모태그 기준으로 div라는 태그들중 1번째 div에 적용
      /* width: 5%; */
      flex: 0.5 10;
    }
    :nth-child(2) {
      /* width: 85%; */
      flex: 8 10;
    }
    :nth-child(3) {
      /* width: 10%; */
      display: flex;
      flex: 1.5 10;
      justify-content: space-evenly;
    }
  }
  .complete-todo-checking {
    /* text-decoration: line-through; */
    color: gray;
  }
  .items-icon {
    transform: scale(1.4);
  }
  .gray {
    color: gray;
  }
  .green {
    color: green;
  }
  .icon-cursor {
    cursor: pointer;
  }
  .fix-but {
    padding-right: 1rem;
  }
  .del-but {
  }
`;

export default ModalListItem;
