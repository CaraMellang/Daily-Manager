import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { notice } from "react-interaction";
import { useDispatch, useSelector } from "react-redux";
import { TODOS_REQUEST } from "../modules/redux/Todos";
import Loading from "../components/Loading";
import dayjs from "dayjs";
import Clock from "../components/Clock";

const Home = () => {
  let dd: any[] = [];
  let completeArray: any[] = [];
  let notCompleteArray: any[] = [];
  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  const { userSliceReducer } = selector;

  // if (!selector.todosSliceReducer.todosSuccess) {
  //   const token = userSliceReducer.user.accessToken;
  //   const userId = userSliceReducer.user.userId;
  //   dispatch(TODOS_REQUEST({ token, userId }));
  // }

  if (selector.todosSliceReducer.todosSuccess) {
    console.log(
      (dd = selector.todosSliceReducer.todos.filter(
        (arr: any) => arr.createdAt.getDate() === new Date().getDate()
      ))
    );
    dd.forEach((arr) => {
      if (arr.success) {
        completeArray.push(arr);
      }
      if (!arr.success) {
        notCompleteArray.push(arr);
      }
    });
    console.log("comp", completeArray, "notcomp", notCompleteArray);
  }

  useEffect(() => {
    console.log("gds");

    const token = userSliceReducer.user.accessToken;
    const userId = userSliceReducer.user.userId;
    dispatch(TODOS_REQUEST({ token, userId }));

    // if (selector.todosSliceReducer.todosSuccess) {
    //   console.log(selector.todosSliceReducer.todosLoading);
    //   console.log(
    //     "ㄹ릴낟달;ㅇ?ddddddddddddd",
    //     selector.todosSliceReducer.todos[0].createdAt.getDate(),
    //     selector.todosSliceReducer.todos[0].todo
    //     // typeof todosSliceReducer.todos[0].createdAt,
    //   );
    //   todosArray = [];
    //   todosArray.push(selector.todosSliceReducer.todos);
    // }
  }, []);

  if (selector.todosSliceReducer.todosSuccess) {
    return (
      <HomeWrap>
        <button
          type="button"
          className="example-button"
          onClick={() => notice("나가")}
        >
          <div>notice</div>
        </button>
        <div>
          <Clock />
        </div>
        <p>일정들을 보여줄거임</p>
        <div className="row">
          <div className="col">
            <div>오늘의 할일들</div>
            <div>
              {notCompleteArray.map((arr) => {
                return (
                  <div key={arr._id} className="row ">
                    <div>{arr.todo}</div>
                    <div>
                      <span>{dayjs(arr.createdAt).format("HH:mm:ss")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <div>오늘 완료한 일들</div>
            <div>
              {completeArray.map((arr) => {
                return (
                  <div key={arr._id} className="row ">
                    <div>{arr.todo}</div>
                    <div>
                      <span>{dayjs(arr.createdAt).format("HH:mm:ss")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </HomeWrap>
    );
  }
  return <Loading />;
};

const HomeWrap = styled.div`
  background-color: gray;
  width: 768px;
  margin: auto;
  .row {
    display: flex;
  }
  .col {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
`;

export default React.memo(Home);
