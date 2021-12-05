import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { calendarMonths } from "../lib/DateArrays";

interface CurrentDayProps {
  fullDay: Date;
}

function CurrentDay({ fullDay }: CurrentDayProps) {
  const [day, setDay] = useState(dayjs(new Date()));

  useEffect(() => {
    setDay(dayjs(fullDay));
  }, []);
  return (
    <CurrentDayWrap>
      <div className="date">{day.format("DD")}</div>
      <div className="year-month">
        <div className="font-size-2rem">{calendarMonths[day.get("month")]}</div>
        <div className="font-size-2rem">{day.format("YYYY")}</div>
      </div>
    </CurrentDayWrap>
  );
}

const CurrentDayWrap = styled.div`
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
  }
  .font-size-2rem {
    font-size: 2rem;
  }
`;

export default CurrentDay;
