import React from "react";
import styled from "styled-components";

const CalendarBody = () => {
  return <CalendarBodyWrap>
  <div>일</div>
  <div>월</div>
  <div>화</div>
  <div>수</div>
  <div>목</div>
  <div>금</div>
  <div>토</div></CalendarBodyWrap>;
};
const CalendarBodyWrap = styled.div`
display: flex;
div {
  text-align: center;
  padding: 2rem;
  width: calc(100% / 7);
}`;

export default CalendarBody;
