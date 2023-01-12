import React from "react";
import PopularCard from "./popularCard";
import { motion } from "framer-motion";

export default function PopularShowcase() {
  return (
    <motion.div
      initial={{ scale: 0.5, y: 30 }}
      animate={{ borderRadius: ["5%", "2%"], scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 justify-center m-4 h-[50vm] w-[70vm] shadow-2xl rounded-xl gap-8 mt-10 p-6 items-center"
    >
      <PopularCard
        title={"Title1"}
        url={"/"}
        image={"https://img.icons8.com/small/64/null/instagram-new.png"}
        type={"Web Dev"}
      />
      <PopularCard
        title={"freeCodeCamp"}
        url={"/"}
        image={"https://img.icons8.com/small/64/null/instagram-new.png"}
        type={"Web Dev"}
      />
      <PopularCard
        title={"Title1"}
        url={"/"}
        image={"https://img.icons8.com/small/64/null/instagram-new.png"}
        type={"Web Dev"}
      />
      <PopularCard
        title={"Title1"}
        url={"/"}
        image={"https://img.icons8.com/small/64/null/instagram-new.png"}
        type={"Web Dev"}
      />
    </motion.div>
  );
}
