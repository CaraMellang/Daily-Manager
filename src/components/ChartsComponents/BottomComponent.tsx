import dayjs from "dayjs";
import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ChartLineData } from "../../lib/DateArrays";

function BottomComponent() {
  const userSelector = useSelector((state: any) => state.userSliceReducer.user);
  const selector = useSelector((state: any) => state);
  const { userSliceReducer } = selector;
  const { lineDatas } = ChartLineData(selector.todosSliceReducer.todos);
  // console.log(
  //   Math.round(
  //     (selector.todosSliceReducer.todos.filter(
  //       (arr: any) =>
  //         arr.createdAt.getDate() === new Date().getDate() &&
  //         arr.createdAt.getMonth() === new Date().getMonth() &&
  //         arr.createdAt.getFullYear() === new Date().getFullYear() &&
  //         arr.success === true
  //     ).length *
  //       100) /
  //       selector.todosSliceReducer.todos.filter(
  //         (arr: any) =>
  //           arr.createdAt.getDate() === new Date().getDate() &&
  //           arr.createdAt.getMonth() === new Date().getMonth() &&
  //           arr.createdAt.getFullYear() === new Date().getFullYear()
  //       ).length
  //   )
  // );
  const barData = {
    labels: [
      `${dayjs(new Date()).add(-6, "day").get("date")}일`,
      `${dayjs(new Date()).add(-5, "day").get("date")}일`,
      `${dayjs(new Date()).add(-4, "day").get("date")}일`,
      `${dayjs(new Date()).add(-3, "day").get("date")}일`,
      `${dayjs(new Date()).add(-2, "day").get("date")}일`,
      `${dayjs(new Date()).add(-1, "day").get("date")}일`,
      `${dayjs(new Date()).get("date")}일(오늘)`,
    ],
    datasets: [
      {
        label: "완료수",
        data: [
          lineDatas[6].compleData.length,
          lineDatas[5].compleData.length,
          lineDatas[4].compleData.length,
          lineDatas[3].compleData.length,
          lineDatas[2].compleData.length,
          lineDatas[1].compleData.length,
          lineDatas[0].compleData.length,
        ],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 3,
      },
      {
        label: "목표수",
        data: [
          lineDatas[6].planData.length,
          lineDatas[5].planData.length,
          lineDatas[4].planData.length,
          lineDatas[3].planData.length,
          lineDatas[2].planData.length,
          lineDatas[1].planData.length,
          lineDatas[0].planData.length,
        ],
        fill: false,
        backgroundColor: "rgb(52, 152, 219)",
        borderColor: "rgb(52, 152, 219)",
        tension: 0.1,
      },
    ],
  };
  return (
    <BottomComponentWrap>
      <div className="chart-bottom w-100 bottom-item">
        <div className="bottom-item-header">7일간의 기록</div>
        <div className="bottom-item-con charts-padd">
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
    </BottomComponentWrap>
  );
}

const BottomComponentWrap = styled.div`
  width: 100%;
`;

export default BottomComponent;
