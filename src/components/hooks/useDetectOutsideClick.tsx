import { useEffect, useState } from "react";

export const useDetectOutsideClick = (
  el: React.MutableRefObject<null>,
  initialState: boolean
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e: any) => {
      if (el.current !== null && isActive === true) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive] as const;
};
