import { ThemeContext } from "../store/context/ThemeCtx";
import useToggle from "../store/hooks/useToggle";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FontPicker = () => {
  const { themeFont, setThemeFont } = useContext(ThemeContext);
  const [isRevealed, toggle] = useToggle(false);
  const optionsRef = useRef();
  const toggleRef = useRef();

  const fontName =
    themeFont === "sans"
      ? "Sans serif"
      : themeFont === "serif"
      ? "Serif"
      : "Mono";

  function handleClickOutside(event) {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target) &&
      !toggleRef.current.contains(event.target)
    ) {
      toggle();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="relative text-sm font-bold md:text-lg">
      <button
        ref={toggleRef}
        title="Change the display font"
        onKeyDown={(e) => {
          if (e.key === "Escape" && isRevealed) {
            toggle();
          }
        }}
        className="flex items-center gap-4"
        onClick={toggle}
      >
        <span className={`font-${themeFont}`}>{fontName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            ref={optionsRef}
            onKeyDown={(e) => {
              if (e.key === "Escape" && isRevealed) {
                toggle();
              }
            }}
            className="absolute -bottom-[150px] right-0 z-10 flex w-44 flex-col gap-4 rounded-2xl border bg-white p-6 shadow-lg dark:border-primary-400 dark:bg-primary-600 dark:text-white dark:shadow-[0_10px_15px_-3px_rgba(164,69,237,0.5),0_4px_6px_-4px_rgba(164,69,237,0.5)] md:-bottom-44"
          >
            <button
              onClick={() => {
                setThemeFont("sans");
                toggle();
              }}
              className="text-left font-sans  transition-colors duration-300 focus-within:text-accent hover:text-accent"
            >
              Sans serif
            </button>
            <button
              onClick={() => {
                setThemeFont("serif");
                toggle();
              }}
              className="text-left font-serif transition-colors duration-300 focus-within:text-accent hover:text-accent"
            >
              Serif
            </button>
            <button
              onClick={() => {
                setThemeFont("mono");
                toggle();
              }}
              className="text-left font-mono transition-colors duration-300 focus-within:text-accent hover:text-accent"
            >
              Mono
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FontPicker;
