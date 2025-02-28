import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const speakers = [
  {
    name: "Shashank Kumar",
    image: "/speaker-1.png",
    designation: "Co-Founder & MD",
    company: "Razorpay",
  },
  {
    name: "Anil Singh",
    image: "/speaker-2.png",
    designation: "Country Head Credit Cards",
    company: "YES Bank",
  },
  {
    name: "Anil Singh",
    image: "/speaker-2.png",
    designation: "Country Head Credit Cards",
    company: "YES Bank",
  },
  {
    name: "Anil Singh",
    image: "/speaker-2.png",
    designation: "Country Head Credit Cards",
    company: "YES Bank",
  },
];

export default function SpeakerCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid w-full grid-cols-1 py-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {speakers.map((speaker, idx) => (
        <div
          key={idx}
          className="relative flex justify-center block w-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Background Effect */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-white/20 backdrop-blur-lg rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Speaker Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center bg-white/10 backdrop-blur-lg  text-white rounded-2xl p-4 border border-transparent hover:border-gray-500 transition-all shadow-lg w-[320px] sm:w-[350px] lg:w-[400px] h-[350px]"
          >
            <h3 className="text-lg font-semibold">{speaker.name}</h3>
            <div className="w-full h-40 my-4 overflow-hidden rounded-md">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm">{speaker.designation}</p>
            <p className="font-semibold text-purple-400">{speaker.company}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
