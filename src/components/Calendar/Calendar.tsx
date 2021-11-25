import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

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
  const [getCurrentDates, setGetCurrentDates] = useState([]);
  const userSelector: any = useSelector((state) => state);
  dayjs.extend(utc);

  const getCurMonthData = async (userSliceReducer: any) => {
    const { user } = userSliceReducer;
    console.log(user.userId, dayjs(currentDate).toDate().getMonth());
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
    console.log("실패했나,,,", todos.data.data);
    const dd = todos.data.data[0];

    console.log(
      `아이디: ${typeof dd._id} creatorId: ${typeof dd.creatorId} todo: ${typeof dd.todo} success: ${typeof dd.success} createdAt: ${dayjs(
        new Date(dd.createdAt.slice(0, 19)) //slice안하면 9시간 추가됨.
      ).format(`YYYY-MM-DDTHH:mm:ss.sssZ`)} updatedAt: ${typeof dd.updatedAt}`
    );
    // console.log(
    //   "아이진짜",
    //   dayjs.utc(new Date(dd.createdAt)).format(`YYYY-MM-DD HH:mm:ss`)
    // );
    // console.log(new Date(), dd.createdAt);
    // console.log(
    //   `아이디: ${typeof dd._id} creatorId: ${typeof dd.creatorId} todo: ${typeof dd.todo} success: ${typeof dd.success} createdAt: ${typeof dd.createdAt} updatedAt: ${typeof dd.updatedAt}`
    // );
    setGetCurrentDates(todos.data.data);
  };

  useEffect(() => {
    const { userSliceReducer } = userSelector;
    console.log(userSliceReducer);
    getCurMonthData(userSliceReducer);
    return () => {
      return;
    };
  }, [currentMonth]);
  return (
    <CalendarWrap>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <CalendarBody
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        // getCurrentDates={getCurrentDates}
      />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  width: 768px;
`;

export default Calendar;
