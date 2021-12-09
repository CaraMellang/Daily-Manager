import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "../Calendar/CalendarBody";
import HomeDetailItem from "./HomeDetailItem";

interface HomeModalProps {
  clickFixHandle(bool: boolean): void;
  completeHandle(bool: boolean): void;
  Todo: Todo;
}

interface stProps {
  dateModalToggle: boolean;
}

const HomeModal = ({ clickFixHandle, Todo,completeHandle }: HomeModalProps) =>
  // toggleClick,
  // dateModalToggle,
  // Todo,
  // completeHandle,
  {
    const [clickListToggle, setClickListToggle] = useState(false);
    const [clickList, setClickList] = useState<{
      todoId: string;
      todo: string;
      createdAt: string;
      success: string;
    }>();
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
      <MyModalWrap>
        <div className="MyModal" onClick={stopBubbling}>
          <HomeDetailItem Todo={Todo} completeHandle={completeHandle} clickFixHandle={clickFixHandle} />
          <div
            className="modalback"
            onClick={() => clickFixHandle(false)}
          ></div>
        </div>
      </MyModalWrap>
    );
  };

const MyModalWrap = styled.div`
  color: black;

  .row {
    display: flex;
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

export default HomeModal;
