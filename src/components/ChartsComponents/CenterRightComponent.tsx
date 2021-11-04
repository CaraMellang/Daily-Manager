import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CenterRightComponentProps {
  title: string;
  progress: number;
}
interface CountProps {
  count: number;
}

const CenterRightComponent = ({ title, progress }: CenterRightComponentProps) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    const progressBar = setInterval(() => {
      console.log(count);
      if (count >= progress) {
        clearInterval(progressBar);
        setTime(1);
        return;
      }
      setCount(count + 1);
    }, 10);
    return () => clearInterval(progressBar);
  }, [count]);
  return (
    <CenterRightWrap count={count} time={time}>
      <div>{title}</div>
      <div>
        <div className="count-per">{count}%</div>
        <div className="progress-back">
          <div className="progress-bar" />
        </div>
      </div>
    </CenterRightWrap>
  );
};

const CenterRightWrap = styled.div<{ count: number; time: number }>`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);

  .count-per {
    text-align: end;
    opacity: ${(props) => props.time};
    transition: opacity 1s ease-in-out;
  }

  .progress-back {
    position: relative;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background: rgb(223, 223, 223);
    background: linear-gradient(
      180deg,
      rgba(223, 223, 223, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .progress-bar {
    position: relative;
    width: ${(props) => `${props.count}%`};
    height: 5px;
    background-color: #fc3857;
    border-radius: 10px;
  }
`;

export default CenterRightComponent;
