import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CenterRight = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const progressBar = setInterval(() => {
      console.log(count);
      if (count >= 40) {
        clearInterval(progressBar);
        return;
      }
      setCount(count + 1);
    }, 20);
    return () => clearInterval(progressBar);
  }, [count]);
  return (
    <CenterRightWrap>
      <div>dd</div>
      <div>progressBar{count}</div>
    </CenterRightWrap>
  );
};

const CenterRightWrap = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-sizing: border-box;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
`;

export default CenterRight;
