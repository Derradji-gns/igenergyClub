"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../compenants/ui/tst";

function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="  bg-white py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl">
        IGENERGY<br /> Student's Club
     
      </motion.h1>
      <h3 className="text-white text-xl text-center ">Your chance to innovate</h3>
      <div className="flex justify-evenly  w-full h-10 mt-7">
        <button className="w-30 h-10 bg-blue-500 rounded-xl text-white">Sign in</button>
        <button className="w-30 h-10 bg-blue-500 rounded-xl text-white"> Register</button>
      </div>
    </LampContainer>
  );
}

export default LampDemo;


