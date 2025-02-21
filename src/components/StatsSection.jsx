import { motion } from "framer-motion";

const stats = [
  { value: "4000+", label: "In-Person Attendees" },
  { value: "600+", label: "Companies Present" },
  { value: "30+", label: "Speakers" },
  { value: "30+", label: "Sessions" },
  { value: "1", label: "Day" },
  { value: "1", label: "Unique Experience" },
];

const StatsSection = () => {
  return (
    <section className="relative w-full px-4 py-16 text-center text-white md:px-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 w-[70%] mx-auto h-[90%] bg-gradient-to-r from-[#FC6524] to-[#47EAA4] opacity-50 blur-3xl my-auto rounded-full"></div>

      {/* Subheading */}
      <div className="relative z-10 mb-12">
        <p className="inline-block px-2 py-2 text-xs font-medium tracking-widest uppercase rounded-full cursor-pointer md:px-4 md:text-sm text-[#0cffb7] bg-white/30 backdrop-blur-md ">
          Bringing the Brightest Minds Together
        </p>
      </div>

      {/* Main Heading */}
      <h2 className="relative z-10 !mb-20 text-4xl font-semibold md:text-5xl text-[#0cffb7]">
        FTX in Numbers
      </h2>

      {/* Floating VR Headset */}
      <img
        src="/icon-1.png"
        alt="VR Headset"
        className="absolute right-0 z-20 w-40 top-60 md:right-1/2 md:w-48 animate-float"
      />

      {/* Stats Grid */}
      <div className="relative z-10 grid max-w-5xl gap-6 mx-auto">
        {/* First row (two stats) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stats.slice(0, 2).map((stat, index) => (
            <motion.div
              key={index}
              className="p-12 border shadow-lg cursor-pointer rounded-xl bg-white/15 backdrop-blur-xl border-white/10"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.30)",
              }}
            >
              <h3 className="text-5xl font-bold">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row (four stats) */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.slice(2).map((stat, index) => (
            <motion.div
              key={index}
              className="p-10 border shadow-lg cursor-pointer rounded-xl bg-white/15 backdrop-blur-xl border-white/10"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.30)",
              }}
            >
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Rubber Duck */}
      <img
        src="/icon-2.png"
        alt="Rubber Duck"
        className="absolute bottom-0 z-20 w-20 right-1/4 md:w-20 animate-bounce"
      />
    </section>
  );
};

export default StatsSection;
