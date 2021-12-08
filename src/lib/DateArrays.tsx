import dayjs from "dayjs";
import { useSelector } from "react-redux";
const currDate = dayjs(new Date());

export function ChartLineData(todos: []) {
  // const selector: any = useSelector((state) => state);
  // const {
  //   todosSliceReducer: { todos },
  // } = selector;
  let lineDatas: any = [
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
    { compleData: [], planData: [] },
  ];
  todos.forEach((arr: any) => {
    for (let i = 0; i >= -6; i--) {
      if (
        arr.createdAt.getDate() ===
          dayjs(new Date()).add(i, "day").get("date") &&
        arr.createdAt.getMonth() ===
          dayjs(new Date()).add(i, "day").get("month") &&
        arr.createdAt.getFullYear() ===
          dayjs(new Date()).add(i, "day").get("year")
      ) {
        if (arr.success) {
          lineDatas[-i].compleData.push(arr);
          lineDatas[-i].planData.push(arr);
        }
        if (!arr.success) {
          lineDatas[-i].planData.push(arr);
        }
      }
    }
  });
  return { lineDatas };
}

export const calendarMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const calendarDates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
