import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatsSection from "./StatsSection"; // Import your StatsSection

gsap.registerPlugin(ScrollTrigger);

const TextZoomSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null); // Ref for the content (StatsSection)
  const maskRef = useRef(null); // Ref for the mask image

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });

        tl.to(maskRef.current, {
          // Scale the mask (and therefore the revealed content)
          scale: 10, // Adjust zoom level for desktop
          duration: 3,
          opacity: 0,
          ease: "power1.out",
        }).to(
          contentRef.current,
          {
            // Scale and position the content
            scale: 1,
            opacity: 1,
            duration: 3,
            ease: "power1.out",
          },
          0
        ); // Start at the same time as the mask animation
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });

        tl.to(maskRef.current, {
          // Scale the mask for mobile
          scale: 5, // Adjust zoom level for mobile
          duration: 2,
          opacity: 0,
          ease: "power1.out",
        }).to(
          contentRef.current,
          {
            // Scale and position the content
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power1.out",
          },
          0
        ); // Start at the same time as the mask animation
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Mask Image */}
      <div
        ref={maskRef}
        className="absolute top-0 left-0 w-full h-full origin-center bg-[#47EAA4]" // Initial mask
        style={{
          maskImage: "url('/FTX-Mask.png')", // Your mask image URL
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain", // Or "cover" depending on your needs
          willChange: "transform", // Optimize for transform changes
        }}
      />

      {/* Content Section (StatsSection) - initially scaled down and hidden */}
      <div
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-full origin-center transform opacity-0"
        style={{ willChange: "transform, opacity" }} // Optimize for scale and opacity
      >
        <StatsSection />
      </div>
    </section>
  );
};

export default TextZoomSection;
