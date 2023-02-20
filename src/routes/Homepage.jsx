import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

const Homepage = () => {
  const { themeFont } = useContext(ThemeContext);
  return <div className={`font-${themeFont}`}>Homepage</div>;
};

export default Homepage;
