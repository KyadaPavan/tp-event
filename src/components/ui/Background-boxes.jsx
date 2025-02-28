import React from "react";
import { motion } from "framer-motion";
import { cn } from "../libs/utils";
import { ArrowRight } from "lucide-react";
export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(60).fill(1);
  const cols = new Array(15).fill(1);
  let colors = [
    "--purple-300",
    "--purple-500",
    "--violet-400",
    "--violet-600",
    "--fuchsia-300",
    "--fuchsia-500",
    "--indigo-400",
    "--indigo-600",
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
        "p-4 flex md:w-fit  md:h-fit w-[80] h-fit mx-auto ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative w-16 h-8 border-l border-slate-700"
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
              className="relative w-16 h-10 border-t border-r border-[#d99bff6b]"
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
    <section className="relative flex flex-col items-center justify-center ">
      <div className="max-w-3xl px-6 mx-auto mt-0 text-center text-white rounded-lg shadow-lg md:mt-10 ">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D99BFF]">
          Questions? We’ve Got You Covered!
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Not sure about something? Whether it’s tickets, speakers, or schedule,
          we’re just an email away!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <p className="text-lg font-medium">Send your Questions at</p>
          <a
            href="mailto:ftx@trustopay.com"
            className="text-[#D99BFF] text-xl font-medium hover:underline"
          >
            techx@trustopay.com
          </a>
        </div>

        <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD]  shadow-lg flex items-center gap-2 text-white transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#CA8FFD] hover:via-[#C358F4] hover:to-[#6423C4] hover:gap-3 mx-auto mt-6 ">
          Get Tickets
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
