import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
const tabs = [
  {
    id: 1,
    title: "Connect",
    description:
      "Networking is the best part of every conference, and Shift is no exception. We pride ourselves on creating a laid-back atmosphere where meeting new people comes naturally. Join us to connect with fellow tech enthusiasts and expand your network effortlessly.",
    image: "/tab-1.jpg",
  },
  {
    id: 2,
    title: "Learn",
    description:
      "Gain insights from top industry leaders and discover the latest trends in tech. Our sessions are designed to be informative, engaging, and packed with valuable takeaways.",
    image: "/tab-2.jpg",
  },
  {
    id: 3,
    title: "Innovate",
    description:
      "Get inspired by groundbreaking ideas and cutting-edge technology. Experience live demos, hands-on workshops, and explore the future of innovation.",
    image: "/tab-3.jpg",
  },
  {
    id: 4,
    title: "Engage",
    description:
      "Participate in interactive discussions, roundtables, and Q&A sessions with experts. This is your chance to get your questions answered and share your thoughts.",
    image: "/tab-4.jpg",
  },
];

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 3000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[60vh]  text-white flex flex-col items-center justify-center px-4 md:px-12">
      {/* Tabs */}
      <div className="flex flex-wrap mx-auto mb-16 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`md:px-16 px-7 py-3 rounded-lg transition-all font-semibold text-lg ${
              activeTab === tab.id
                ? "bg-[#0FFFB7] text-black"
                : "bg-gray-100/50 text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative flex items-center justify-between w-full md:max-w-[80%] space-x-8 overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-between w-full gap-10 md:gap-20 md:flex-row"
                >
                  {/* Image */}
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="object-cover w-full h-auto rounded-2xl md:w-1/2"
                  />

                  {/* Text Content */}
                  <div className="text-center md:w-1/2 md:text-left sapce-y-16">
                    <h2 className="mb-3 text-2xl font-semibold md:text-4xl">
                      {tab.title}
                    </h2>
                    <p className="mb-4 text-sm text-gray-300/80 md:text-lg">
                      {tab.description}
                    </p>

                    {/* <button className="relative flex items-center gap-4 text-base text-gray-200 transition group">
                      Watch video review
                      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-[#FC6524] to-[#47EAA4] group-hover:shadow-xl  group-hover:shadow-orange-500/50"></span>
                      <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-r from-[#FC6524] to-[#47EAA4] rounded-full transition group-hover:shadow-xl group-hover:shadow-orange-500/50 p-1">
                        <ArrowRight size={20} />
                      </span>
                    </button> */}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabbedSection;
