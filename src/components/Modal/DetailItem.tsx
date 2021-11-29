import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface DetailItemProps {
  clickListToggleHandle(bool: boolean): void;
  clickList: any;
}

function DetailItem({ clickListToggleHandle, clickList }: DetailItemProps) {
  const [text, setText] = useState(clickList.todo);

  const onTextChange = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // return () => {
    //   console.log("실행?");
    //   clickListToggleHandle(false);
    // };
  });
  return (
    <DetailItemWrap>
      <div className={`modalbox `}>
        <div className="content">
          <h1>Today's List</h1>
          <input
            className="input"
            type="text"
            value={text}
            onChange={onTextChange}
          />
        </div>
        <div className="clickbox">
          <button
            className="modalbutton"
            onClick={() => clickListToggleHandle(false)}
          >
            뒤로가기
          </button>
          <button className="modalbutton">수정</button>
        </div>
      </div>
    </DetailItemWrap>
  );
}

const DetailItemWrap = styled.div`
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
