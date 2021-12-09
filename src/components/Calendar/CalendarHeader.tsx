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
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M368 64L144 256l224 192V64z"></path>
        </svg> */}
      </div>
      <CalendarWrap>
        <div className="year-month">
          <div className="font-size-2rem">{currentMonth.format("YYYY")}</div>
          <div className="font-size-2rem">
            {calendarMonths[currentMonth.get("month")]}
          </div>
        </div>
      </CalendarWrap>
      {/* <div>{currentMonth.format("M월")}</div> */}
      <div className="swapmonth" onClick={nextClick}>
        {" "}
        {`>`}
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M144 448l224-192L144 64v384z"></path>
        </svg> */}
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
