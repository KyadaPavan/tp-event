// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import StatsSection from "./StatsSection";

// gsap.registerPlugin(ScrollTrigger);

// const TextZoomVideo = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     let mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       // Desktop and larger
//       gsap.context(() => {
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top", // Adjust start and end as needed
//             end: "bottom top", // Covers the entire section height
//             scrub: true, // Smooth scrolling effect
//             pin: true, // Pin the section while zooming
//           },
//         });

//         tl.to(textRef.current, {
//           scale: 10, // Adjust zoom level for desktop
//           opacity: 0, // Fade out the text
//           duration: 3, // Adjust duration for zoom speed
//           ease: "power1.out",
//         }).to(
//           videoRef.current,
//           {
//             scale: 1, // Scale up the video to full screen
//             opacity: 1, // Fade in the video
//             duration: 3, // Match the text zoom duration
//             ease: "power1.out",
//           },
//           0
//         ); // Start at the same time as the text zoom (position 0 in the timeline)
//       });
//     });

//     mm.add("(max-width: 767px)", () => {
//       // Mobile
//       gsap.context(() => {
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top", // Adjust start and end as needed
//             end: "bottom top", // Covers the entire section height
//             scrub: true, // Smooth scrolling effect
//             pin: true, // Pin the section while zooming
//           },
//         });

//         tl.to(textRef.current, {
//           scale: 5, // Adjust zoom level for mobile
//           opacity: 0, // Fade out the text
//           duration: 2, // Adjust duration for zoom speed
//           ease: "power1.out",
//         }).to(
//           videoRef.current,
//           {
//             scale: 1, // Scale up the video to full screen
//             opacity: 1, // Fade in the video
//             duration: 2, // Match the text zoom duration
//             ease: "power1.out",
//           },
//           0
//         ); // Start at the same time as the text zoom (position 0 in the timeline)
//       });
//     });

//     return () => {
//       mm.revert();
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative h-screen overflow-hidden ">
//       {/* overflow-hidden hides content outside the section */}
//       {/* <div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">

//         <h1
//           ref={textRef}
//           className="text-6xl font-bold text-white transition-all duration-300 ease-out md:text-8xl lg:text-9xl" // Responsive font sizes
//           style={{ willChange: "transform, opacity" }} // Optimize for transforms and opacity
//         >
//           FTX
//         </h1>
//       </div> */}

//       <div
//         className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-300 ease-out opacity-0 text-zoom" // Initially hidden, full-screen coverage
//         style={{ willChange: "transform, opacity" }}
//         ref={videoRef}
//       >
//         <StatsSection />
//       </div>
//     </section>
//   );
// };

// export default TextZoomVideo;

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
