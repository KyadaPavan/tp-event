import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spotlight } from "./ui/Spotlight";
import StatsSection from "./StatsSection";
gsap.registerPlugin(ScrollTrigger);

const TextZoom = () => {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        start: "top top",
        end: "bottom bottom",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: img_container.current,
            pin: img_container.current,
            scrub: 1,
            start: "0% 0%",
          },
        })
        .to(img.current, { scale: 2 })
        .to(text1.current, { y: -500 }, 0.05, "<")
        .to(text2.current, { y: -500 }, 0.08, "<");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className=" w-screen h-screen overflow-hidden">
      {/* Background Fix */}

      <div className="absolute top-0 left-0  h-full w-full z-0" ref={bg1}></div>

      <section className="relative flex items-center justify-center w-screen h-screen">
        <div
          ref={img_container}
          className="flex items-center justify-center w-full h-full perspective"
        >
          {/* Responsive Image */}
          {/* <img
            ref={img}
            src="/nature-bg.jpg"
            alt="nature-image"
            className="w-full h-full image"
          /> */}

          <div className=" md:w-[60%] w-[70%]  image-fxt" ref={img}>
            {" "}
            <StatsSection />
          </div>

          {/* Responsive Text */}
        </div>
      </section>
    </div>
  );
};

export default TextZoom;
