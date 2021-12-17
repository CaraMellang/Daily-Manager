import React from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import CurrentDay from "../CurrentDay";
import { calendarMonths } from "../../lib/DateArrays";

interface CalendarHeaderProps {
  currentMonth: Dayjs;
  setCurrentMonth: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  completeHandle(bool: boolean): void;
}

const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
  completeHandle,
}: CalendarHeaderProps) => {
  const prevClick = () => {
    const prevDate = dayjs(currentMonth).subtract(1, "month");
    setCurrentMonth(prevDate);
    completeHandle(false);
  };
  const nextClick = () => {
    const nextDate = dayjs(currentMonth).add(1, "month");
    setCurrentMonth(nextDate);
    completeHandle(false);
  };
  return (
    <CalendarHeaderWrap>
      <div className="swapmonth" onClick={prevClick}>
        {`<`}
      </div>
      <CalendarWrap>
        <div className="year-month">
          <div className="font-size-2rem">{currentMonth.format("YYYY")}</div>
          <div className="font-size-2rem">
            {calendarMonths[currentMonth.get("month")]}
          </div>
        </div>
      </CalendarWrap>
      <div className="swapmonth" onClick={nextClick}>
        {" "}
        {`>`}
      </div>
    </CalendarHeaderWrap>
  );
};
const CalendarHeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* path {
    display: block;
  } */
  .swapmonth {
    cursor: pointer;
    font-size: 2rem;
  }
`;

const CalendarWrap = styled.div`
  display: flex;
  font-weight: bold;
  /* justify-content: center; */
  .date {
    font-size: 4rem;
  }
  .year-month {
    display: flex;
    flex-direction: column;
    padding-left: 0.4rem;
    text-align:center;
  }
  .font-size-2rem {
    font-size: 2rem;
  }
  
`;
export default CalendarHeader;
