import React from "react";
import { FlipWords } from "../compenants/ui/container-text-flip";

export function FlipWordsDemo() {
  const words = ["innovate", "inspire", "create", "code"];

  return (
    <div className="h-[30rem] flex overflow-hidden  justify-center items-center px-4">
      <div
        className="text-5xl font-normal overflow-hidden text-white ">
        <h2 className="block ">Are you ready to  </h2>
        <FlipWords words={words} />
         <h2  >with IGENERGY Student's Club</h2>
      </div>
    </div>
  );
}

