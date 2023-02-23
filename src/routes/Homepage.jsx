import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";
import { motion } from "framer-motion";

const Homepage = () => {
  const { themeFont, setWord } = useContext(ThemeContext);
  useEffect(() => {
    document.title = "Frontend Mentor Dictionary";
    setWord("");
  }, []);
  return (
    <motion.p
      key={"homepage"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`font-${themeFont}`}
    >
      Homepage
    </motion.p>
  );
};

export default Homepage;
