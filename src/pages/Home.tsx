import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
// import "react-calendar/dist/Calendar.css";

const Home = () => {
  const [value, onChange] = useState(new Date());
  return (
    <HomeWrap>
      <Calendar onChange={onChange} value={value} />
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  padding-top: 10rem;
  padding-left: 20rem;
  padding-right: 20rem;
`;

export default Home;
