import React from "react";
import AnimatedTextWord from "../components/animatedWord";
import Navbar from "../components/navbar";

export default function contact() {
  return (
    <main className="text-center text-xl justify-center items-center h-screen bg-gradient-to-bl from-white to-slate-400">
      <Navbar />
      <div className="justify-center font-bold flex pt-[5%]">
        <AnimatedTextWord text="Contact the creator at:" />
      </div>
    </main>
  );
}
