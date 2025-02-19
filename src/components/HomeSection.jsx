import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className=" bg-[#002324] text-white px-6 md:px-12 pt-10">
        <div className="w-screen h-screen text-center">
          <div className="inline-block px-4 py-1.5 bg-gray-50/30 text-sm rounded-full font-medium shadow-2xl">
            GANDHINAGAR, GUJRAT, SEPTEMBER 14, 2025
          </div>
          <h1 className="my-10 text-5xl font-bold text-gray-100 md:text-6xl">
            <span className="text-white text-stroke">Trustopay </span>FTX
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300/90">
            Whether you're returning or joining us for the first time, Shift
            2025 will go beyond the code. It's about the energy, the people, and
            the connections that will shape the future of tech.
          </p>

          <p className="mt-6 text-lg font-semibold text-gray-300">
            Shift 2025: <span className="text-[#FC6524]">&gt;Code</span>. More
            than Code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
            <button className="px-6 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg hover:opacity-90 transition">
              Get Tickets
            </button>
            <button className="flex items-center gap-2 px-6 py-3 text-lg font-medium transition border border-gray-500 rounded-lg hover:bg-gray-800">
              Watch video review
              <span className="w-4 h-4 bg-gradient-to-r from-[#FC6524] to-[#47EAA4] rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
