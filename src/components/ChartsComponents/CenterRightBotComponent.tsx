import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CenterRightComponentProps {
  title: string;
  progress: number;
  order: number;
}

const CenterRightBotComponent = ({
  title,
  progress,
  order,
}: CenterRightComponentProps) => {
  const [time, setTime] = useState(0);
  const [allow, setAllow] = useState(false);
  const [fadein, setFadein] = useState(0);
  
  setTimeout(() => {
    setFadein(1);
  }, order * 100);
  setTimeout(() => {
    setTime(1);
  }, order * 200);
  
  return (
    <CenterRightBotComponentWrap
      time={time}
      fadein={fadein}
      order={order}
      progress={progress}
    >
      <div>{title}</div>
      <div>
        <div className="count-per">{progress}%</div>
        <div className="progress-back">
          <div className="progress-bar2" />
        </div>
      </div>
    </CenterRightBotComponentWrap>
  );
};

const CenterRightBotComponentWrap = styled.div<{
  time: number;
  fadein: number;
  order: number;
  progress: number;
}>`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  opacity: 0;
  @keyframes opa {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: opa 0.8s;
  animation-fill-mode: forwards; 

  .count-per {
    text-align: end;

    opacity: 0;
    @keyframes opa {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: opa 0.5s 2.5s;
    animation-fill-mode: forwards; 
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
  .progress-bar2 {
    position: absolute;
    width: 0;
    @keyframes prog2 {
      0% {
        width: 0%;
      }
      100% {
        width: ${(props) => `${props.progress}%`};
      }
    }
    animation: prog2 1s 1.5s;
    animation-fill-mode: forwards; 
    height: 5px;
    background-color: #fc3857;
    border-radius: 10px;
  }
`;

export default React.memo(CenterRightBotComponent);
