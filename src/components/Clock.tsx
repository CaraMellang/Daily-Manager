import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [timeHorizon, setTimeHorizon] = useState("AM");
  const [time, setTime] = useState(dayjs(new Date()));

  let inter: any;
  useEffect(() => {
    inter = setInterval(() => {
      if (new Date().getHours() >= 12) {
        setTimeHorizon("PM");
      } else {
        setTimeHorizon("AM");
      }
      setTime(dayjs(new Date()));
    }, 1000);
    return () => {
      console.log("시계죽음 ㅋㅋ");
      clearInterval(inter);
    };
  }, []);
  return (
    <ClockWrap>
      <div className="time-horizon">{timeHorizon}</div>
      <div className="time">{time.format("HH:mm:ss")}</div>
    </ClockWrap>
  );
}

const ClockWrap = styled.div`
  display: flex;
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
  justify-content: center;
  .time-horizon {
    display: flex;
    align-items: flex-end;
    font-size: 2rem;
    margin-bottom: 11px;
    /* padding-bottom: 0.5rem; */
  }
  .time {
    display: flex;
    align-items: flex-end;
  }
`;

export default Clock;
