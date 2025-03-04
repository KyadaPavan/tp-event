import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const StickyScroll = ({ content = [] }) => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [titleSticky, setTitleSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let index = 0;

      sectionRefs.current.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          index = i;
        }
      });

      setActiveCard(index);

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const lastSectionRect =
          sectionRefs.current[
            sectionRefs.current.length - 1
          ]?.getBoundingClientRect();

        if (lastSectionRect) {
          if (lastSectionRect.top <= 0) {
            setTitleSticky(false);
          } else {
            setTitleSticky(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto" ref={containerRef}>
      {/* Title */}
      <div
        ref={titleRef}
        className={`z-10 ${titleSticky ? "sticky top-16" : "relative"}`}
      >
        <p className="mx-auto md:text-5xl text-3xl font-semibold text-center text-[#CA8FFD] bg-white/20 md:backdrop-blur-md backdrop-blur-lg md:w-fit w-[90%] md:px-4 px-0 py-4 rounded-md">
          Why This Event Matters for You
        </p>
      </div>

      {/* Scroll Sections */}
      <motion.div className="flex flex-col lg:flex-row md:h-[200vh] h-[170vh]">
        {/* Left Side - Scrolling Text Content */}
        <div className="relative flex flex-col justify-center space-y-24 lg:w-1/2">
          {content.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="px-6 text-section"
            >
              <motion.h2
                className="text-3xl font-bold text-[#CA8FFD]"
                animate={{ opacity: activeCard === index ? 1 : 0 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="mt-4 text-lg text-gray-300"
                animate={{ opacity: activeCard === index ? 1 : 0 }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Right Side - Sticky Image Container */}
        <div className="sticky top-0 items-center justify-center hidden h-screen md:flex -z-[4]">
          <motion.img
            key={content[activeCard]?.id}
            src={content[activeCard]?.image}
            alt={content[activeCard]?.title}
            className="object-cover w-full max-w-md rounded-lg shadow-lg h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default StickyScroll;
