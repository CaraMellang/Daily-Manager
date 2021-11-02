import React from "react";
import styled from "styled-components";
import { color } from "../lib/color";

const Charts = () => {
  return (
    <ChartsWrap>
      <div className="charts-background">
        <div className="charts-padd">
          <div className="charts">
            <div className="charts-form col">
              <div className="chart-top w-100">
                <div className="toptop row">
                  <div className="top-item">
                    <div className="item-header">완료한 수</div>
                    <div className="item-con">123,123</div>
                  </div>
                  <div className="top-item">
                    <div className="item-header">현재까지 작성</div>
                    <div className="item-con">123,123</div>
                  </div>
                  <div className="top-item">
                    <div className="item-header">미해결 수?</div>
                    <div className="item-con">123,123 </div>
                  </div>
                </div>
              </div>
              <div className="chart-center w-100">
                <div className="center row">
                  <div className="center-item">
                    <div className="item-header">헤더</div>
                    <div className="item-con">차트센터에용</div>
                  </div>
                  <div className="center-item">차트센터에용</div>
                </div>
              </div>
              <div className="chart-bottom w-100 bottom-item">
                <div className="item-header">헤더</div>
                <div className="item-con">차트qkxpa에용</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChartsWrap>
  );
};

const ChartsWrap = styled.div`
  width: 768px;
  margin: auto;
  text-align: center;
  font-weight: bold;
  .charts-background {
    height: 90vh;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  .charts-padd {
    padding: 2rem;
  }
  .charts {
    color: black;
    height: 40vh;
    padding: 1rem;
    background-color: white;
    border-radius: 12px;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .w-100 {
    width: 100%;
  }
  .toptop {
    gap: 0.5rem;
  }
  .top-item {
    width: 33.3%;
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .center-item {
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .bottom-item {
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: green;
  }
  .item-con {
    color: #2eb500;
  }
`;

export default Charts;
