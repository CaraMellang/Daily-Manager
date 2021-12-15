import React, { useEffect, useState } from "react";

function useMobile(initialState: boolean) {
  const [activeMobile, setActiveMobile] = useState(initialState);
  const loadHandle = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //vh100퍼 해결용
    if (window.innerWidth > 1024) {
      setActiveMobile(false);
    } else {
      setActiveMobile(true);
    }
  };
  const resizeHandle = () => {
    loadHandle();
  };

  useEffect(() => {
    loadHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("load", loadHandle);
    };
  }, []);
  return { activeMobile };
}

export default useMobile;
