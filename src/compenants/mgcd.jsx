"use client";

import Carousel from "./ui/carousel";
import RC from '/public/graphics/car.jpg'
import SP from '/public/graphics/parking2.jpg'
import RDR from '/public/graphics/radar.jpg'
import INSC from '/public/graphics/inscr.jpg'
import academy from "/public/graphics/IG_academy.jpg"
 function CarouselDemo() {
  const slideData = [
    {
      title: "RC Car",
      
      src: RC,
    },
      {
      title: "IG Academy",
      
      src: academy,
    },
    {
      title: "Smart Park",
      
      src: SP,
    },
    {
      title: "Radar",
      
      src: RDR,
    },
    {
      title: "Inscription System",
      src: INSC,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
        <h1 className="text-3xl text-white text-center pt-10 font-bold font-[serif]">Projects Corner :</h1>
        <p className="text-white text-center p-10 font-[serif]">We Have Great Projects in electronics and Web </p>
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselDemo;