import React, { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeCtx";
import { motion } from "framer-motion";

const Homepage = () => {
  const { themeFont } = useContext(ThemeContext);
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
