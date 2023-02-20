import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const word = params.word;
  return { word };
};

const Result = () => {
  const { themeFont } = useContext(ThemeContext);
  const { word } = useLoaderData();
  console.log(word);
  return <div className={`font-${themeFont} capitalize`}>{word}</div>;
};

export default Result;
