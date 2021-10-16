import React from "react";
import styled from "styled-components";

const CalendarHeader = () => {
  return (
    <CalendarHeaderWrap>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M368 64L144 256l224 192V64z"></path>
      </svg>
      <div>헤더임</div>
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M144 448l224-192L144 64v384z"></path>
        </svg>
      </div>
    </CalendarHeaderWrap>
  );
};
const CalendarHeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  path {
    display: block;
  }
`;

export default CalendarHeader;
