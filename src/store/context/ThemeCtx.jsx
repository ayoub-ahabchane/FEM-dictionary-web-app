import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeFont, setThemeFont] = useLocalStorage("theme-font", "sans");
  const [themeColor, setThemeColor] = useLocalStorage("theme-color", "light");
  const [word, setWord] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        themeFont,
        setThemeFont,
        themeColor,
        setThemeColor,
        word,
        setWord,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
