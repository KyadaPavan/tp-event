// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Parallex = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const layers = gsap.utils.toArray(".animation_layer");

//     layers.forEach((layer, index) => {
//       gsap.to(layer, {
//         yPercent: (index + 1) * 10,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top top",
//           end: "bottom top",
//         },
//       });
//     });
//   }, []);

//   return (
//     <div ref={containerRef} className="h-[200vh] overflow-hidden relative">
//       <div className="animation_layer parallax" id="artback"></div>
//       <div className="animation_layer parallax" id="mountain"></div>
//       <div className="animation_layer parallax" id="logoland"></div>
//       <div className="animation_layer parallax" id="jungle1"></div>
//       <div className="animation_layer parallax" id="jungle2"></div>
//       <div className="animation_layer parallax" id="jungle3"></div>
//       <div className="animation_layer parallax" id="jungle4"></div>
//       <div className="animation_layer parallax" id="manonmountain"></div>
//       <div className="animation_layer parallax" id="jungle5"></div>

//       <section className="absolute bottom-0 w-full">
//         {/* <TextBlock /> */}
//       </section>
//     </div>
//   );
// };

// export default Parallex;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Parallex = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const layers = gsap.utils.toArray(".animation_layer");

    layers.forEach((layer, index) => {
      gsap.to(layer, {
        yPercent: (index + 1) * 10,
        ease: "none",
        scrollTrigger: {
          trigger: layer, // Changed from containerRef.current to layer
          scrub: true,
          start: "top bottom", // Adjusted to prevent initial gap
          end: "bottom top",
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 animation_layer parallax"
        id="artback"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="mountain"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="logoland"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="jungle1"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="jungle2"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="jungle3"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="jungle4"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="manonmountain"
      ></div>
      <div
        className="absolute inset-0 animation_layer parallax"
        id="jungle5"
      ></div>

      <section className="absolute bottom-0 w-full">
        {/* <TextBlock /> */}
      </section>
    </div>
  );
};

export default Parallex;
