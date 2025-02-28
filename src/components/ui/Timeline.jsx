import { motion, useScroll, useTransform } from "framer-motion";
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
      ref={containerRef}
      className="mx-auto font-sans text-white md:px-10 md:max-w-[80%] w-[95%]"
    >
      <div className="px-4 mx-auto max-w-7xl md:px-8 lg:px-10">
        <h2 className="text-3xl font-semibold text-center md:text-5xl text-[#D99BFF]">
          Event Schedule at a Glance
        </h2>
        <p className="mt-4 text-base text-center text-gray-300 md:text-lg">
          Stay on track with key sessions and activities throughout the day.
        </p>
      </div>

      <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
        {data.map((event, index) => (
          <div
            key={index}
            className="flex flex-col justify-center pt-10 md:flex-row md:pt-40 md:gap-10"
          >
            {/* Time Section */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white/50 left-5 md:left-5 ">
                <div className="w-2 h-2 p-2 border rounded-full bg-white/50 border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden text-xl font-bold text-white/95 md:block md:pl-20 md:text-3xl">
                {event.title}
              </h3>
            </div>

            {/* Event Details */}
            <div className="relative w-full pl-20 pr-4 text-lg md:pl-4 text-white/80">
              <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-white/95">
                {event.title}
              </h3>
              <p>{event.content}</p>

              {/* Speaker Section */}
              <div className="grid grid-cols-1 gap-4 p-4 mt-6 rounded-lg md:grid-cols-2 lg:grid-cols-3">
                {event.speakers.map((speaker, i) => (
                  <motion.div
                    key={i}
                    className="p-4 text-center transition-all rounded-2xl bg-white/20 backdrop-blur-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Speaker Name */}
                    <h4 className="text-lg font-semibold text-gray-200">
                      {speaker.name}
                    </h4>

                    {/* Speaker Image */}
                    <div className="p-2 mt-2">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-auto rounded-md"
                      />
                    </div>

                    {/* Role & Company */}
                    <p className="mt-2 text-sm text-gray-300">{speaker.role}</p>
                    <p className="text-sm font-bold text-gray-100">
                      {speaker.company}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#6423C4] via-[#C358F4] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
