import React from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {
  return (
    <CalendarWrap>
      <CalendarHeader></CalendarHeader>
      <CalendarBody></CalendarBody>
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div``;

export default Calendar;
