import { cn } from "../libs/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

import { ArrowRight, Play } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  const items = [
    {
      id: "attend",
      title: "ATTEND",
      description:
        "Thousands of attendees will join us in Zadar. Learn why you should be among them.",
      link: "/attend",
    },
    {
      id: "sponsor",
      title: "SPONSOR",
      description:
        "A booth or your own branded afterparty? Let's explore how your company can benefit from Shift.",
      link: "/sponsor",
    },
    {
      id: "media",
      title: "MEDIA",
      description:
        "We can help you get the next big scoop. Find out what you get from covering Shift.",
      link: "/media",
    },
    {
      id: "volunteer",
      title: "VOLUNTEER",
      description:
        "Our volunteers help us make the event a success. Check out how to become a part of Shift.",
      link: "/volunteer",
    },
  ];
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative h-screen  flex items-center bg-[#002324] justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800" />
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 pointer-events-none bg-dot-thick-[#FC6524] group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>
        {children}
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
          <section className="relative flex flex-col items-center justify-between w-full min-h-screen gap-20 px-6 pt-10 text-white md:px-12">
            {/* Header Section */}
            <div className="relative z-10 max-w-3xl text-center">
              <div className="inline-block px-3 py-1.5 bg-gray-50/30 md:text-sm text-xs rounded-full font-medium shadow-2xl">
                GANDHINAGAR, GUJARAT, SEPTEMBER 14, 2025
              </div>

              <h1 className="my-10 text-5xl font-bold text-gray-100 md:text-6xl">
                <span className="text-stroke">FTX</span>{" "}
                <span className="text-[30px]">by</span> <br /> Trustopay
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300/90">
                Whether you're returning or joining us for the first time, Shift
                2025 will go beyond the code. It's about the energy, the people,
                and the connections that will shape the future of tech.
              </p>

              <p className="mt-6 text-lg font-semibold text-gray-300">
                FTX 2025: <span className="text-[#FC6524]">&gt;Code</span>. More
                than Code.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-center gap-8 mt-6 sm:flex-row">
                <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg shadow-[#FC652466] flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:shadow-lg hover:shadow-[#47EAA466] hover:gap-3">
                  Get Tickets
                  <ArrowRight size={20} />
                </button>

                <button className="relative flex items-center gap-2 text-base font-medium transition group">
                  Watch video review
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#FC6524] to-[#47EAA4]"></span>
                  <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-r from-[#FC6524] to-[#47EAA4] rounded-full transition group-hover:shadow-xl group-hover:shadow-orange-500/50">
                    <Play size={14} color="white" />
                  </span>
                </button>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 gap-8 px-6 text-white sm:grid-cols-2 lg:grid-cols-4 lg:px-20 max-w-[90%]">
              <AnimatePresence mode="wait">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3"
                  >
                    <a
                      href={item.link}
                      className="flex items-center gap-2 text-lg font-semibold transition-all duration-100 ease-in-out hover:text-orange-500 group hover:drop-shadow-md hover:drop-shadow-orange-500/50"
                    >
                      {item.title}
                      <ArrowRight
                        size={20}
                        className="transition-all duration-300 ease-in-out group-hover:-rotate-180"
                      />
                    </a>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4]  `,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
