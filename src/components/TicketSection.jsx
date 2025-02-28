import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
const TicketSection = () => {
  const plans = [
    {
      title: "Standard Pass",
      price: "₹2,000",
      color: "text-[#CA8FFD]",
      available: [
        "2-Day Conference Pass",
        "Access to Multiple Stages",
        "Access to Exhibition Area",
        "Lunch & Refreshments Included",
        "Access Evening Social Events",
      ],
      unavailable: [
        "2-Day Virtual Conference Pass",
        "Access to All Streaming Sessions",
        "Access to Virtual Networking",
        "Access to All Recorded Sessions",
      ],
    },
    {
      title: "All Access Pass",
      price: "₹3,000",
      color: "text-[#C358F4]",
      available: [
        "2-Day Conference Pass",
        "Access to Multiple Stages",
        "Access to Exhibition Area",
        "Lunch & Refreshments Included",
        "Access Evening Social Events",
        "2-Day Virtual Conference Pass",
        "Access to All Streaming Sessions",
        "Access to Virtual Networking",
        "Access to All Recorded Sessions",
      ],
      unavailable: [],
    },
    {
      title: "Virtual Pass",
      price: "Free",
      color: "text-gray-300",
      available: ["2-Day Virtual Conference Pass"],
      unavailable: [
        "2-Day Conference Pass",
        "Access to Multiple Stages",
        "Access to Exhibition Area",
        "Lunch & Refreshments Included",
        "Access Evening Social Events",
        "Access to All Streaming Sessions",
        "Access to Virtual Networking",
        "Access to All Recorded Sessions",
      ],
    },
  ];
  return (
    <section
      className="relative flex flex-col items-center justify-center   py-16 bg-white/10 backdrop-blur-md max-w-[90%] mx-auto rounded-3xl"
      id="pricing"
    >
      {/* Date & Title */}
      <div className="z-10 text-center">
        <span className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-white/30 backdrop-blur-md">
          15 MARCH 2025
        </span>
        <h2 className="mt-8 text-4xl font-semibold text-[#CA8FFD] md:text-5xl">
          Get Your Tickets for TechX 2025
        </h2>
        <p className="mt-4 text-base text-gray-300 md:text-lg">
          Dive into the world of IT and software development. Secure your ticket
          early for the best price.
        </p>
      </div>

      {/* Glassmorphic Card Container */}
      <div className="relative z-10 flex flex-wrap justify-center w-full gap-6 mt-10 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col w-[90%]  p-6 text-white bg-[#3C1F4C] rounded-2xl md:w-1/4"
          >
            <h3 className={`text-xl text-center font-semibold ${plan.color}`}>
              {plan.title}
            </h3>
            <p className="mt-2 text-3xl font-bold text-center">
              {plan.price} <span className="text-lg"></span>
            </p>
            <div className="my-4 border-b border-gray-600"></div>
            <ul className="space-y-3 text-sm">
              {plan.available.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
              {plan.unavailable.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 line-through opacity-80"
                >
                  <XCircle className="text-red-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-6 mt-6 py-3 text-base font-medium rounded-lg  shadow-md shadow-[#ca8ffdd5] flex items-center gap-2 text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD]   hover:bg-gradient-to-r hover:from-[#CA8FFD] hover:via-[#C358F4] hover:to-[#6423C4] hover:shadow-md hover:shadow-[#ca8ffda8] hover:gap-3 text-center mx-auto ">
              Get Tickets
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0  w-[70%] mx-auto h-[90%] bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD] opacity-50 blur-3xl my-auto rounded-full"></div>
    </section>
  );
};

export default TicketSection;
