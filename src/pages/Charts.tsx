import React from "react";
import styled from "styled-components";

const Charts = () => {
  
  return (
    <ChartsWrap>
      <div className="charts-background">
        <div className="charts-padd">
          <div className="charts">차트에용</div>
        </div>
      </div>
    </ChartsWrap>
  );
};

const ChartsWrap = styled.div`
  width: 768px;
  margin: auto;
  .charts-background {
    height: 100vh;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  .charts-padd {
    padding: 2rem;
  }
  .charts {
    color: black;
    height: 40vh;
    background-color: white;
    border-radius: 12px;
  }
`;

export default Charts;
