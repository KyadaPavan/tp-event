import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Play } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const ZoomEffect = () => {
  const zoomOutRef = useRef(null);
  const zoomInRef = useRef(null);

  const items = [
    {
      title: "ATTEND",
      description:
        "Thousands of attendees will join us in Zadar. Learn why you should be among them.",
      link: "/attend",
    },
    {
      title: "SPONSOR",
      description:
        "A booth or your own branded afterparty? Let's explore how your company can benefit from Shift.",
      link: "/sponsor",
    },
    {
      title: "MEDIA",
      description:
        "We can help you get the next big scoop. Find out what you get from covering Shift.",
      link: "/media",
    },
    {
      title: "VOLUNTEER",
      description:
        "Our volunteers help us make the event a success. Check out how to become a part of Shift.",
      link: "/volunteer",
    },
  ];

  useEffect(() => {
    const { innerHeight } = window;

    const createScrollTrigger = (element, startScale, endScale) => {
      gsap.fromTo(
        element,
        { scale: startScale }, // Start smaller for zoom-in, start bigger for zoom-out
        {
          scale: endScale, // Scale to original size
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "center center", // Start animation when element reaches center
            pin: true,
            end: `+=${innerHeight * 1.2}`, // Less aggressive animation range
            scrub: 2, // Smooth scroll effect
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    createScrollTrigger(zoomOutRef.current, 5, 1); // Starts zoomed-in at 5x, shrinks to normal
    createScrollTrigger(zoomInRef.current, 1, 4); // Starts small at 0.2x, grows to normal

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <>
      <div className="h-full w-full bg-[#002324]  dark:bg-grid-white/[0.02] bg-grid-black/[0.05] relative flex items-center justify-center flex-col">
        <section className="relative flex flex-col items-center justify-between w-full min-h-screen px-6 pt-10 text-white md:px-12">
          <div className="relative z-10 max-w-3xl text-center">
            <div className="inline-block px-4 py-1.5 bg-gray-50/30 text-sm rounded-full font-medium shadow-2xl">
              GANDHINAGAR, GUJRAT, SEPTEMBER 14, 2025
            </div>

            <h1 className="my-10 text-5xl font-bold text-gray-100 md:text-6xl">
              <span className="text-stroke">FTX</span>{" "}
              <span className="text-[30px]">by</span> <br /> Trustopay
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300/90">
              Whether you're returning or joining us for the first time, Shift
              2025 will go beyond the code. It's about the energy, the people,
              and the connections that will shape the future of tech.
            </p>

            <p className="mt-6 text-lg font-semibold text-gray-300">
              FTX 2025: <span className="text-[#FC6524]">&gt;Code</span>. More
              than Code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
              <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg shadow-[#FC652466] flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:shadow-lg hover:shadow-[#47EAA466] hover:gap-3">
                Get Tickets
                <ArrowRight size={20} />
              </button>

              <button className="relative flex items-center gap-2 text-base font-medium transition group">
                Watch video review
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#FC6524] to-[#47EAA4]"></span>
                <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-r from-[#FC6524] to-[#47EAA4] rounded-full transition group-hover:shadow-xl group-hover:shadow-orange-500/50">
                  <Play size={14} color="white" />
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 px-6  text-white sm:grid-cols-2 lg:grid-cols-4 lg:px-20 max-w-[90%]">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <a
                  href={item.link}
                  className="flex items-center gap-2 text-lg font-semibold transition-all duration-100 ease-in-out hover:text-orange-500 group hover:drop-shadow-md hover:drop-shadow-orange-500/50 "
                >
                  {item.title}
                  <ArrowRight
                    size={20}
                    className="transition-all duration-300 ease-in-out group-hover:-rotate-180"
                  />
                </a>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ZoomEffect;
