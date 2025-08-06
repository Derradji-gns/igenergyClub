"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "./lib/utils.jsx";
import TweetCard from "../tweet.jsx";
import me from "/public/graphics/me.jpg"
import sun from "/public/graphics/sun.jpg"
import walid from "/public/graphics/walid.jpg"
import meriem from "/public/graphics/meriem.jpg"
import anis from "/public/graphics/anis.jpg";




export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);


const tweets = [
  {
    name: "Derradji Amine",
    username: "amine_dev",
    content: "For me IGENERGY was a great opportunity to show my abilities and practise all what I learn before .",
    time: "10:05 AM · May 09, 2025",
    profileImg: me,
  },

    {
    name: "Hadjij Chourouk",
    username: "Hadjij_sun",
    content: "نحن دائما نسعى لتقديم أفضل ما نملك من أجل إحياء روح الفريق و المضي قُدمًا نحو فرص جديدة . هذه عائلتنا ❤️",
    time: "10:05 AM · Dec 19, 2024",
    profileImg: sun,
  },
  {
    name: "Benouali Omar Walid",
    username: "Walid_exP",
    content: "IGENERGY n'est pas seulement un club, c'est une famille où chacun trouve sa place et grandit ensemble ! ❤️🙂",
        time: "10:05 AM · Fev 24, 2022",
    profileImg: walid,
  },
  {
    name: "Bouarroudj Meriem",
    username: "meri_design",
    content: "At IGEnergy, success is built on unity and collaboration. Differences in opinions and perspectives are natural .",
    time: "10:05 AM · Dec 19, 2020",
    profileImg: meriem,
  },
  {
    name: "Bendriss Anis",
    username: "anis_president",
    content: "At IGEnergy, work is driven by passion, innovation, and collaboration. WE enjoy what we do together ✨️",
    time: "10:05 AM · Dec 19, 2020",
    profileImg:anis,
  },
];


  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
     <ul
  ref={scrollerRef}
  className={cn(
    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {tweets.map((tweet, idx) => (
    <li key={idx} className="w-110 md:w-[450px] shrink-0">
      <TweetCard {...tweet} />
    </li>
  ))}
</ul>
    </div>
  );
};


