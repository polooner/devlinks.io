import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

export default function contact() {
  return (
    <main className='text-center text-xl justify-center items-center h-screen bg-gradient-to-b from-white via-sky-300 to-white'>
      <Navbar />
      <div className='mt-10 h-fit w-fit md:mt-[10%] md:mx-72 rounded-xl bg-white shadow-2xl shadow-blue-400'>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='text-md md:text-xl text-center tracking-tight font-normal p-6'
        >
          This website serves as a source of all programming resources. The
          creators hope for it to serve the developer community, whether it's
          students, self-taught programmers, beginners, amateurs, experts,
          professionals or even people who do not develop. <br></br>
          <br></br>The idea for this website came around when I, Filip Wojda
          realized how hard it really was for me to find the resources that
          actually helped me. If you just search Google to find what you need,
          chances are you either find the result you were looking for or the
          most popular websites that don't really match your needs. <br></br>
          <br></br>This page is really just a Computer Science student's
          project. I am very proud and satisfied with how it came out and most
          importantly, that it serves a very important purpose.
        </motion.p>
      </div>
    </main>
  );
}
