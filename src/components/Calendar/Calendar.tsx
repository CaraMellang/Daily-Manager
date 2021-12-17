import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { backPath } from "../../lib/HttpPath";
import { TODOS_REQUEST } from "../../modules/redux/Todos";
import CalendarBody, { Todo } from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import CreateTodo from "./CreateTodo";


const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(dayjs(currentDate));
  const [getCurrDates, setGetCurrDates] = useState([]);
  const [complete, setComplete] = useState(false);
  const selector: any = useSelector((state) => state);
  const dispatch = useDispatch();
  dayjs.extend(utc);

  const completeHandle = (bool: boolean) => {
    setComplete(bool);
  };

  useEffect(() => {
    return () => {};
  }, [complete]);
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
      />
      <CreateTodo completeHandle={completeHandle} />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
`;

export default React.memo(Calendar);
