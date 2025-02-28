import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [isOpen]);

  return (
    <div
      className="flex items-center justify-center min-h-screen p-0 py-10 overflow-hidden md:pt-10 md:p-6"
      id="about"
    >
      <div className="w-full  md:max-w-[80%] p-6 md:p-8 text-center bg-gradient-to-r from-[#6423C4] via-[#CA8FFD] to-[#C358F4] rounded-2xl">
        <h2 className="py-2 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          What is TechX?
        </h2>
        <p className="py-4 mt-3 text-base text-white/80 md:text-lg">
          <strong>Trustopay TechX</strong> is a conference that gathers the
          global developer community, delivering interactive, engaging, and
          exciting content in a one-of-a-kind atmosphere. With a{" "}
          <strong className="font-bold">
            focus on a unique and enjoyable experience
          </strong>
          , TechX has become one of the biggest developer events in India.
        </p>

        {/* Video Thumbnail with Play Button */}
        <div className="relative py-2 mt-6">
          <img
            src="/video-img.jpg"
            alt="Conference"
            className="w-full md:max-w-[80%] mx-auto shadow-lg rounded-xl"
          />
          <motion.button
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              className="p-1 rounded-full md:p-4 bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD]"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(202, 143, 253, 0.77)",
              }}
            >
              <svg
                className="w-8 h-8 text-white md:w-12 md:h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex  items-center justify-center bg-[#3C1F4C]">
          <div className="relative w-full max-w-6xl p-4 md:p-6">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(202, 143, 253, 0.77)",
              }}
              className="absolute p-2 rounded-full right-6 md:-right-8 md:top-4 -top-8  bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD] w-fit"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5 text-white md:w-6 md:h-6" />
            </motion.button>

            <iframe
              className="w-full rounded-lg shadow-lg aspect-video"
              src="https://www.youtube.com/embed/7BmxRYAjAnU?si=OunjWt6OSN3owbT9"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
