import dayjs from "dayjs";
import React, { useState } from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(dayjs(currentDate));
  return (
    <CalendarWrap>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <CalendarBody
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  width: 768px;
`;

export default Calendar;
