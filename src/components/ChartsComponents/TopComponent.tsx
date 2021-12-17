import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

interface TopComponentProps {
  title: string;
  data: number;
}

const TopComponent = ({ title, data }: TopComponentProps) => {
  const [intCounter, setIntCounter] = useState(0);
  useEffect(() => {
    const progressCount = setInterval(() => {
      if (intCounter >= data) {
        setIntCounter(data);
        clearInterval(progressCount);
        return;
      }
      setIntCounter(intCounter + 3);
    }, 50);

    return () => clearInterval(progressCount);
  });
  return (
    <TopComponentWrap>
      <div className="top-item-header">{title}</div>
      <div className="top-item-con">{intCounter.toLocaleString()}</div>
    </TopComponentWrap>
  );
};

const TopComponentWrap = styled.div``;

export default TopComponent;
