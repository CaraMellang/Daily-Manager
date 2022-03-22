import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import SignForm from "./pages/SignForm";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Main />
    </BrowserRouter>
  );
};

const GlobalStyled = createGlobalStyle`
html , body , #root{
  background: rgb(241, 147, 147);
  background: linear-gradient(
    180deg,
    rgba(19, 68, 88, 1) 10%,
    rgba(182, 114, 114, 1) 100%
  );
  background-repeat:no-repeat;
  color:white;
  width:100%;
  height:100vh;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}
a, a:link, a:visited , a:hover , a:focus{
  text-decoration:none;
  color:unset
}
input:focus{
  outline:none;
}
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  body::-webkit-scrollbar-track {
    background-color: grey;
  }
`;

export default App;
