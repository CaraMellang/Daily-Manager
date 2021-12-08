import React from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";

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
      <button onClick={prevClick}>
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
      </button>
      <div>{currentMonth.format("M월")}</div>
      <button onClick={nextClick}>
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
      </button>
    </CalendarHeaderWrap>
  );
};
const CalendarHeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* path {
    display: block;
  } */
`;

export default CalendarHeader;
