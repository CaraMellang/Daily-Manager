import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import DetailItem from "./DetailItem";
import ModalListItem from "./ModalListItem";

interface MymodalProps {
  toggleClick(): void;
  dateModalToggle: boolean;
  completeHandle(bool: boolean): void;
  DateInfo: DateInfo;
}

interface stProps {
  dateModalToggle: boolean;
}

const MyModal = ({
  toggleClick,
  dateModalToggle,
  DateInfo,
  completeHandle,
}: MymodalProps) => {
  const [checked, setChecked] = useState(false);
  const [clickList, setClickList] = useState(true);
  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };
  const checkedHandle = () => {
    setChecked(!checked);
  };

  useEffect(() => {});
  return (
    <MyModalWrap dateModalToggle={dateModalToggle}>
      <div className="MyModal" onClick={stopBubbling}>
        <div className={`modalbox `}>
          <div className="content">
            <h1>Today's List</h1>
            <ModalListItem
              DateInfo={DateInfo}
              completeHandle={completeHandle}
            />
          </div>
          <div className="clickbox">
            <button className="modalbutton">작성</button>
          </div>
        </div>
        <div className="modalback" onClick={toggleClick}></div>
      </div>
      {clickList && <DetailItem />}
    </MyModalWrap>
  );
};

const MyModalWrap = styled.div<stProps>`
  color: black;
  h1 {
    text-align: center;
  }
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .font-line-through {
    text-decoration: line-through;
  }
  .modalback {
    z-index: 900;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .MyModal {
    z-index: 1000;
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
    z-index: 1000;
    background: white;
    width: 40%;
    height: auto;
  }
  .modalbox {
    z-index: 100000;
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
