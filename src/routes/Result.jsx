import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";

const Result = () => {
  const { themeFont } = useContext(ThemeContext);
  return <div className={`font-${themeFont}`}>Result</div>;
};

export default Result;
