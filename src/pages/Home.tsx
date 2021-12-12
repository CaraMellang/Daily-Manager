import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { notice } from "react-interaction";
import { useDispatch, useSelector } from "react-redux";
import { TODOS_REQUEST } from "../modules/redux/Todos";
import Loading from "../components/Loading";
import dayjs from "dayjs";
import Clock from "../components/Clock";
import NotCompleteTodo from "../components/Home/NotCompleteTodo";
import { Todo } from "../components/Calendar/CalendarBody";
import CompleteTodo from "../components/Home/CompleteTodo";
import CurrentDay from "../components/CurrentDay";
import HomePortal from "../components/Home/HomePortal";
import HomeModal from "../components/Home/HomeModal";
import media from "../lib/media";

const Home = () => {
  let dd: any[] = [];
  let completeArray: Todo[] = [];
  let notCompleteArray: Todo[] = [];
  const [complete, setComplete] = useState(false);
  const [clickFix, setClickFix] = useState(false);
  const [clickFixTodo, setClickFixTodo] = useState<Todo>({
    _id: `string;`,
    creatorId: `string;`,
    todo: ` string;`,
    success: false,
    createdAt: `string;`,
    updatedAt: "null",
  });
  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  const { userSliceReducer } = selector;
  console.log(selector.todosSliceReducer.todos);

  // if (!selector.todosSliceReducer.todosSuccess) {
  //   const token = userSliceReducer.user.accessToken;
  //   const userId = userSliceReducer.user.userId;
  //   dispatch(TODOS_REQUEST({ token, userId }));
  // }

  if (selector.todosSliceReducer.todosSuccess) {
    console.log(
      (dd = selector.todosSliceReducer.todos.filter(
        (arr: any) =>
          arr.createdAt.getDate() === new Date().getDate() &&
          arr.createdAt.getMonth() === new Date().getMonth() &&
          arr.createdAt.getFullYear() === new Date().getFullYear()
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
  }

  const completeHandle = (bool: boolean) => {
    setComplete((prev) => !prev);
  };
  const clickFixHandle = (bool: boolean) => {
    setClickFix(bool);
  };
  const clickFixTodoHandle = (todo: Todo) => {
    setClickFixTodo(todo);
  };

  useEffect(() => {
    console.log("디스패치!");

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
  }, [complete]);

  if (selector.todosSliceReducer.todosSuccess) {
    return (
      <HomeWrap>
        <div className="content">
          {/* <button
            type="button"
            className="example-button"
            onClick={() => notice("나가")}
          >
            <div>notice</div>
          </button> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}
          >
            <CurrentDay fullDay={new Date()} />
            <div style={{ marginTop: "3rem" }}>
              <Clock />
            </div>
          </div>
          <p>Good Day, {userSliceReducer.user.username}</p>
          <div className="row col-mo">
            <div className="w50per padd ">
              <div className="todo-title">
                <span className="title1">오늘의 할일들</span>
              </div>
              <div className="col back-blur radius12px">
                {notCompleteArray.length !== 0 ? (
                  notCompleteArray.map((arr) => {
                    return (
                      <NotCompleteTodo
                        key={arr._id}
                        Todo={arr}
                        token={userSliceReducer.user.accessToken}
                        completeHandle={completeHandle}
                        clickFixHandle={clickFixHandle}
                        clickFixTodoHandle={clickFixTodoHandle}
                      />
                    );
                  })
                ) : (
                  <div className="not-found">
                    <div>아무것도 없는거 같네요..</div>
                    <div>오늘의 할 일을 등록해보세요!</div>
                  </div>
                )}
              </div>
            </div>
            <div className="w50per padd ">
              <div className="todo-title">
                <span className="title2">오늘 완료한 일들</span>
              </div>
              <div className=" col back-blur radius12px">
                {completeArray.length !== 0 ? (
                  completeArray.map((arr) => {
                    return (
                      <CompleteTodo
                        key={arr._id}
                        Todo={arr}
                        token={userSliceReducer.user.accessToken}
                        completeHandle={completeHandle}
                        clickFixHandle={clickFixHandle}
                        clickFixTodoHandle={clickFixTodoHandle}
                      />
                    );
                  })
                ) : (
                  <div className="not-found">
                    <div>완료된 투두가 없어요!</div>
                    <div>오늘의 할일이 있다면 빠르게 끝내보죠!</div>
                  </div>
                )}
              </div>
            </div>
            {/* <div>최근 업데이트</div> */}
          </div>
        </div>
        {clickFix && (
          <HomePortal>
            <HomeModal
              clickFixHandle={clickFixHandle}
              Todo={clickFixTodo}
              completeHandle={completeHandle}
            />
          </HomePortal>
        )}
      </HomeWrap>
    );
  }
  return <Loading />;
};

const HomeWrap = styled.div`
  /* background-color: gray; */
  /* background-size: 100% 100%; */

  /* height: 92.5vh; */
  p {
    font-weight: bold;
    text-align: center;
  }
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
  }
  .padd {
    padding: 0.5rem;
    box-sizing: border-box;
  }
  .w50per {
    width: 50%;
  }
  .radius12px {
    border-radius: 12px;
  }
  .back-blur {
    background-color: rgba(255, 255, 255, 0.2);
    /* background-color: rgba(62, 62, 62, 0.3); */
  }
  .not-found {
    box-sizing: border-box;
    padding: 1rem;
    font-weight: bold;
    color: #000;
    opacity: 0.4;
  }
  .todo-title {
    padding-bottom: 0.5rem;
    text-align: center;
    @keyframes fade {
      0% {
        opacity: 0;
        top: -20px;
      }
      75% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
        top: 0px;
      }
    }
    .title1 {
      position: relative;
      top: -20px;
      animation: fade 0.4s;
      animation-fill-mode: forwards; //애니메이션 마지막상태유지
    }
    .title2 {
      position: relative;
      top: -20px;
      animation: fade 0.4s 0.1s;
      animation-fill-mode: forwards;
    }
  }
  ${media.xsmall} {
    .col-mo {
      display: flex;
      flex-direction: column;
    }
    .w50per {
      width: 100%;
    }
  }
`;

export default React.memo(Home);
