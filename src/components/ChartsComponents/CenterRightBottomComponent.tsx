import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CenterRightComponentProps {
  title: string;
  progressa: number;
  order: number;
}

const CenterRightComponent = ({
  title,
  progressa,
  order,
}: CenterRightComponentProps) => {
  const [time, setTime] = useState(0);
  const [allow, setAllow] = useState(false);
  const [fadein, setFadein] = useState(0);
  console.log("", progressa);
  //   setTimeout(() => {
  //     setAllow(true);
  //   }, 500);
  setTimeout(() => {
    setFadein(1);
  }, order * 100);
  //   setTimeout(() => {
  //     setTime(1);
  //   }, order * 200);
  useEffect(() => {
    // if (allow === true) {
    //   const progressBar = setInterval(() => {
    //     // console.log(count);
    //     if (count >= progress) {
    //       clearInterval(progressBar);
    //       setTime(1);
    //       return;
    //     }
    //     setCount(count + 1);
    //   }, 10);
    //   return () => {
    //     clearInterval(progressBar);
    //     setAllow(false);
    //   };
    // }
  }, []);
  return (
    <CenterRightComponentWrap
      time={time}
      fadein={fadein}
      order={order}
      progress={progressa}
    >
      <div>{title}</div>
      <div>
        <div className="count-per">이런 시부랄{progressa}%</div>
        <div className="progress-back">
          <div className="progress-bar2" />
        </div>
      </div>
    </CenterRightComponentWrap>
  );
};

const CenterRightComponentWrap = styled.div<{
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
  opacity: ${(props) => props.fadein};
  transition: opacity ${(props) => props.order / 2}s ease-in-out;

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
  .progress-bar2 {
    position: absolute;
    width: 0;
    @keyframes prog {
      0% {
        width: 0%;
      }
      100% {
        width: ${(props) => `${props.progress}%`};
      }
    }
    animation: prog 1s;
    animation-fill-mode: forwards; //애니메이션 마지막상태유지
    height: 5px;
    background-color: #fc3857;
    border-radius: 10px;
  }
`;

export default React.memo(CenterRightComponent);
