import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { notice } from "react-interaction";
import styled from "styled-components";

interface CalendarBodyProps {
  currentMonth: Dayjs;
  setCurrentMonth: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

interface DateInfo {
  date: number;
  month: number;
  fulldate: string;
  descrition: string;
}

const CalendarBody = ({ currentMonth, setCurrentMonth }: CalendarBodyProps) => {
  const dummy = {
    date: 18,
    month: 10,
    fulldate: "2021-11-05",
    title: "기분좋은 오늘의하루!",
    descrition: "추가됨?",
  };
  const [dates, setDates] = useState([
    { date: 1, month: 2, fulldate: "string", descrition: "string" },
  ]);
  // const [toggle, setToggle] = useState(false);
  const daysArray = ["일", "월", "화", "수", "목", "금", "토"];

  const paintCalendar = () => {
    let dateArray: Array<DateInfo> = [];

    dayjs(currentMonth).set("date", 0).get("date");
    const prevLastDay = dayjs(currentMonth).set("date", 0).get("day");
    for (let i = 0; i <= 6; i++) {
      let data = {
        date: 404,
        month: currentMonth.get("month"),
        fulldate: currentMonth.format("YYYY-MM-DD"),
        descrition: "공란날짜임",
      };
      dateArray.push(data);
      if (i === 6) {
        console.log("첫줄 캇!");
        dateArray = [];
      }
      if (i === prevLastDay) {
        console.log(prevLastDay);
        break;
      }
    }
    // firtsRow();
    for (
      let i = 1;
      i <= dayjs(currentMonth).add(1, "month").set("date", 0).get("date");
      i++
    ) {
      // setDates((prevState) => [...prevState, i]);
      let data = {
        date: i,
        month: currentMonth.get("month"),
        fulldate: currentMonth.set("date", i).format("YYYY-MM-DD"),
        descrition: "잘됨",
      };
      dateArray.push(data);
    }
    const thisLastDay = dayjs(currentMonth)
      .add(1, "month")
      .set("date", 0)
      .get("day");
    for (let i = 0; i <= 6; i++) {
      if (thisLastDay < i) {
        let data = {
          date: 404,
          month: currentMonth.get("month"),
          fulldate: currentMonth.format("YYYY-MM-DD"),
          descrition: "공란날짜임",
        };
        dateArray.push(data);
      }
    }

    console.log(dateArray);
    // console.log(dateArray);
    setDates(dateArray);
  };

  const dateClick = (e: any) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // if (e.target !== e.currentTarget) {
    //   return;
    // }
    console.log(e);
    const yValue = window.scrollY;
    // document.body.style.cssText = `position: fixed; top: -${yValue}px`;
    const text =
      dummy.fulldate === e.currentTarget.title ? dummy.descrition : "";
    document.body.style.overflow = "hidden";
    notice(
      `클릭하신 날짜는 ${e.currentTarget.title} 입니다. ${`\n` + text}`
    ).then(() => {
      // document.body.style.cssText = `position: unset ; top: -${yValue}px`; //모바일도 대응 근데 좀 손봐야함
      document.body.style.overflow = "unset";
    });
  };

  // console.log(dayjs(currentMonth).set("date", 0).get("day"));
  // console.log(currentMonth.startOf("week").format("YYYY - MM - DD"));
  // console.log(dayjs("2021-11-00").format("DD/MM/YYYY"));

  useEffect(() => {
    paintCalendar();
    console.log("리렌더!");
  }, [currentMonth]);

  return (
    <CalendarBodyWrap>
      <CalendarDayarray>
        {daysArray.map((item, index) => (
          <div key={index} className="daysblock">
            <div className="days">{item}</div>
          </div>
        ))}
      </CalendarDayarray>
      <CalendarDates>
        {dates.map((i, index) => {
          if (i.date === 404) {
            return (
              <div className="date-box " key={index}>
                <div className="date ">
                  <div className="date-box-non">{""}</div>
                </div>
              </div>
            );
          }
          if (i.fulldate === dummy.fulldate) {
            return (
              <div className="date-box" key={index}>
                <div className="date" onClick={dateClick} title={i.fulldate}>
                  <div className={`ddate red`}>
                    <div>{i.date}</div>
                    <div>
                      {dummy.title.slice(0, 12) !== ""
                        ? dummy.title.slice(0, 12)
                        : dummy.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="date-box" key={index}>
              <div className="date" onClick={dateClick} title={i.fulldate}>
                <div className="ddate">
                  <div>{i.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </CalendarDates>
    </CalendarBodyWrap>
  );
};
const CalendarBodyWrap = styled.div`
  padding: 1rem;
  background: rgb(168, 237, 234);
  background: linear-gradient(
    0deg,
    rgba(168, 237, 234, 1) 0%,
    rgba(254, 214, 227, 1) 100%
  );
`;
const CalendarDayarray = styled.div`
  display: flex;
  color: white;
  padding-bottom: 0.4rem;
  .daysblock {
    text-align: center;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    width: calc(100% / 7);
  }
  .days {
    box-sizing: border-box;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: none;
    color: black;
    font-weight: bold;
  }
`;
const CalendarDates = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  .date-box {
    cursor: pointer;
    width: calc(100% / 7);
    height: 5rem;
  }
  .date {
    box-sizing: border-box;
    padding-right: 0.1rem;
    padding-left: 0.1rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    height: 100%;
  }
  .ddate {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    padding: 0.25rem;
    box-sizing: border-box;
    height: 100%;
  }
  .date-box-non {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    padding: 0.25rem;
    box-sizing: border-box;
    height: 100%;
  }
  .red {
    background-color: red;
  }
`;

export default React.memo(CalendarBody);
