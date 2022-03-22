import React, { useEffect, useState } from "react";

function useMobile(initialState: boolean) {
  const [activeMobile, setActiveMobile] = useState(initialState);
  const [widths, setWidths] = useState(window.innerWidth);
  const loadHandle = () => {
    setWidths(window.innerWidth);
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
  return { activeMobile, innerWidth: widths };
}

export default useMobile;
