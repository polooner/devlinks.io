import React from "react";
import ResultCard from "./resultCard";
import { motion } from "framer-motion";

export default function ResultScroll(props) {
  return (
    <div
      initial={{ y: 0 }}
      animate={{ y: -130 }}
      transition={{ ease: "easeOut" }}
      className="w-[52%] max-h-80 space-y-2 mt-4 overflow-y-auto overflow-x-hidden scrollbar-hide"
    >
      {props.dbresults.length !== 0 ? (
        props.dbresults.map((result) => {
          return (
            <ResultCard
              title={result.title}
              bio={result.bio}
              url={result.url}
              image={result.image}
              type={result.type}
              id={result._id}
            />
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
