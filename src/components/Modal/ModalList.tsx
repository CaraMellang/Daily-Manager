import React from "react";
import styled from "styled-components";
import { calendarDates } from "../../lib/DateArrays";
import { DateInfo } from "../Calendar/CalendarBody";
import CurrentDay from "../CurrentDay";
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
      <div className="row modal-title">
        <div className="fulldate">
          <CurrentDay fullDay={new Date(DateInfo.fulldate)} />
        </div>
        <div className="day">
          {calendarDates[new Date(DateInfo.fulldate).getDay()]}
        </div>
      </div>
      {DateInfo.todos.length === 0 ? (
        <div className="not-thing">아무것도...없어요...</div>
      ) : (
        ""
      )}
      <div className="listitems">
        {DateInfo.todos.map((arr) => {
          return (
            <ModalListItem
              key={arr._id}
              Todos={arr}
              fulldate={DateInfo.fulldate}
              completeHandle={completeHandle}
              clickListToggleHandle={clickListToggleHandle}
              onClickListHandle={onClickListHandle}
            />
          );
        })}
      </div>
    </ModalListWrap>
  );
}

const ModalListWrap = styled.div`
  z-index: 1000;
  width: 30%;
  background: white;
  z-index: 100000;
  border-radius: 12px;
  padding-bottom: 0.5rem;
  .modal-title {
    font-weight: bold;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    .fulldate {
    }
    .day {
      color: rgba(182, 114, 114, 1);
      font-size: 1.5rem;
    }
  }

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
  .not-thing {
    color: gray;
    text-align: center;
    padding: 4rem;
    font-weight: bold;
  }
  .listitems {
    min-height: 300px;
    max-height: 350px;
    overflow-y: auto;
  }
  .listitems::-webkit-scrollbar {
    width: 2px;
    /* border-radius: 10px; */
  }
  .listitems::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    /* border-radius: 10px; */
  }
  .listitems::-webkit-scrollbar-track {
    background-color: grey;
    /* border-radius: 10px; */
  }
`;

export default ModalList;
