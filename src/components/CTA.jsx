import React from "react";
import FAQS, { Boxes, BoxesCore } from "./ui/Background-boxes";

const CTA = () => {
  return (
    <>
      <div className="md:max-w-[90%] w-full mx-auto ">
        <div className="hidden md:block">
          <Boxes />
          <FAQS />
        </div>

        <div className="md:w-fit md:h-fit w-[80] h-[80] overflow-x-hidden md:hidden block">
          <Boxes />
          <FAQS />
        </div>
      </div>
    </>
  );
};

export default CTA;
