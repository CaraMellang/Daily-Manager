import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { toast, notice, check, Tooltip } from "react-interaction";
import Calendar from "../components/Calendar/Calendar";
import ModalPortal from "../components/Modal/ModalPortal";
import MyModal from "../components/Modal/MyModal";
import axios from "axios";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const toggleOn = () => {
    setToggle((prev) => !prev);
  };

  console.log(new Date().getDay());

  

  return (
    <HomeWrap>
      {toggle && (
        <ModalPortal>
          <MyModal toggleOn={toggleOn} toggle={toggle} />
        </ModalPortal>
      )}

      <button
        type="button"
        className="example-button"
        onClick={() => notice("나가")}
      >
        <div>notice</div>
      </button>
      <button onClick={toggleOn}>보여주기</button>
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
