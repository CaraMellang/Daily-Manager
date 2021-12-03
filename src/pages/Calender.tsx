import React from "react";
import Calendar from "../components/Calendar/Calendar";
import styled from "styled-components";

const Calender = () => {
  return (
    <CalenderWrap>
      <div className="content">
        <Calendar></Calendar>
      </div>
    </CalenderWrap>
  );
};

const CalenderWrap = styled.div`
  background: rgb(241, 147, 147);
  background: linear-gradient(
    180deg,
    rgba(19, 68, 88, 1) 10%,
    rgba(182, 114, 114, 1) 100%
  );
  height: 92.5vh;
  .content {
    width: 768px;
    margin: auto;
  }
`;

export default Calender;
