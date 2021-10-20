import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { toast, notice, check, Tooltip } from "react-interaction";
import Calendar from "../components/Calendar/Calendar";
import ModalPortal from "../components/Modal/ModalPortal";
import MyModal from "../components/Modal/MyModal";

const Home = () => {
  const onClick = (e: any) => {
    notice("클릭!!").then(() => console.log("꺼짐"));
  };

  console.log(new Date().getDay());
  return (
    <HomeWrap>
      <ModalPortal>
        <MyModal />
      </ModalPortal>
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
        onClick={() => notice("나가")}
      >
        <div>notice</div>
      </button>
      <Calendar></Calendar>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  /* background-color: white; */
  padding-top: 10rem;
  padding-left: 20rem;
  padding-right: 20rem;
`;
const keke = keyframes`
0%{
  opacity:0
}
100%{
  opacity:1
}`;

export default Home;
