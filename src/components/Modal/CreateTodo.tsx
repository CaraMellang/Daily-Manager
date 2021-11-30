import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";

interface CreateTodoProps {
  completeHandle(bool: boolean): void;
  DateInfo: DateInfo;
}

function CreateTodo({ completeHandle, DateInfo }: CreateTodoProps) {
  const [text, setText] = useState("");
  const userSelector: any = useSelector((state) => state);
  const onTextChange = (e: any) => {
    setText(e.target.value);
  };

  const onCreateClick = async () => {
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todo: text,
    };

    await axios
      .post(`http://localhost:5000/todo/create`, data)
      .then((res) => {
        console.log(res);
        completeHandle(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CreateTodoWrap>
      <div style={{ padding: "10px" }}>
        {" "}
        <input
          type="text"
          style={{ width: "100%", boxSizing: "border-box" }}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <button className="modalbutton" onClick={onCreateClick}>
        작성
      </button>
    </CreateTodoWrap>
  );
}

const CreateTodoWrap = styled.div``;

export default CreateTodo;
