import React, { useEffect, useState } from "react";
import useMobile from "../hooks/useMobile";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface HeaderBlockProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}
function HeaderBlock({ setIsSign }: HeaderBlockProps) {
  const { activeMobile } = useMobile(false);
  useEffect(() => {
  }, []);
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
