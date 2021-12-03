import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { notice } from "react-interaction";
import { useDispatch, useSelector } from "react-redux";
import { TODOS_REQUEST } from "../modules/redux/Todos";
import Loading from "../components/Loading";
import dayjs from "dayjs";
import Clock from "../components/Clock";
import NotCompleteTodo from "../Home/NotCompleteTodo";
import { Todo } from "../components/Calendar/CalendarBody";
import CompleteTodo from "../Home/CompleteTodo";
import CitySvg from "../svgs/cityscape.svg";
import CityPng from "../svgs/cityscape.png";
import CityJpg from "../svgs/cityscape.jpg";

const Home = () => {
  let dd: any[] = [];
  let completeArray: Todo[] = [];
  let notCompleteArray: Todo[] = [];
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
        <div className="content">
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
          <p>Good Day, {userSliceReducer.user.username}</p>
          <div className="row">
            <div className="col">
              <div>오늘의 할일들</div>
              <div>
                {notCompleteArray.map((arr) => {
                  console.log(arr);
                  return (
                    <div key={arr._id}>
                      <NotCompleteTodo Todo={arr} />
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
                      <CompleteTodo Todo={arr} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <img src={citySvg} /> */}
      </HomeWrap>
    );
  }
  return <Loading />;
};

const HomeWrap = styled.div`
  /* background-color: gray; */
  /* background-size: 100% 100%; */
  /* background-image: url(${CitySvg}); */
  /* background-image: url(${CityPng});
  background-repeat: no-repeat; */
  background: rgb(241, 147, 147);
  background: linear-gradient(
    180deg,
    rgba(19, 68, 88, 1) 10%,
    rgba(182, 114, 114, 1) 100%
  );
  height: 92.5vh;
  .content {
    width: 768px;
    /* height: 2000px; */
    margin: auto;
  }
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
