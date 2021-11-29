import React from "react";
import styled from "styled-components";
import { DateInfo } from "../Calendar/CalendarBody";
import ModalListItem from "./ModalListItem";

interface modalListProps {
  //   toggleClick(): void;
  //   dateModalToggle: boolean;
  completeHandle(bool: boolean): void;
  DateInfo: DateInfo;
  clickListToggleHandle(bool:boolean):void
  onClickListHandle(data:any) :void
}

function ModalList({ DateInfo, completeHandle ,clickListToggleHandle,onClickListHandle}: modalListProps) {
  return (
    <ModalListWrap>
      <div className={`modalbox `}>
        <div className="content">
          <h1>Today's List</h1>
          <ModalListItem DateInfo={DateInfo} completeHandle={completeHandle} clickListToggleHandle={clickListToggleHandle} onClickListHandle={onClickListHandle}/>
        </div>
        <div className="clickbox">
          <button className="modalbutton">작성</button>
        </div>
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
