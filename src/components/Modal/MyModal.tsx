import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface stProps {
  dateModalToggle: boolean;
}

const MyModal = ({
  toggleClick,
  dateModalToggle,
  datas,
  completeHandle,
}: any) => {
  const userSelector: any = useSelector((state) => state);
  const [text, setText] = useState("초기값");
  console.log(`데이탓스${datas.date}`);
  console.log(`데이탓스${datas.todos[0]._id}`);
  console.log(`데이탓스`, datas);
  const onChangeText = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };
  const deleteClick = async (e: any) => {
    console.log(e.target.value);
    const data = {
      token: userSelector.userSliceReducer.user.accessToken,
      todoId: e.target.value,
    };
    await axios
      .delete(`http://localhost:5000/todo/delete`, { data })
      .then((rr) => {
        console.log("완료", rr);
      })
      .catch((e) => {
        console.log("아이", e);
      });
    completeHandle(false);
  };
  useEffect(() => {});
  return (
    <MyModalWrap dateModalToggle={dateModalToggle}>
      <div className="MyModal" onClick={stopBubbling}>
        <div className={`modalbox `}>
          <div className="content">
            <h1>Today's List</h1>
            {/* <textarea
              className="modaltextarea"
              value={text}
              onChange={onChangeText}
            /> */}
            <div className="col">
              {datas.todos.map((item: any) => {
                return (
                  <div key={item._id}>
                    <input type="checkbox" />
                    {`체크 _id:${item._id} todo: `}
                    <span
                      className={
                        item.success === true ? `font-line-through` : ``
                      }
                    >{`${item.todo}`}</span>
                    {` createdAt: ${item.createdAt} ${item.success} `}
                    <button onClick={deleteClick} value={item._id}>
                      삭제
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="clickbox">
            <button className="modalbutton">작성</button>
          </div>
        </div>
        <div className="modalback" onClick={toggleClick}>
          아 시발련아 진짜
        </div>
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
