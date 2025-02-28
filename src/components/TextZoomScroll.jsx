// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import StatsSection from "./StatsSection"; // Import your StatsSection

// gsap.registerPlugin(ScrollTrigger);

// const TextZoomSection = () => {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const maskRef = useRef(null);

//   useEffect(() => {
//     let mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       gsap.context(() => {
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: 0.5, // Smooth interpolation
//             pin: true,
//             anticipatePin: 1, // Helps with smoother transition
//           },
//         });

//         tl.to(maskRef.current, {
//           scale: 8, // Adjusted for smoother zoom
//           opacity: 0,
//           ease: "none", // Ensures no abrupt changes
//         }).to(
//           contentRef.current,
//           {
//             scale: 1,
//             opacity: 1,
//             ease: "none",
//           },
//           0
//         );
//       });
//     });

//     mm.add("(max-width: 767px)", () => {
//       gsap.context(() => {
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: 0.5,
//             pin: true,
//             anticipatePin: 1,
//           },
//         });

//         tl.to(maskRef.current, {
//           scale: 4.5, // Adjusted zoom level for mobile
//           opacity: 0,
//           ease: "none",
//         }).to(
//           contentRef.current,
//           {
//             scale: 1,
//             opacity: 1,
//             ease: "none",
//           },
//           0
//         );
//       });
//     });

//     // Refresh ScrollTrigger on resize
//     ScrollTrigger.refresh();

//     return () => {
//       mm.revert();
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative h-screen overflow-hidden">
//       <div
//         ref={maskRef}
//         className="absolute top-0 left-0 w-full h-full origin-center bg-[#CA8FFD]"
//         style={{
//           maskImage: "url('/FTX-Mask.png')",
//           maskPosition: "center",
//           maskRepeat: "no-repeat",
//           maskSize: "contain",
//           willChange: "transform",
//         }}
//       />
//       <div
//         ref={contentRef}
//         className="absolute top-0 left-0 w-full h-full origin-center transform opacity-0"
//         style={{ willChange: "transform, opacity" }}
//       >
//         <StatsSection />
//       </div>
//     </section>
//   );
// };

// export default TextZoomSection;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatsSection from "./StatsSection"; // Import your StatsSection

gsap.registerPlugin(ScrollTrigger);

const TextZoomSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "top -30%", // Extended effect duration
            scrub: 1.5, // Slower transition
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(maskRef.current, {
          scale: 8, // Slightly increased for a longer zoom
          opacity: 0,
          ease: "power2.out", // Smoother easing
        }).to(
          contentRef.current,
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          0
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "top -20%", // Slightly extended for mobile
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(maskRef.current, {
          scale: 6.5, // Slightly increased for a longer effect
          opacity: 0,
          ease: "power2.out",
        }).to(
          contentRef.current,
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          0
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div
        ref={maskRef}
        className="absolute top-0 left-0 w-full h-full origin-center bg-[#CA8FFD]"
        style={{
          maskImage: "url('/FTX-Mask.png')",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          willChange: "transform",
        }}
      />
      <div
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-full origin-center transform opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        <StatsSection />
      </div>
    </section>
  );
};

export default TextZoomSection;
