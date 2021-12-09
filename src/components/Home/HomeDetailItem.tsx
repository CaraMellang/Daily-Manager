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
  // console.log(clickList.updateAt)
  console.log("투두업데이트", Todo.updatedAt);
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
    console.log(Todo._id);
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: Todo._id,
      todo: text,
      success: checkBox,
    };
    console.log(data);
    await axios
      .patch(`${backPath}/todo/updatetodo`, data)
      .then((res) => {
        console.log("완료", res);
        completeHandle(false);
        clickFixHandle(false);
      })
      .catch((e) => {
        console.log("이게  왜,,오류?", e);
      });
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
          <div className="row modal-title">
            <div className="fulldate">
              <CurrentDay fullDay={new Date(Todo.createdAt)} />
            </div>
            <div className="day">
              {calendarDates[new Date(Todo.createdAt).getDay()]}
            </div>
          </div>

          <div className="outline">
            <span className="outlinechild"></span>
            <span className="outlinechild"></span>
            <span className="outlinechild"></span>
            <span className="outlinechild"></span>
            <input
              className="input"
              type="text"
              value={text}
              onChange={onTextChange}
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
  width: 30%;
  .input {
    position: relative;
    width: 90%;
    height: 1.5rem;
    border: 0;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  .outline {
    position: relative;
    width: 70%;
    height: 2rem;
    box-sizing: border-box;
    margin: 50px auto;
  }
  .outline span {
    position: absolute;
    background: rgba(182, 114, 114, 1);
  }
  .outline span:nth-child(1) {
    left: 0;
    top: 0;
    width: 0;
    height: 2px;
    transition: width 0.4s;
  }
  .outline span:nth-child(2) {
    left: 0;
    top: 0;
    width: 2px;
    height: 0;
    transition: height 0.4s;
  }
  .outline span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.4s;
  }
  .outline span:nth-child(4) {
    right: 0;
    bottom: 0;
    width: 2px;
    height: 0;
    transition: height 0.4s;
  }
  .outline:hover span:nth-child(1) {
    width: 100%;
  }
  .outline:hover span:nth-child(2) {
    height: 100%;
  }
  .outline:hover span:nth-child(3) {
    width: 100%;
  }
  .outline:hover span:nth-child(4) {
    height: 100%;
  }
  .space-evenly {
    justify-content: space-evenly;
  }
  .row {
    font-weight: bold;
  }
`;

export default HomeDetailItem;
