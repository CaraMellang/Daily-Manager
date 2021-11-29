import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import { cloneDeep } from "lodash";

interface ModalListItemProps {
  DateInfo: DateInfo;
  completeHandle(bool: boolean): void;
}

function ModalListItem({ DateInfo, completeHandle }: ModalListItemProps) {
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
  const checkedHandle = (e: any) => {
    const cloneTodos = cloneDeep(DateInfo.todos);
    console.log("체크핸들", e);
    const imuCloneState = cloneTodos.map((arr) => {
      if (arr._id === e.target.name) {
        console.log(arr, arr._id, e.target.name);
        return {
          _id: arr._id,
          todo: arr.todo,
          success: !arr.success,
          createdAt: arr.createdAt,
          updatedAt: arr.updatedAt,
        };
      }
      return {
        _id: arr._id,
        todo: arr.todo,
        success: !arr.success,
        createdAt: arr.createdAt,
        updatedAt: arr.updatedAt,
      };
    });
    console.log(imuCloneState);
  };
  return (
    <ModalListItemWrap>
      {DateInfo.todos.map((arr) => {
        return (
          <div style={{ display: "flex" }} key={arr._id}>
            <input
              type="checkbox"
              defaultChecked={arr.success}
              name={arr._id}
              onChange={checkedHandle}
            />
            <div>{arr._id}</div>
            <div className={arr.success ? `font-line-through` : ``}>
              {arr.todo}
            </div>
            <div>{arr.createdAt}</div>
            <div>{`${arr.success}`}</div>
            <button onClick={deleteClick} value={arr._id}>
              삭제
            </button>
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
