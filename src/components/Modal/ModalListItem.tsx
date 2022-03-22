import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { TODOS_REQUEST } from "../../modules/redux/Todos";
import ResponseStatusCode from "../../lib/ResponseStatusCode";
import { useCookies } from "react-cookie";

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
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  const deleteClick = async (e: any) => {
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: Todos._id,
    };
    await axios
      .delete(`${backPath}/todo/delete`, {
        data,
        headers: { authorization: `bearer ${cookiesToken.rememberToken}` },
      })
      .then((rr) => {})
      .catch((e) => {
        console.log(e);
      });
    completeHandle(false);
  };
  const checkedHandle = async (e: any) => {
    setCheckBox((prev) => !prev);
    const data = {
      todoId: Todos._id,
      success: checkBox,
    };
    await axios
      .patch(`${backPath}/todo/updatesuc`, data, {
        headers: { authorization: `bearer ${cookiesToken.rememberToken}` },
      })
      .then((res) => {
        completeHandle(false);
      })
      .catch((e) => {
        console.log(e);
        window.alert(ResponseStatusCode(e.response.data.status));
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
    onClickListHandle(data);
    clickListToggleHandle(true);
  };

  return (
    <ModalListItemWrap>
      <div>
        {Todos.success ? (
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
      flex: 0.5 10;
    }
    :nth-child(2) {
      flex: 8 10;
    }
    :nth-child(3) {
      display: flex;
      flex: 1.5 10;
      justify-content: space-evenly;
    }
  }
  .complete-todo-checking {
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
