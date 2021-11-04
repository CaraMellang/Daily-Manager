import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import styled from "styled-components";
import CenterRightComponent from "../components/ChartsComponents/CenterRightComponent";
import { color } from "../lib/color";

const Charts = () => {
  const doughnutData = {
    labels: [`테스팅`, `gdgd`, `쿄쿄요쿄요`],
    datasets: [
      {
        data: [50, 90, 204],
        borderWidth: 2,
        hoverBorderWidth: 3,
        borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
        backgroundColor: [
          "rgba(98,181,229,1)",
          "rgba(255,99,132,1)",
          "rgba(78, 214, 113,1)",
        ],
      },
    ],
  };
  const barData = {
    labels: ["29일", "30일", "31일", "01일", "02일", "03일", "04일"],
    datasets: [
      {
        label: "완료수",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 3,
      },
      {
        label: "목표수",
        data: [71, 68, 63, 78, 60, 46, 61],
        fill: false,
        backgroundColor: "rgb(52, 152, 219)",
        borderColor: "rgb(52, 152, 219)",
        tension: 0.1,
      },
    ],
  };

  return (
    <ChartsWrap>
      <div className="charts-background">
        <div className="charts-padd">
          <div className="charts">
            <div className="charts-form col gap1">
              <div className="chart-top w-100">
                <div className="gap1 row">
                  <div className="top-item">
                    <div className="top-item-header">완료한 수</div>
                    <div className="top-item-con">123,123</div>
                  </div>
                  <div className="top-item">
                    <div className="top-item-header">현재까지 작성</div>
                    <div className="top-item-con">123,123</div>
                  </div>
                  <div className="top-item">
                    <div className="top-item-header">미해결 수?</div>
                    <div className="top-item-con">123,123 </div>
                  </div>
                </div>
              </div>
              <div className="chart-center w-100">
                <div className="center row gap1">
                  <div className="center-item">
                    <div className="center-left-item-header">헤더</div>
                    <div className="center-left-item-con">
                      <Doughnut
                        data={doughnutData}
                        options={{
                          // reponsive: false,
                          // reponsive: true,
                          maintainAspectRatio: false,

                          plugins: {
                            legend: {
                              display: true,
                              position: "right",
                            },
                          },
                          animation: {
                            // duration: aniToggle,
                            // onComplete: animationHandler,
                          },
                        }}
                      ></Doughnut>
                    </div>
                  </div>
                  <div className="center-item center-right-item padd05 ">
                    <div className=" col gap1">
                      <CenterRightComponent title="오늘 완료 수" progress={5} />
                      <CenterRightComponent title="오늘 남은 수" progress={19} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-bottom w-100 bottom-item">
                <div className="bottom-item-header">헤더</div>
                <div className="bottom-item-con">
                  <Line
                    data={barData}
                    options={{
                      // reponsive: false,
                      // reponsive: true,
                      maintainAspectRatio: false,

                      plugins: {
                        legend: {
                          display: true,
                          position: "top",
                        },
                      },
                      animation: {
                        // duration: aniToggle,
                        // onComplete: animationHandler,
                      },
                    }}
                  ></Line>
                </div>
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
    height: 700px;
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
  .gap1 {
    gap: 1rem;
  }
  .padd05 {
    padding: 0.5rem;
  }
  .top-item {
    width: 33.3%;
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }

  .top-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: green;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .top-item-con {
    color: #2eb500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .center-item {
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .center-left-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: green;
  }
  .center-left-item-con {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #2eb500;
  }
  /* .center-right-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: green;
  }
  .center-right-item-con {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #2eb500;
  } */
  .center-right-item {
    background: rgb(252, 55, 86);
    background: linear-gradient(
      180deg,
      rgba(252, 55, 86, 1) 0%,
      rgba(251, 154, 169, 1) 100%
    );
  }
  .bottom-item {
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .bottom-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: green;
  }
  .bottom-item-con {
    padding: 1rem;
    color: #2eb500;
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
