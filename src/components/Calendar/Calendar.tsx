import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TODOS_REQUEST } from "../../modules/redux/Todos";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import CreateTodo from "./CreateTodo";

interface dataProps {
  // _id:
  // creatorId:
  // todo:
  // success:
  // createdAt:
  // updatedAt:
}

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(dayjs(currentDate));
  const [getCurrDates, setGetCurrDates] = useState([]);
  const [complete, setComplete] = useState(false);
  const selector: any = useSelector((state) => state);
  dayjs.extend(utc);

  const completeHandle = (bool: boolean) => {
    setComplete(bool);
  };

  const getCurMonthData = async (userSliceReducer: any) => {
    const { user } = userSliceReducer;
    // console.log(user.userId, dayjs(currentDate).toDate().getMonth());
    const data = {
      userId: user.userId,
      year: currentMonth.toDate().getFullYear(),
      month: currentMonth.toDate().getMonth() + 1,
      date: currentMonth.toDate().getDate(),
      // date: dayjs(currentDate).toDate().getMonth() + 1,
      gd: "???",
    };
    const todos = await axios.post(
      "http://localhost:5000/todo/findcurrmonth",
      data
    );
    console.log(
      "실패했나,,,",
      todos.data.data,
      " 길이",
      todos.data.data.length
    );
    if (todos.data.data.length === 0) {
      console.log("얘! 데이터가 비어있단다!");
      return;
    }

    const dd = todos.data.data[0];
    // console.log(
    //   `getCurMonthData 현재 날짜 월${
    //     currentMonth.get(`month`) + 1
    //   } 일: ${currentMonth.get(`date`)}`
    // );

    // console.log("아잉", dd.createdAt);
    // console.log("슬라이스", dd.createdAt.slice(0, 19));
    // console.log(
    //   `아이디: ${typeof dd._id} creatorId: ${typeof dd.creatorId} todo: ${typeof dd.todo} success: ${typeof dd.success} createdAt: ${dayjs(
    //     new Date(dd.createdAt.slice(0, 19)) //slice안하면 9시간 추가됨.
    //   ).format(`YYYY-MM-DDTHH:mm:ss`)} updatedAt: ${typeof dd.updatedAt}`
    // );

    // console.log(
    //   "아이진짜",
    //   dayjs.utc(new Date(dd.createdAt)).format(`YYYY-MM-DD HH:mm:ss`)
    // );
    // console.log(new Date(), dd.createdAt);
    // console.log(
    //   `아이디: ${typeof dd._id} creatorId: ${typeof dd.creatorId} todo: ${typeof dd.todo} success: ${typeof dd.success} createdAt: ${typeof dd.createdAt} updatedAt: ${typeof dd.updatedAt}`
    // );
    setGetCurrDates(todos.data.data);
  };

  useEffect(() => {
    // const token = selector.userSliceReducer.user.accessToken;
    // const userId = selector.userSliceReducer.user.userId;
    // dispatch(TODOS_REQUEST({ token, userId }));
    // console.log("ㄹ릴낟달;ㅇ?", selector.todosSliceReducer.todos);

    // const { userSliceReducer } = userSelector;
    // console.log(userSliceReducer);
    // getCurMonthData(userSliceReducer);
    return () => {};
  }, [currentMonth]);
  return (
    <CalendarWrap>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        completeHandle={completeHandle}
      />
      <CalendarBody
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        completeHandle={completeHandle}
        complete={complete}
        // getCurrentDates={getCurrentDates}
      />
      <CreateTodo completeHandle={completeHandle} />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  width: 768px;
`;

export default React.memo(Calendar);
