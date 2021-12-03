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
  .content {
    width: 768px;
    margin: auto;
  }
`;

export default Calender;
