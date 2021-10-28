import React, { useState } from "react";
import styled from "styled-components";

interface stProps {
  toggle: any;
}

const MyModal = ({ toggleOn, toggle }: any) => {
  const [text, setText] = useState("초기값");
  const onChangeText = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <MyModalWrap toggle={toggle}>
      <div className="MyModal">
        <div className={`modalbox `}>
          <div className="content">
            <h1>Today's Memo</h1>
            <textarea
              className="modaltextarea"
              value={text}
              onChange={onChangeText}
            />
          </div>
          <div className="clickbox">
            <button className="modalbutton">작성</button>
          </div>
        </div>
        <div className="modalback" onClick={toggleOn}></div>
      </div>
    </MyModalWrap>
  );
};

const MyModalWrap = styled.div<stProps>`
  color: black;
  h1 {
    text-align: center;
  }
  .modalback {
    z-index: 9000;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .MyModal {
    z-index: 10000;
    /* background: rgba(0, 0, 0, 0.25); */
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MyModal .modalbox {
    z-index: 10000;
    background: white;
    width: 400px;
    height: auto;
  }
  .modalbox {
    border-radius: 12px;
  }
  .content {
    padding: 1rem;
  }
  .clickbox {
    display: flex;
    text-align: center;
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
  .modaltextarea {
    font-weight: bold;
    font-size: 24px;
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    resize: none;
    transition: height 1s;
  }
`;

export default MyModal;
