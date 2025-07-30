"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h2 className="text-white text-center text-3xl font-bold p-7 font-[serif]">
        Discover our community:
      </h2>
      <InfiniteMovingCards direction="left" speed="fast" />
    </div>
  );
}

export default InfiniteMovingCardsDemo;
