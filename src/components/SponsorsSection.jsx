import React from "react";
import { ArrowRight } from "lucide-react";
const sponsors = [
  { name: "GitHub", logo: "/logo-1.svg" },
  { name: "AWS", logo: "/logo-2.svg" },
  { name: "Postman", logo: "/logo-3.svg" },
  { name: "Docker", logo: "/logo-4.svg" },
  { name: "GitLab", logo: "/logo-5.svg" },
  { name: "Mozilla", logo: "/logo-6.svg" },
  { name: "Shopify", logo: "/logo-7.svg" },
  { name: "Elastic", logo: "/logo-8.svg" },
  { name: "HashiCorp", logo: "/logo-9.svg" },
  { name: "Microsoft", logo: "/logo-10.svg" },
];

const SponsorsSection = () => {
  return (
    <section className=" text-white py-10 px-4 text-center">
      {/* Small Heading */}

      <span className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-white/30 backdrop-blur-md">
        OUR SUPPORTERS
      </span>

      {/* Main Heading */}

      <h2 className="mt-8 text-4xl font-semibold text-[#0cffb7] md:text-5xl">
        Some of our Sponsors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-16">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl flex justify-center items-center shadow-lg w-full h-28 
      transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#47EAA466]"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button className="px-6 mt-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg shadow-[#FC652466] flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:shadow-lg hover:shadow-[#47EAA466] hover:gap-3 text-center mx-auto ">
          Become a sponsor
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default SponsorsSection;
