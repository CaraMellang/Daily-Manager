import React, { useEffect, useState } from "react";
import useMobile from "../hooks/useMobile";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface HeaderBlockProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}
function HeaderBlock({ setIsSign }: HeaderBlockProps) {
  // const [activeMobile, setActiveMobile] = useState(false);
  const { activeMobile } = useMobile(false);
  // const loadHandle = () => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`); //vh100퍼 해결용
  //   if (window.innerWidth > 1024) {
  //     setActiveMobile(false);
  //     console.log("폴스");
  //   } else {
  //     console.log("트루");
  //     setActiveMobile(true);
  //   }
  // };
  // const resizeHandle = () => {
  //   console.log(`브라우저 사이즈${window.innerWidth} y:${window.innerHeight}`);
  //   console.log();
  //   loadHandle();
  // };
  useEffect(() => {
    console.log("useMobile 리렌더?", activeMobile);
    // loadHandle();
    // window.addEventListener("resize", resizeHandle);
    // return () => {
    //   window.removeEventListener("resize", () => {
    //     console.log(`증발함`);
    //   });
    //   window.removeEventListener("load", loadHandle);
    // };
  });
  return (
    <div>
      {activeMobile ? (
        <MobileHeader setIsSign={setIsSign} />
      ) : (
        <DesktopHeader setIsSign={setIsSign} />
      )}
    </div>
  );
}

export default HeaderBlock;
