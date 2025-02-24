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
      className="flex justify-center items-center min-h-screen bg-[#002324] p-0 md:pt-10 py-10 md:p-6 overflow-hidden"
      id="about"
    >
      <div className="w-full  md:max-w-[80%] p-6 md:p-8 text-center bg-gradient-to-r from-orange-500 to-green-400 rounded-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#002324] py-2">
          What is FTX
        </h2>
        <p className="py-4 mt-3 text-base text-gray-900 md:text-lg">
          <strong>Infobip FTX</strong> is a conference that gathers the global
          developer community, delivering interactive, engaging, and exciting
          content in a one-of-a-kind atmosphere. With a{" "}
          <strong className="font-bold">
            focus on a unique and enjoyable experience
          </strong>
          , FTX has become one of the biggest developer events in India.
        </p>

        {/* Video Thumbnail with Play Button */}
        <div className="relative mt-6">
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
              className="p-1 rounded-full md:p-4 bg-gradient-to-r from-orange-500 to-green-500"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.7)",
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
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#002324]">
          <div className="relative w-full max-w-6xl p-4 md:p-6">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.7)",
              }}
              className="absolute p-2 rounded-full right-6 md:-right-8 md:top-4 -top-8 bg-gradient-to-r from-orange-500 to-green-500 w-fit"
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
