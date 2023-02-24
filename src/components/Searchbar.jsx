import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../store/context/ThemeCtx";
import { motion, AnimatePresence } from "framer-motion";

const Searchbar = () => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const { word, setWord } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    word && setIsValid(true);
  }, [word]);

  // TODO: Framer motion

  return (
    <form
      className={`relative flex h-12 items-center gap-5 rounded-2xl bg-secondary-200 px-6 outline outline-1 outline-transparent transition-all duration-300  md:h-16 ${
        isValid ? "focus-within:outline-accent" : "focus-within:outline-danger"
      } dark:bg-primary-500`}
      onSubmit={(e) => {
        e.preventDefault();
        if (!word) {
          setIsValid(false);
          return;
        } else {
          const param = word.toLowerCase();
          inputRef.current.blur();
          return navigate(`definition/${param}`);
        }
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for any word..."
        className="dark w-full grow bg-transparent font-bold caret-accent outline-none transition-colors duration-300 placeholder:text-primary-400 placeholder:text-opacity-25 placeholder:transition-colors placeholder:duration-300 dark:placeholder:text-white dark:placeholder:text-opacity-25 md:text-xl"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") inputRef.current.blur();
        }}
        onBlur={() => {
          setIsValid(true);
        }}
      />
      <button
        className="shrink-0"
        type="submit"
        aria-label="Search definitions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </button>
      <AnimatePresence>
        {!isValid && (
          <motion.p
            key={"warning"}
            className="absolute left-0 -bottom-8 text-danger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            Woops! can't be empty...
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

export default Searchbar;
