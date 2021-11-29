import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import DetailItem from "./DetailItem";
import ModalList from "./ModalList";

interface MymodalProps {
  toggleClick(): void;
  dateModalToggle: boolean;
  completeHandle(bool: boolean): void;
  DateInfo: DateInfo;
}

interface stProps {
  dateModalToggle: boolean;
}

const Modal = ({
  toggleClick,
  dateModalToggle,
  DateInfo,
  completeHandle,
}: MymodalProps) => {
  const [clickListToggle, setClickListToggle] = useState(false);
  const [clickList, setClickList] = useState();
  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };
  const clickListToggleHandle = (bool: boolean) => {
    setClickListToggle(bool);
  };
  const onClickListHandle = (data: any) => {
    setClickList(data);
  };

  return (
    <MyModalWrap dateModalToggle={dateModalToggle}>
      <div className="MyModal" onClick={stopBubbling}>
        {clickListToggle ? (
          <DetailItem
            clickListToggleHandle={clickListToggleHandle}
            clickList={clickList}
          />
        ) : (
          <ModalList
            DateInfo={DateInfo}
            completeHandle={completeHandle}
            clickListToggleHandle={clickListToggleHandle}
            onClickListHandle={onClickListHandle}
          />
        )}
        <div className="modalback" onClick={toggleClick}></div>
      </div>
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
    height: auto;
  }
  .modalbox {
    z-index: 100;
    border-radius: 12px;
  }
`;

export default Modal;
