import React from "react";
import { motion } from "framer-motion";

const NotFound = ({ result: { title, message, resolution } }) => {
  return (
    <motion.section
      key={"notfound"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="flex flex-col items-center pt-10 text-center"
    >
      <h1 className="order-2 mb-6 text-xl font-bold">{title}</h1>
      <p className="order-3 text-secondary-400 md:text-lg">
        {message} {resolution}
      </p>
      <img
        className="order-1 mb-11 block aspect-square w-16 bg-contain"
        src="../public/assets/emoji_confused_face.png"
      ></img>
    </motion.section>
  );
};

export default NotFound;
