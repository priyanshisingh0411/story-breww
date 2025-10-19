import React from "react";
import { FocusCards } from "./ui/FocusCards";
import { cards } from "@/data";
import { LayoutTextFlip } from "./ui/LayoutTextFlip";
// import { motion } from "motion/react";

function AboutBusiness() {
  return (
    <div className="flex flex-col items-center space-y-15">
      <div>
        <h2 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-auto">
          Trusted by market leaders and startups
        </h2>
      </div>
      <div className="w-full">
        <FocusCards cards={cards} />
      </div>
      <div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="We work with"
          words={["Businesses", "Buyers", "Investors Ready to Act"]}
        />
      </div>
    </div>
  );
}

export default AboutBusiness;
