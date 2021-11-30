import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface DetailItemProps {
  clickListToggleHandle(bool: boolean): void;
  clickListToggle: boolean;
  clickList: any;
  completeHandle(bool: boolean): void;
}

function DetailItem({
  clickListToggleHandle,
  clickList,
  clickListToggle,
  completeHandle,
}: DetailItemProps) {
  const [text, setText] = useState(clickList.todo);
  let todoId = clickList.todoId;
  const [checked, setChecked] = useState(clickList.success);
  const userSelector: any = useSelector((state) => state);

  let createdAt = dayjs(new Date(clickList.createdAt.slice(0, 19))).format(
    `YYYY-MM-DD HH:mm:ss`
  );
  // console.log(clickList.updateAt)
  let updatedAt =
    clickList.updatedAt !== null
      ? dayjs(new Date(clickList.updatedAt.slice(0, 19))).format(
          `YYYY-MM-DD HH:mm:ss`
        )
      : `null`;

  const onTextChange = (e: any) => {
    setText(e.target.value);
  };
  const onCheckedChange = (e: any) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };
  const onClickFix = async () => {
    console.log(todoId);
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: todoId,
      todo: text,
      success: checked,
    };
    console.log(data);
    await axios
      .patch(`http://localhost:5000/todo/updatetodo`, data)
      .then((res) => {
        console.log("완료", res);
      })
      .catch((e) => {
        console.log("이게  왜,,오류?", e);
      });
    completeHandle(false);
    clickListToggleHandle(false);
  };

  useEffect(() => {
    // return () => {
    //   console.log("실행?");
    //   clickListToggleHandle(false);
    // };
  });
  return (
    <DetailItemWrap clickListToggle={clickListToggle}>
      <div className={`modalbox `}>
        <div className="content">
          <h1>Today's List</h1>
          <div>생성시간: {createdAt}</div>
          <div>업뎃시간: {updatedAt}</div>
          <input
            className="input"
            type="text"
            value={text}
            onChange={onTextChange}
          />
          <input type="checkbox" checked={checked} onChange={onCheckedChange} />
        </div>
        <div className="clickbox">
          <button
            className="modalbutton"
            onClick={() => clickListToggleHandle(false)}
          >
            뒤로가기
          </button>
          <button className="modalbutton" onClick={onClickFix}>
            수정
          </button>
        </div>
      </div>
    </DetailItemWrap>
  );
}

const DetailItemWrap = styled.div<{ clickListToggle: boolean }>`
  z-index: 1000;
  width: 30%;
  .input {
    width: 70%;
    box-sizing: border-box;
  }
  .clickbox {
    display: flex;
  }
  .modalbutton {
    display: block;
    font-size: 18px;
    font-weight: bold;
    background-color: #fff;
    outline: 0;
    border: 0;
    padding: 20px 5px;
    cursor: pointer;
    width: 100%;
    border-radius: 0 0 12px 12px;
  }
`;

export default DetailItem;
