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
    <motion.section
      key={"homepage"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="flex flex-col items-center pt-10 text-center"
    >
      <h1 className="order-2 mb-6 text-xl font-bold">
        Frontend Mentor Dictionary
      </h1>
      <q className="order-3 mb-2 text-secondary-400 md:text-lg">
        The limits of my language mean the limits of my world.
      </q>
      <a
        href="https://en.wikipedia.org/wiki/Ludwig_Wittgenstein"
        target="_blank"
        className="order-4 font-bold text-secondary-400 transition-colors duration-300 focus-within:text-accent hover:text-accent md:text-lg"
      >
        Ludwig Wittgenstein
      </a>
      <img
        className="order-1 mb-11 block aspect-square w-16 bg-contain"
        src="../src/assets/emoji_open_book.png"
      ></img>
    </motion.section>
  );
};

export default Homepage;
