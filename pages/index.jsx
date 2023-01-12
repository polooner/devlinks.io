import React, { useState } from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import ResultScroll from "../components/resultScroll";
import PopularShowcase from "../components/popularShowcase";
import axios from "axios";
import { TextField, Autocomplete } from "@mui/material";

export default function index(props) {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const getTitles = async (str) => {
    try {
      let searchableString = str.trim().replace(/,/g, "");
      let url =
        "http://localhost:3000/api/searchtitle?title=" + searchableString;

      let { data } = await axios.get(url);
      return data;
      console.log(url);
    } catch (err) {
      console.error(err);
    }
  };

  const typeHandler = async (e) => {
    console.log(e.target.value);

    if (e.target.value) {
      let data = await getTitles(e.target.value);
      setResults(data);
    }
    console.log(results);
  };

  console.log(value);
  return (
    <main className="text-center text-xl justify-center items-center h-screen bg-gradient-to-br overflow-hidden from-white via-sky-300 to-slate-100">
      <Navbar />
      <section id="search-section">
        <div className="text-center justify-center flex flex-col items-center pt-[20%] md:pt-[10%]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.4, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{}}
            className="text-4xl md:text-6xl bg-gradient-to-r from-slate-600 to-blue-400 pb-6 text-transparent bg-clip-text tracking-tight font-extrabold"
          >
            Search for learn to code websites:
          </motion.h1>
          <div className="w-[100%] mt-1 h-full flex flex-col justify-center items-center">
            <div className="w-[90%] md:w-[50%]">
              <Autocomplete
                freeSolo
                value={value}
                filterOptions={(x) => x}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                options={results ? results : []}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search"
                    onChange={(e) => typeHandler(e)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
