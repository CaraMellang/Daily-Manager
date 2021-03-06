import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import ModalPortal from "../Modal/ModalPortal";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import todosSliceReducer, { TODOS_REQUEST } from "../../modules/redux/Todos";
import { backPath } from "../../lib/HttpPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import media from "../../lib/media";
import Loading from "../Loading";

interface CalendarBodyProps {
  currentMonth: Dayjs;
  setCurrentMonth: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  completeHandle(bool: boolean): void;
  complete: boolean;
}

export interface DateInfo {
  date: number;
  month: number;
  fulldate: string;
  descrition: string;
  todos: Todo[];
}
export interface Todo {
  _id: string;
  creatorId: string;
  todo: string;
  success: boolean;
  createdAt: string;
  updatedAt: string;
}

const CalendarBody = ({
  currentMonth,
  setCurrentMonth,
  completeHandle,
  complete,
}: CalendarBodyProps) => {
  const [dates, setDates] = useState<DateInfo[]>([
    { date: 1, month: 2, fulldate: "지s", descrition: "string", todos: [] },
  ]);
  const [loading, setLoading] = useState(false);

  const [dateModalToggle, setDateModalToggle] = useState(false);
  const [clickDate, setClickDate] = useState(0);
  const userSelector: any = useSelector((state) => state);
  const selector: any = useSelector((state) => state);
  const { todosSuccess } = useSelector(
    (state: any) => state.todosSliceReducer.todosSuccess
  );

  const daysArray = ["일", "월", "화", "수", "목", "금", "토"];

  const paintCalendar = async (userSliceReducer: any) => {
    let dateArray: DateInfo[] = [];

    setLoading(true);
    const todoDatas = await getCurMonthData(userSliceReducer);

    dayjs(currentMonth).set("date", 0).get("date");
    const prevLastDay = dayjs(currentMonth).set("date", 0).get("day");
    for (let i = 0; i <= 6; i++) {
      let data: DateInfo = {
        date: 404,
        month: currentMonth.get("month"),
        fulldate: currentMonth.format("YYYY-MM-DD"),
        descrition: "공란날짜임",
        todos: [],
      };
      dateArray.push(data);
      if (i === 6) {
        console.log("첫줄 캇!");
        dateArray = [];
      }
      if (i === prevLastDay) {
        break;
      }
    }
    // firtsRow();
    for (
      let i = 1;
      i <= dayjs(currentMonth).add(1, "month").set("date", 0).get("date");
      i++
    ) {
      let data: DateInfo = {
        date: i,
        month: currentMonth.get("month"),
        fulldate: currentMonth.set("date", i).format("YYYY-MM-DD"),
        descrition: "잘됨",
        todos: [],
      };
      todoDatas?.forEach((arrData: any) => {
        if (dayjs(new Date(arrData.createdAt.slice(0, 19))).get(`date`) === i) {
          data.todos?.push(arrData);
        }
      });
      dateArray.push(data);
    }
    const thisLastDay = dayjs(currentMonth)
      .add(1, "month")
      .set("date", 0)
      .get("day");
    for (let i = 0; i <= 6; i++) {
      if (thisLastDay < i) {
        let data: DateInfo = {
          date: 404,
          month: currentMonth.get("month"),
          fulldate: currentMonth.format("YYYY-MM-DD"),
          descrition: "공란날짜",
          todos: [],
        };
        dateArray.push(data);
      }
    }

    setDates(dateArray);
    completeHandle(true);
    setLoading(false);
  };

  const toggleClick = () => {
    setDateModalToggle(!dateModalToggle);
  };

  const dateClick = (e: any) => {
    const intVal = parseInt(e.currentTarget.dataset.value);
    setClickDate(intVal);
    setDateModalToggle(!dateModalToggle);
  };

  const getCurMonthData = async (userSliceReducer: any) => {
    const { user } = userSliceReducer;
    const data = {
      userId: user.userId,
      year: currentMonth.toDate().getFullYear(),
      month: currentMonth.toDate().getMonth() + 1,
      date: currentMonth.toDate().getDate(),
    };
    const todos = await axios.post(`${backPath}/todo/findcurrmonth`, data);
    if (todos.data.data.length === 0) {
      return;
    }

    return todos.data.data;
  };

  useEffect(() => {
    const { userSliceReducer, todosSliceReducer } = userSelector;
    if (complete === false && loading === false) {
      paintCalendar(userSliceReducer);
    }

    return () => {};
  }, [currentMonth, complete, loading]);
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
        {loading ? (
          <Loading />
        ) : (
          dates.map((i, index) => {
            if (i.date === 404) {
              return (
                <div className="date-box " key={index}>
                  <div className="date ">
                    <div className="date-box-non">{""}</div>
                  </div>
                </div>
              );
            }
            if (i.todos.length !== 0) {
              return (
                <div className="date-box" key={index}>
                  <div
                    className="date"
                    onClick={dateClick}
                    title={i.fulldate}
                    data-value={i.date}
                  >
                    <div className={`ddate red`}>
                      <div>{i.date}</div>
                      <div>
                        {dateModalToggle && clickDate === i.date ? (
                          <ModalPortal>
                            <Modal
                              toggleClick={toggleClick}
                              dateModalToggle={dateModalToggle}
                              DateInfo={i}
                              completeHandle={completeHandle}
                            />
                          </ModalPortal>
                        ) : (
                          <div style={{ color: "yellow", textAlign: "center" }}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className="scale1-4"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div className="date-box" key={index}>
                <div
                  className="date"
                  onClick={dateClick}
                  title={i.fulldate}
                  data-value={i.date}
                >
                  <div className={`ddate`}>
                    <div>{i.date}</div>
                    <div>
                      {dateModalToggle && clickDate === i.date ? (
                        <ModalPortal>
                          <Modal
                            toggleClick={toggleClick}
                            dateModalToggle={dateModalToggle}
                            DateInfo={i}
                            completeHandle={completeHandle}
                          />
                        </ModalPortal>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </CalendarDates>
    </CalendarBodyWrap>
  );
};
const CalendarBodyWrap = styled.div`
  padding: 1rem;
  /* background: rgb(168, 237, 234);
  background: linear-gradient(
    0deg,
    rgba(168, 237, 234, 1) 0%,
    rgba(254, 214, 227, 1) 100%
  ); */
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
    /* color: black; */
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
    background-color: #202020;
  }
  .scale1-4 {
    transform: scale(1.4);
  }
  ${media.medium} {
    .date-box {
      height: 4rem;
    }
    .date {
      padding: 0.03rem;
    }
  }
`;

// export default CalendarBody;
export default React.memo(CalendarBody);
