import React from "react";

const CallDareSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col w-full h-full md:flex-row">
        <div
          className="w-full bg-center bg-cover md:w-1/2 md:h-auto"
          style={{ backgroundImage: "url('/dare.png')" }}
        >
          <div className="relative flex items-center h-full px-10 md:px-20">
            <h1 className="py-6 text-3xl font-semibold leading-tight text-white md:py-0 lg:text-6xl">
              Calling the ones <br /> who dare to do
            </h1>
          </div>
        </div>

        <div className="flex items-center w-full px-6 py-10 shadow-xl bg-white/30 backdrop-blur-md md:w-1/2 md:px-16">
          <div className="w-full space-y-6">
            {[
              {
                title: "Startup Owners",
                desc: "Insightful lessons from trailblazers on navigating the startup ecosystem.",
              },
              {
                title: "Fintech Enthusiasts",
                desc: "Stay updated with the latest and best in Fintech, straight from the experts.",
              },
              {
                title: "Business Leaders",
                desc: "Network with the best in the industry, all under one roof.",
              },
              {
                title: "SME Business Owners",
                desc: "Small, medium or large, find the right sessions for you!",
              },
              {
                title: "Product & Tech Leaders",
                desc: "Start your business with profound sessions.",
              },
              {
                title: "Government Dignitaries",
                desc: "Learn how to build robust public digital platforms.",
              },
              {
                title: "New-Age Bankers",
                desc: "Explore the latest in neo-banking and customer experience.",
              },
            ].map((item, index) => (
              <div key={index} className="pb-4 border-b border-[#47EAA4]">
                <h2 className="text-lg font-medium text-white md:text-xl">
                  {item.title}
                </h2>
                <p className="text-sm text-white/80 md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute -top-40  -right-10 w-[60%] mx-auto h-[70%] bg-gradient-to-r from-[#FC6524] to-[#47EAA4] opacity-50 blur-3xl my-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CallDareSection;
