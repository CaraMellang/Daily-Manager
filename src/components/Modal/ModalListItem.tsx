import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import { cloneDeep } from "lodash";

interface ModalListItemProps {
  DateInfo: DateInfo;
  completeHandle(bool: boolean): void;
  clickListToggleHandle(bool: boolean): void;
  onClickListHandle(data: any): void;
}

function ModalListItem({
  DateInfo,
  completeHandle,
  clickListToggleHandle,
  onClickListHandle,
}: ModalListItemProps) {
  const clone = cloneDeep(DateInfo);
  const [cloneState, setCloneState] = useState(clone.todos);
  const userSelector: any = useSelector((state) => state);
  console.log(DateInfo);
  //   const clone = JSON.parse(JSON.stringify(DateInfo)); // deep copy 개느림.
  console.log(clone);
  console.log(clone === DateInfo);
  console.log(cloneState);
  const deleteClick = async (e: any) => {
    console.log(e.target.value);
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: e.target.value,
    };
    await axios
      .delete(`http://localhost:5000/todo/delete`, { data })
      .then((rr) => {
        console.log("야호", rr);
      })
      .catch((e) => {
        console.log("왜안되는데", e);
      });
    completeHandle(false);
  };
  const checkedHandle = async (e: any) => {
    console.log("체크핸들", e.target.name);
    console.log("체크핸들", !e.target.checked);
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: e.target.name,
      success: !e.target.checked,
    };
    await axios
      .patch(`http://localhost:5000/todo/updatesuc`, data)
      .then((res) => {
        console.log("상태패치완료", res);
        completeHandle(false);
      })
      .catch((e) => {
        console.log(e);
        window.alert("얘! 상태오류란다!");
      });
  };

  const onClickTodo = (todoId: string, todo: string, createdAt: string) => {
    console.log(todoId, todo, createdAt);
    const data = { todoId, todo, createdAt };
    console.log(typeof data);
    onClickListHandle(data);
    clickListToggleHandle(true);
  };

  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };

  return (
    <ModalListItemWrap>
      {DateInfo.todos.map((arr) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            key={arr._id}
            onClick={() => onClickTodo(arr._id, arr.todo, arr.createdAt)}
          >
            <div onClick={stopBubbling} style={{ display: "flex" }}>
              <input
                type="checkbox"
                // defaultChecked={arr.success}
                name={arr._id}
                checked={arr.success}
                onChange={checkedHandle}
              />
              {/* <div>{arr._id}</div> */}
              <div className={arr.success ? `font-line-through` : ``}>
                {arr.todo}
              </div>
              <div>{arr.createdAt}</div>
              <div>{`${arr.success}`}</div>
              <button onClick={deleteClick} value={arr._id}>
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </ModalListItemWrap>
  );
}

const ModalListItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  .font-line-through {
    text-decoration: line-through;
  }
`;

export default ModalListItem;
