import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeFont, setThemeFont] = useLocalStorage("theme-font", "sans");

  return (
    <ThemeContext.Provider value={{ themeFont, setThemeFont }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
