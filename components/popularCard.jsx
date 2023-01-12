import React from "react";
import { motion } from "framer-motion";

export default function PopularCard(props) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -10 }}
      transition={{ duration: 0.5 }}
      target="_blank"
      href={props.url}
      className="bg-white flex md:flex-row flex-col p-6 md:gap-10 gap-4 text-center items-center justify-between rounded-xl h-fit"
    >
      <img
        src={
          props.image
            ? props.image
            : "https://img.icons8.com/ios-filled/50/null/not-applicable.png"
        }
        height={40}
        width={40}
      ></img>
      <h1 className="md:text-md text-base font-bold">{props.title}</h1>
      <p className="md:text-sm text-sm">{props.type}</p>
    </motion.a>
  );
}
