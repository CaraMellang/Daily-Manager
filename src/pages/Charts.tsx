import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BottomComponent from "../components/ChartsComponents/BottomComponent";
import CenterRightBottomComponent from "../components/ChartsComponents/CenterRightBottomComponent";
import CenterRightComponent from "../components/ChartsComponents/CenterRightComponent";
import TopComponent from "../components/ChartsComponents/TopComponent";
import useMobile from "../components/hooks/useMobile";
import Loading from "../components/Loading";
import { Progress } from "../lib/ChartRight";
import media from "../lib/media";
import { TODOS_REQUEST } from "../modules/redux/Todos";

const Charts = () => {
  const selector = useSelector((state: any) => state);
  const { userSliceReducer } = selector;
  const dispatch = useDispatch();
  const { activeMobile, innerWidth } = useMobile(false);

  const columnToggleHandle = (): string => {
    return innerWidth < 425 ? `col` : `row`;
  };

  useEffect(() => {
    const token = userSliceReducer.user.accessToken;
    const userId = userSliceReducer.user.userId;
    dispatch(TODOS_REQUEST({ token, userId }));
  }, []);

  if (selector.todosSliceReducer.todosSuccess) {
    const { todayCompletePer, dayToDayCompletePer } = Progress(
      selector.todosSliceReducer.todos
    );

    const barData = {
      labels: [`미완료`, `완료`, `목표`],
      datasets: [
        {
          data: [
            selector.todosSliceReducer.todos.filter(
              (arr: any) =>
                arr.createdAt.getDate() === new Date().getDate() &&
                arr.createdAt.getMonth() === new Date().getMonth() &&
                arr.createdAt.getFullYear() === new Date().getFullYear() &&
                arr.success == false
            ).length,
            selector.todosSliceReducer.todos.filter(
              (arr: any) =>
                arr.createdAt.getDate() === new Date().getDate() &&
                arr.createdAt.getMonth() === new Date().getMonth() &&
                arr.createdAt.getFullYear() === new Date().getFullYear() &&
                arr.success === true
            ).length,
            selector.todosSliceReducer.todos.filter(
              (arr: any) =>
                arr.createdAt.getDate() === new Date().getDate() &&
                arr.createdAt.getMonth() === new Date().getMonth() &&
                arr.createdAt.getFullYear() === new Date().getFullYear()
            ).length,
          ],
          borderWidth: 2,
          hoverBorderWidth: 3,
          borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
          backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(98,181,229,1)",
            "rgba(78, 214, 113,1)",
          ],
        },
      ],
    };

    return (
      <ChartsWrap>
        <div className="content">
          <div className="charts-background">
            <div className="charts-padd">
              <div className="charts">
                <div className="charts-form col gap">
                  <div className="chart-top w-100">
                    <div className={`gap ${columnToggleHandle()}`}>
                      <div className="top-item">
                        {/* 뭘봐{userSelector.username} 입니다~~ */}
                        <TopComponent
                          title={`전체 완료 수`}
                          data={
                            selector.todosSliceReducer.todos.filter(
                              (arr: any) => arr.success === true
                            ).length
                          }
                        />
                      </div>
                      <div className="top-item">
                        {/* 뭘봐{userSelector.createdAt} 입니다~~ */}
                        <TopComponent
                          title={`전체 작성 수`}
                          data={selector.todosSliceReducer.todos.length}
                        />
                      </div>
                      <div className="top-item">
                        <TopComponent
                          title={`오늘 작성 수`}
                          data={
                            selector.todosSliceReducer.todos.filter(
                              (arr: any) =>
                                arr.createdAt.getDate() ===
                                  new Date().getDate() &&
                                arr.createdAt.getMonth() ===
                                  new Date().getMonth() &&
                                arr.createdAt.getFullYear() ===
                                  new Date().getFullYear()
                            ).length
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="chart-center w-100">
                    <div className={`center ${columnToggleHandle()} gap`}>
                      <div className="center-item">
                        <div className="center-left-item-header">
                          오늘 하루 목표
                        </div>
                        <div className="center-left-item-con charts-padd">
                          <Bar
                            data={barData}
                            options={{
                              // reponsive: false,
                              // reponsive: true,
                              maintainAspectRatio: false,

                              plugins: {
                                legend: {
                                  display: false,
                                  position: "right",
                                },
                              },
                              animation: {
                                // duration: aniToggle,
                                // onComplete: animationHandler,
                              },
                            }}
                          ></Bar>
                        </div>
                      </div>
                      <div className="center-item center-right-item padd05 ">
                        <div className=" col gap">
                          <CenterRightComponent
                            title="오늘 달성률"
                            progress={
                              isNaN(todayCompletePer) || todayCompletePer < 0
                                ? 0
                                : todayCompletePer
                            }
                            order={1}
                          />
                          <CenterRightBottomComponent
                            title="전일대비 달성 증가률"
                            progress={
                              isNaN(dayToDayCompletePer) ||
                              dayToDayCompletePer < 0
                                ? 0
                                : dayToDayCompletePer
                            }
                            order={2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <BottomComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChartsWrap>
    );
  }
  return <Loading />;
};
const ChartsWrap = styled.div`
  text-align: center;
  font-weight: bold;
  /* background: rgb(241, 147, 147);
  background: linear-gradient(
    180deg,
    rgba(19, 68, 88, 1) 10%,
    rgba(182, 114, 114, 1) 100%
  ); */
  .content {
    width: 768px;
    margin: auto;
  }
  .charts-background {
    height: 100%;
  }
  .charts-padd {
    padding: 2rem;
    opacity: 1;
  }
  ${media.medium} {
    .charts-padd {
      padding: 0.5rem;
    }
  }
  /* 134458 */
  .charts {
    color: black;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    /* background: rgb(168, 237, 234);
    background: linear-gradient(
      0deg,
      rgba(168, 237, 234, 1) 0%,
      rgba(254, 214, 227, 1) 100%
    ); */
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
  .gap {
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
  ${media.small} {
    .top-item {
      width: 100%;
    }
    .gap {
      gap: 0.35rem;
    }
  }

  .top-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: rgba(252, 114, 114, 1);
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .top-item-con {
    color: rgba(252, 114, 114, 1);
    background-color: white;
    border-radius: 0 0 10px 10px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .center-item {
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  ${media.small} {
    .center-item {
      width: 100%;
    }
  }
  .center-left-item-header {
    color: white;
    border-radius: 10px 10px 0 0;
    background-color: rgba(252, 114, 114, 1);
  }
  .center-left-item-con {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: rgba(252, 114, 114, 1);
    background-color: white;
    border-radius: 0 0 10px 10px;
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
    background-color: rgba(252, 114, 114, 1);
  }
  .bottom-item-con {
    color: #2eb500;
    background-color: white;
    border-radius: 0 0 10px 10px;
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
