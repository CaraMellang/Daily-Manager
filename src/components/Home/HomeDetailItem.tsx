import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { calendarDates } from "../../lib/DateArrays";
import { backPath } from "../../lib/HttpPath";
import { Todo } from "../Calendar/CalendarBody";
import CurrentDay from "../CurrentDay";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import media from "../../lib/media";

interface HomeDetailItemProps {
  Todo: Todo;
  completeHandle(bool: boolean): void;
  clickFixHandle(bool: boolean): void;
}

function HomeDetailItem({
  Todo,
  completeHandle,
  clickFixHandle,
}: HomeDetailItemProps) {
  const [text, setText] = useState(Todo.todo);
  const [checkBox, setCheckBox] = useState(Todo.success);
  const userSelector: any = useSelector((state) => state);

  let createdAt = dayjs(new Date(Todo.createdAt)).format(`YYYY-MM-DD HH:mm:ss`);
  let updatedAt =
    Todo.updatedAt !== "null"
      ? dayjs(new Date(Todo.updatedAt)).format(`YYYY-MM-DD HH:mm:ss`)
      : `null`;

  const onTextChange = (e: any) => {
    setText(e.target.value);
  };
  const onCheckHandle = () => {
    setCheckBox((prev) => !prev);
  };
  const onClickFix = async () => {
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: Todo._id,
      todo: text,
      success: checkBox,
    };
    await axios
      .patch(`${backPath}/todo/updatetodo`, data)
      .then((res) => {
        completeHandle(false);
        clickFixHandle(false);
      })
      .catch((e) => {
        console.log( e);
      });
  };

  useEffect(() => {
    return () => {};
  });
  return (
    <DetailItemWrap>
      <div className={`modalbox `}>
        <div className="content">
          <div className="row modal-title">
            <div className="fulldate">
              <CurrentDay fullDay={new Date(Todo.createdAt)} />
            </div>
            <div className="day">
              {calendarDates[new Date(Todo.createdAt).getDay()]}
            </div>
          </div>

          <div className="input-box">
            <input
              className="input"
              type="text"
              value={text}
              onChange={onTextChange}
              spellCheck={false} 
            />
          </div>
          <div className="row space-evenly">
            {checkBox ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="items-icon green icon-cursor"
                onClick={onCheckHandle}
              />
            ) : (
              <FontAwesomeIcon
                icon={farCheckCircle}
                className="items-icon gray icon-cursor"
                onClick={onCheckHandle}
              />
            )}
            <div className="col">
              <div>생성시간: {createdAt}</div>
              <div>업뎃시간: {updatedAt}</div>
            </div>
          </div>
        </div>
        <div className="clickbox">
          <button className="modalbutton" onClick={() => clickFixHandle(false)}>
            닫기
          </button>
          <button className="modalbutton" onClick={onClickFix}>
            수정
          </button>
        </div>
      </div>
    </DetailItemWrap>
  );
}

const DetailItemWrap = styled.div`
  z-index: 1000;
  width: 600px;
  ${media.medium} {
    width: 100%;
  }
  .input-box {
    margin: 4rem 0 4rem 0;
    text-align: center;
  }
  .input {
    width: 80%;
    height: 1.5rem;
    border: 0;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1rem;
    padding-bottom: 0.5rem;

    border-bottom: 2px solid rgba(19, 68, 88, 1);
    transition: border 0.4s;
  }
  .input:focus {
    border-bottom: 2px solid rgb(241, 147, 147);
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
  .items-icon {
    transform: scale(1.4);
  }
  .gray {
    color: gray;
  }
  .green {
    color: green;
  }
  .icon-cursor {
    cursor: pointer;
  }
  .space-evenly {
    justify-content: space-evenly;
  }
  .row {
    font-weight: bold;
  }
`;

export default HomeDetailItem;
