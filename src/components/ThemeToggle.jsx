import React, { useContext, useEffect } from "react";
import useToggle from "../store/hooks/useToggle";
import { ThemeContext } from "../store/context/ThemeCtx";

const ThemeToggle = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  return (
    <button
      className="relative flex h-5 w-10 items-center rounded-xl bg-secondary-400"
      onClick={() => {
        if (themeColor === "dark") {
          setThemeColor("light");
        } else if (themeColor === "light") {
          setThemeColor("dark");
        }
      }}
    >
      <span
        className={`absolute h-3.5 w-3.5 ${
          themeColor === "dark" ? "right-[3px]" : "left-[3px]"
        } rounded-full bg-white`}
      ></span>
    </button>
  );
};

export default ThemeToggle;
