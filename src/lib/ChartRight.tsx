import dayjs from "dayjs";

export function Progress(todos: []) {
  //예시 : y 에서 x는 몇퍼센트?
  //답: x X 100 / y
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
  console.log(prevCompletePer, todayCompletePer);
  let dayToDayCompletePer =
    (todayCompletePer / (prevCompletePer === 0 ? 1 : prevCompletePer)) * 100 -
    100; // 오늘이 100%,어제 완료한것이 없을경우 1, (100 / 1 ) * 100 - 100 = 9900 이라는 어메이징 값 발생, 수정필요(삼항연산자는 Infinity방지한것.)
  if (dayToDayCompletePer > 100) {
    dayToDayCompletePer = 100;
  }
  return { todayCompletePer, dayToDayCompletePer };
}
