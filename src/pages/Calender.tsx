import React from "react";
import Calendar from "../components/Calendar/Calendar";
import styled from "styled-components";

const Calender = () => {
  return (
    <CalenderWrap>
      <Calendar></Calendar>
    </CalenderWrap>
  );
};

const CalenderWrap = styled.div`
  width: 768px;
  margin: auto;
`;

export default Calender;
