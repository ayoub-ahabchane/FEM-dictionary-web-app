import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

const ThemeToggle = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <button
        title={`Switch to ${themeColor === "dark" ? "light" : "dark"} mode`}
        className="relative flex h-5 w-10 items-center rounded-xl bg-secondary-400 transition-colors duration-300 dark:bg-accent"
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
      <svg
        className="stroke-secondary-400 transition-colors duration-300 dark:stroke-accent"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

export default ThemeToggle;
