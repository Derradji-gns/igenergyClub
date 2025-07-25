"use client";

import React from "react";
import { InfiniteMovingCards } from "../compenants/ui/infinite-moving-cards";

 function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "IGENERGY n'est pas seulement un club, c'est une famille où chacun trouve sa place et grandit ensemble ! ❤️🙂",
    name: "Benouali Omar Walid",
    title: "Ex president",
  },
  {
    quote:
      "At IGEnergy, work is driven by passion, innovation, and collaboration. Every effort contributes to a shared vision of excellence and progress. ✨️",
    name: "Bendriss Anis",
    title: "President",
  },
  {
    quote: "At IGEnergy, success is built on unity and collaboration. Differences in opinions and perspectives are natural, but progress comes when we set aside conflicts, work together with respect and determination.",
    name: "Bouarroudj Meriem",
    title: "Head of Design department",
  },
  {
    quote:
      "نحن دائما نسعى لتقديم أفضل ما نملك من أجل إحياء روح الفريق و المضي قُدمًا نحو فرص جديدة . هذه عائلتنا ❤️",


    name: "Hadjij Chourouk",
    title: "Vice president",
  },
  {
    quote:
      "For me IGENERGY was a great opportunity to show my abilities and practise all what I learn before .",
    name: "Derradji Amine Abdelbasset ⚜️",
    title: "Developer",
  },
];

export default InfiniteMovingCardsDemo;