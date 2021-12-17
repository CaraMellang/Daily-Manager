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
        completeHandle(false);
        setText("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CreateTodoWrap>
      <div
        style={{
          marginBottom: "1rem",
          backgroundColor: "rgb(25, 70, 89,0.5)",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        투두 입력!
      </div>
      <form onSubmit={onCreateSubmit}>
        <div className="wrap">
          <input
            type="text"
            className="inputf"
            value={text}
            onChange={onTextChange}
          ></input>
          <button type="submit" className="submitbutton">
            +
          </button>
        </div>
      </form>
    </CreateTodoWrap>
  );
}

const CreateTodoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 2rem; */
  .inputf {
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 12px 0 0 12px;
    //border-width: 0;
    height: 100%;
    font-size: 20px;
    padding: 0;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: 2px solid white;
    transition: border 0.2s;
  }
  .inputf:focus {
    border-bottom: 2px solid rgb(241, 147, 147);
  }
  .submitbutton {
    cursor: pointer;
    position: absolute;
    color: white;
    top: -5px;
    right: -30px;
    background: rgb(241, 147, 147);
    border: 0;
    width: 35px;
    height: 35px;
    font-size: 2rem;
    border-radius: 75px;
  }
  form {
    display: flex;
    justify-content: center;
  }
  .wrap {
    position: relative;
  }
`;

export default CreateTodo;
