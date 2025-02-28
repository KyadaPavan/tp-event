import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  "/logo-1.svg",
  "/logo-2.svg",
  "/logo-3.svg",
  "/logo-4.svg",
  "/logo-5.svg",
  "/logo-6.svg",
  "/logo-7.svg",
  "/logo-8.svg",
  "/logo-9.svg",
  "/logo-10.svg",
];

export default function SponsorSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const logosX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center h-[50vh] px-4 space-y-8 overflow-hidden md:space-y-16"
    >
      {/* Sponsor Text */}
      <motion.div
        style={{ x: textX }}
        className="text-[14vw] md:text-[8vw] font-bold text-[#CA8FFD] text-stroke-main uppercase whitespace-nowrap"
      >
        TechX Sponsors
      </motion.div>

      {/* Logos Container */}
      <motion.div style={{ x: logosX }} className="flex space-x-4 md:space-x-6">
        {sponsors.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-white shadow-md rounded-xl
                       shadow-[#ca8ffdc5] p-4 md:p-6 w-28 h-16 md:w-40 md:h-24"
          >
            <img
              src={src}
              alt="Sponsor"
              className="object-contain w-auto h-8 md:h-10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const sponsors = [
//   "/logo-1.svg",
//   "/logo-2.svg",
//   "/logo-3.svg",
//   "/logo-4.svg",
//   "/logo-5.svg",
//   "/logo-6.svg",
//   "/logo-7.svg",
//   "/logo-8.svg",
//   "/logo-9.svg",
//   "/logo-10.svg",
// ];

// export default function SponsorSection() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const textX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
//   const logosX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

//   return (
//     <section ref={sectionRef} className="relative h-[200vh] flex flex-col ">
//       {/* Scroll Container */}
//       <div className="sticky top-0 flex flex-col items-center justify-center h-screen space-y-8 md:space-y-16">
//         {/* Sponsor Text */}
//         <motion.div
//           style={{ x: textX }}
//           className="text-[10vw] md:text-[8vw] font-bold text-[#0cffb7] uppercase whitespace-nowrap text-stroke-main"
//         >
//           TechX Sponsors
//         </motion.div>

//         {/* Logos Container */}
//         <motion.div
//           style={{ x: logosX }}
//           className="flex space-x-4 md:space-x-6"
//         >
//           {sponsors.map((src, i) => (
//             <div
//               key={i}
//               className="flex items-center justify-center bg-white shadow-md rounded-xl
//                          shadow-[#0cffb7] p-4 md:p-6 w-28 h-16 md:w-40 md:h-24"
//             >
//               <img
//                 src={src}
//                 alt="Sponsor"
//                 className="object-contain w-auto h-8 md:h-10"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
