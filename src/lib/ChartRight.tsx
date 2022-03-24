import dayjs from "dayjs";

export function Progress(todos: []) {
  const prevDate = dayjs(new Date()).add(-1, "day");
  let todayCompletePer = Math.round(
    (todos.filter(
      (arr: any) =>
        arr.createdAt.getDate() === new Date().getDate() &&
        arr.createdAt.getMonth() === new Date().getMonth() &&
        arr.createdAt.getFullYear() === new Date().getFullYear() &&
        arr.success === true
    ).length *
      100) /
      todos.filter(
        (arr: any) =>
          arr.createdAt.getDate() === new Date().getDate() &&
          arr.createdAt.getMonth() === new Date().getMonth() &&
          arr.createdAt.getFullYear() === new Date().getFullYear()
      ).length
  );
  const prevCompletePer =
    (todos.filter(
      (arr: any) =>
        arr.createdAt.getDate() === prevDate.get("date") &&
        arr.createdAt.getMonth() === prevDate.get("month") &&
        arr.createdAt.getFullYear() === prevDate.get("year") &&
        arr.success === true
    ).length *
      100) /
    todos.filter(
      (arr: any) =>
        arr.createdAt.getDate() === prevDate.get("date") &&
        arr.createdAt.getMonth() === prevDate.get("month") &&
        arr.createdAt.getFullYear() === prevDate.get("year")
    ).length;

  //전일대비 계산
  let dayToDayCompletePer =
    (todayCompletePer / (prevCompletePer === 0 ? 1 : prevCompletePer)) * 100 -
    100; 
  if (dayToDayCompletePer > 100) {
    dayToDayCompletePer = 100;
  }
  return { todayCompletePer, dayToDayCompletePer };
}
