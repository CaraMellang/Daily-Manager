import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { backPath } from "../../lib/HttpPath";
import { TODOS_REQUEST } from "../../modules/redux/Todos";

interface CreateTodoProps {
  completeHandle(bool: boolean): void;
}

function CreateTodo({ completeHandle }: CreateTodoProps) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  const onTextChange = (e: any) => {
    setText(e.target.value);
  };

  const onCreateSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      token: selector.userSliceReducer.user.accessToken,
      todo: text,
    };

    await axios
      .post(`${backPath}/todo/create`, data)
      .then((res) => {
        console.log(res);
        completeHandle(false);
        // const token = selector.userSliceReducer.user.accessToken;
        // const userId = selector.userSliceReducer.user.userId;
        // dispatch(TODOS_REQUEST({ token, userId }));
        setText("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CreateTodoWrap>
      <form onSubmit={onCreateSubmit}>
        <div>
          {" "}
          <input
            type="text"
            className="inputf"
            value={text}
            onChange={onTextChange}
          />
        </div>
        <button type="submit" className="modalbutton">
          작성
        </button>
      </form>
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
