import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
const TicketSection = () => {
  const plans = [
    {
      title: "Standard Pass",
      price: "₹2,000",
      color: "text-green-400",
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
      color: "text-orange-400",
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
    <section className="relative flex flex-col items-center justify-center   py-16 bg-white/10 backdrop-blur-md max-w-[90%] mx-auto rounded-3xl">
      {/* Date & Title */}
      <div className="z-10 text-center">
        <span className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-white/30 backdrop-blur-md">
          14 - 16 SEPTEMBER 2025
        </span>
        <h2 className="mt-8 text-4xl font-semibold text-white md:text-5xl">
          Get Your Tickets for FTX 2025
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
            className="flex flex-col w-full max-w-sm p-6 text-white bg-[#002324] rounded-2xl md:w-1/4"
          >
            <h3 className={`text-xl font-semibold ${plan.color}`}>
              {plan.title}
            </h3>
            <p className="mt-2 text-3xl font-bold">
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

            <button className="px-6 mt-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg shadow-[#FC652466] flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:shadow-lg hover:shadow-[#47EAA466] hover:gap-3 text-center mx-auto ">
              Get Tickets
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0  w-[70%] mx-auto h-[90%] bg-gradient-to-r from-[#FC6524] to-[#47EAA4] opacity-50 blur-3xl my-auto rounded-full"></div>
    </section>
  );
};

export default TicketSection;

// import React from "react";
// import { CheckCircle, XCircle } from "lucide-react";

// const plans = [
//   {
//     title: "Early Bird Standard Pass",
//     price: "199€",
//     color: "text-green-400",
//     available: [
//       "2-Day Conference Pass",
//       "Access to Multiple Stages",
//       "Access to Exhibition Area",
//       "Lunch & Refreshments Included",
//       "Access Evening Social Events",
//     ],
//     unavailable: [
//       "Access to Educational Masterclasses (Workshops)",
//       "2-Day Virtual Conference Pass",
//       "Access to All Streaming Sessions",
//       "Access to Virtual Networking",
//       "On-Demand Access to All Recorded Sessions",
//     ],
//   },
//   {
//     title: "Early Bird All Access Pass",
//     price: "329€",
//     color: "text-orange-400",
//     available: [
//       "2-Day Conference Pass",
//       "Access to Multiple Stages",
//       "Access to Exhibition Area",
//       "Lunch & Refreshments Included",
//       "Access Evening Social Events",
//       "Access to Educational Masterclasses (Workshops)",
//       "2-Day Virtual Conference Pass",
//       "Access to All Streaming Sessions",
//       "Access to Virtual Networking",
//       "On-Demand Access to All Recorded Sessions",
//     ],
//     unavailable: [],
//   },
//   {
//     title: "Virtual Pass",
//     price: "Free",
//     color: "text-gray-300",
//     available: ["2-Day Virtual Conference Pass"],
//     unavailable: [
//       "2-Day Conference Pass",
//       "Access to Multiple Stages",
//       "Access to Exhibition Area",
//       "Lunch & Refreshments Included",
//       "Access Evening Social Events",
//       "Access to Educational Masterclasses (Workshops)",
//       "Access to All Streaming Sessions",
//       "Access to Virtual Networking",
//       "On-Demand Access to All Recorded Sessions",
//     ],
//   },
// ];

// const PricingPlans = () => {
//   return (
//     <section className="flex flex-col items-center w-full px-4 py-16 ">
//       <div className="flex flex-wrap justify-center w-full max-w-6xl gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className="flex flex-col w-full max-w-sm p-6 text-white bg-[#002324] rounded-2xl md:w-1/3"
//           >
//             <h3 className={`text-xl font-semibold ${plan.color}`}>
//               {plan.title}
//             </h3>
//             <p className="mt-2 text-3xl font-bold">
//               {plan.price} <span className="text-lg">+ VAT</span>
//             </p>
//             <div className="my-4 border-b border-gray-600"></div>
//             <ul className="space-y-3 text-sm">
//               {plan.available.map((item, i) => (
//                 <li key={i} className="flex items-center space-x-2">
//                   <CheckCircle className="text-green-400" size={18} />
//                   <span>{item}</span>
//                 </li>
//               ))}
//               {plan.unavailable.map((item, i) => (
//                 <li
//                   key={i}
//                   className="flex items-center space-x-2 line-through opacity-50"
//                 >
//                   <XCircle className="text-red-400" size={18} />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-6 w-full px-4 py-2 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] hover:opacity-90">
//               Get Ticket
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;
