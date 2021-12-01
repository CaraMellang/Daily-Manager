import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";

interface CreateTodoProps {
  completeHandle(bool: boolean): void;
}

function CreateTodo({ completeHandle }: CreateTodoProps) {
  const [text, setText] = useState("");
  const selector: any = useSelector((state) => state);
  const onTextChange = (e: any) => {
    setText(e.target.value);
  };

  const onCreateClick = async () => {
    const data = {
      token: selector.userSliceReducer.user.accessToken,
      todo: text,
    };

    await axios
      .post(`http://localhost:5000/todo/create`, data)
      .then((res) => {
        console.log(res);
        completeHandle(false);
        setText("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CreateTodoWrap>
      <div>
        {" "}
        <input
          type="text"
          className="inputf"
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

const CreateTodoWrap = styled.div`
  display: flex;
  justify-content: center;
  .inputf {
    width: 100%;
    box-sizing: "border-box";
    border: 0;
    height: 100%;
    padding: 0;
  }
  .modalbutton {
    border: 0;
    border-radius: 2px;
  }
`;

export default CreateTodo;
