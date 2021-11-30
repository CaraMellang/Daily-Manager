import React, { useState } from "react";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import CreateTodo from "./CreateTodo";
import ModalListItem from "./ModalListItem";

interface modalListProps {
  //   toggleClick(): void;
  //   dateModalToggle: boolean;
  completeHandle(bool: boolean): void;
  DateInfo: DateInfo;
  clickListToggleHandle(bool: boolean): void;
  onClickListHandle(data: any): void;
}

function ModalList({
  DateInfo,
  completeHandle,
  clickListToggleHandle,
  onClickListHandle,
}: modalListProps) {
  return (
    <ModalListWrap>
      <div className={`modalbox `}>
        <div className="content">
          <h1>Today's List ({DateInfo.date}일)</h1>
          {DateInfo.todos.length === 0 ? "아무것도,,,없군요,," : ""}
          <ModalListItem
            DateInfo={DateInfo}
            completeHandle={completeHandle}
            clickListToggleHandle={clickListToggleHandle}
            onClickListHandle={onClickListHandle}
          />
        </div>
        <CreateTodo completeHandle={completeHandle} DateInfo={DateInfo} />
      </div>
    </ModalListWrap>
  );
}

const ModalListWrap = styled.div`
  z-index: 1000;
  width: 30%;

  /* .MyModal {
    z-index: 1000;
    //background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .modalbox {
    background: white;
    height: auto;
  }
  .modalbox {
    z-index: 100000;
    border-radius: 12px;
  }

  .modalbutton {
    display: block;
    font-size: 18px;
    font-weight: bold;
    background-color: #fff;
    outline: 0;
    border: 0;
    padding: 20px 5px;
    padding-top: 0px;
    cursor: pointer;
    width: 100%;
    border-radius: 0 0 12px 12px;
  } /* 
  .modaltextarea {
    font-weight: bold;
    font-size: 24px;
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    resize: none;
    transition: height 1s;
  } */
`;

export default ModalList;
