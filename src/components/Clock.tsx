import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [time, setTime] = useState(dayjs(new Date()));
  let inter: any;
  useEffect(() => {
    inter = setInterval(() => {
      setTime(dayjs(new Date()));
    }, 1000);
    return () => {
      console.log("시계죽음 ㅋㅋ");
      clearInterval(inter);
    };
  }, []);
  return <ClockWrap>{time.format("HH:mm:ss")}</ClockWrap>;
}

const ClockWrap = styled.div`
  text-align: center;
`;

export default Clock;
