import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full mx-auto font-sans text-white md:px-10 max-w-[80%]"
      ref={containerRef}
    >
      <div className="px-4 mx-auto max-w-7xl md:px-8 lg:px-10">
        <h2 className="text-3xl font-semibold text-center md:text-5xl">
          Event Schedule at a Glance
        </h2>
        <p className="mt-4 text-base text-center text-gray-300 md:text-lg">
          Stay on track with key sessions and activities throughout the day.
        </p>
      </div>

      <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white/50 left-5 md:left-5 ">
                <div className="w-2 h-2 p-2 border rounded-full bg-white/50 border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden text-xl font-bold text-white/95 md:block md:pl-20 md:text-3xl ">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 text-lg md:pl-4 text-white/80">
              <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-white/95 ">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#FC6524] via-[#47EAA4] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
