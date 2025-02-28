import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spotlight } from "./ui/Spotlight";
gsap.registerPlugin(ScrollTrigger);

const Circlezoom = () => {
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
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Fix */}

      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={bg1}></div>

      <div>
        <Spotlight
          className="h-screen top-8 left-10 md:-left-40 md:-top-20"
          fill="#C358F4"
        />
        <Spotlight className="h-screen right-20 top-16" fill="#CA8FFD" />
      </div>

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

          <div
            className="bg-gradient-to-r from-[#6423C4] via-[#CA8FFD] to-[#C358F4]   
           md:w-[60%] w-[70%]  image "
            ref={img}
          ></div>

          {/* Responsive Text */}
          <div className="absolute flex flex-col items-center justify-center gap-20 text-white">
            <h1
              ref={text1}
              className="lg:text-[130px] md:text-[100px] text-[50px] font-bold text-center leading-none"
            >
              <span className="text-stroke">TechX</span>{" "}
              <span className="md:text-[40px] text-[20px]">by</span> <br />{" "}
              Trustopay
            </h1>
            <p
              ref={text2}
              className="opacity-80 lg:w-80 md:w-72 w-[80%] md:text-[13px] text-[10px] text-center px-2"
            >
              An exclusive platform showcasing groundbreaking innovations and
              visionary ideas from the startup ecosystem
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Circlezoom;
