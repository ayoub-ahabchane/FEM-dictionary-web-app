import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

const Homepage = () => {
  const { themeFont } = useContext(ThemeContext);
  return <p className={`font-${themeFont}`}>Homepage</p>;
};

export default Homepage;
