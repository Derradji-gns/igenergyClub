"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../compenants/ui/use-outside-click";
import tech from "../assets/tech-pic.jpg";
import IT from '/public/graphics/model2.jpg'
import SP from '/public/graphics/space.jpg'
import TCH from '/public/graphics/teach.png'
import HRC from '../assets/hour-logo.jpg'

function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-white sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-black font-[serif] dark:text-black text-base"
                  >
                    {active.description}
                  </motion.p>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <h2 className="text-center text-white p-10 text-2xl font-bold font-[serif] ">Overview About our events :</h2>

      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full ">
              <motion.div>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  className="h-60 w-full rounded-xl object-cover  object-top shadow-xl/20"
                />
              </motion.div>
              <div className="flex justify-center items-center  flex-col">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white  dark:text-white font-bold font-[serif] text-2xl text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black font-[serif]"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Tech Hub",
    src: tech,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        An annual Competition made for programmers challenges and IT students with real-world
problem-solving tasks, fostering innovation, collaboration, and technical expertise .
      </p>
    ),
  },
  {
    description: "IT Day",
    src: IT,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur, dolor porro, ipsam, quas provident quidem iste quod adipisci perferendis saepe eaque aliquid exercitationem eveniet voluptates repellendus reiciendis quae? Suscipit, architecto? Itaque accusamus saepe ullam porro, similique velit laudantium dicta sequi fugit iure distinctio iste reiciendis quaerat unde suscipit ad maxime tempora? Sint ducimus iure maiores cumque. Adipisci eum, iusto doloremque aperiam modi praesentium similique, sapiente tenetur, quam eligendi expedita!
      </p>
    ),
  },
  {
    description: "Energy Space",
    src: SP,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
       A space for communication and sharing elecrtonic projects between members
      </p>
    ),
  },
  {
    description: "Teach Me How ?",
    src: TCH,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Workshops and an opportunity to develop club members and acquire new skills
      </p>
    ),
  },
  {
    description: "Hour Of Code",
    src: HRC,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Teaching members programming languages and problem solving 
      </p>
    ),
  },
];

export default ExpandableCardDemo;
