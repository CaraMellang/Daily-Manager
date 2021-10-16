import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useState } from "react";
import styled from "styled-components";
import { toast, notice, check, Tooltip } from "react-interaction";
import Calendar from "../lib/Calendar/Calendar";

const Home = () => {
  const onClick = (e: any) => {
    notice("클릭!!").then(() => console.log("꺼짐"));
  };

  console.log(new Date().getDay());
  return (
    <HomeWrap>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1sadasd아이아이", date: "2021-10-01" },
          { title: "event 1", date: "2021-10-01" },
          { title: "event 1", date: "2021-10-01" },
          { title: "event 1", date: "2021-10-01" },
          { title: "event 1", date: "2021-10-01" },
          { title: "event 2", date: "2021-10-02" },
        ]}
        eventClick={onClick}
      />
      <button
        type="button"
        className="example-button"
        onClick={() =>
          notice("Congrats! Your upload successfully done").then(() =>
            console.log("closed")
          )
        }
      >
        notice
      </button>
      <Calendar></Calendar>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  background-color: white;
  padding-top: 10rem;
  padding-left: 20rem;
  padding-right: 20rem;
`;

export default Home;
