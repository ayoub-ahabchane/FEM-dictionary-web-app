import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeFont, setThemeFont] = useLocalStorage("theme-font", "sans");
  const [themeColor, setThemeColor] = useLocalStorage("theme-color", "light");

  return (
    <ThemeContext.Provider
      value={{ themeFont, setThemeFont, themeColor, setThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
