import React, { useEffect, useState } from "react";

function useMobile(initialState:boolean) {
  const [activeMobile, setActiveMobile] = useState(initialState);
  const loadHandle = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //vh100퍼 해결용
    if (window.innerWidth > 1024) {
      setActiveMobile(false);
      console.log("폴스");
    } else {
      console.log("트루");
      setActiveMobile(true);
    }
  };
  const resizeHandle = () => {
    console.log(`브라우저 사이즈${window.innerWidth} y:${window.innerHeight}`);
    loadHandle();
  };

  useEffect(() => {
    loadHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", () => {
        console.log(`증발함`);
      });
      window.removeEventListener("load", loadHandle);
    };
  }, []);
  return {activeMobile} ;
}

export default useMobile;
