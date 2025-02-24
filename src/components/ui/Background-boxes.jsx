import React from "react";
import { motion } from "framer-motion";
import { cn } from "../libs/utils";
import { ArrowRight } from "lucide-react";
export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(60).fill(1);
  const cols = new Array(15).fill(1);
  let colors = [
    "--teal-300",
    "--teal-500",
    "--orange-400",
    "--orange-600",
    "--green-300",
    "--green-500",
    "--emerald-400",
    "--cyan-400",
    "--lime-400",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-20%) skewX(-30deg) skewY(0deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "p-4 flex md:w-fit  md:h-fit w-[80] h-[50px] mx-auto ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-10 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

export default function FAQS() {
  return (
    <section className="relative flex flex-col items-center justify-center  ">
      <div className="text-center  px-6  text-white rounded-lg shadow-lg max-w-3xl     mt-0 md:mt-10 mx-auto ">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0cffb7]">
          Questions? We’ve Got You Covered!
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Not sure about something? Whether it’s tickets, speakers, or schedule,
          we’re just an email away!
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <p className="text-lg font-medium">Send your Questions at</p>
          <a
            href="mailto:ftx@trustopay.com"
            className="text-[#0cffb7] text-xl font-medium hover:underline"
          >
            ftx@trustopay.com
          </a>
        </div>

        <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:gap-3 mx-auto mt-6 ">
          Get Tickets
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
