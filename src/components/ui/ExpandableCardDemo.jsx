import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center max-w-screen">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full top-2 right-2 lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white/20 backdrop-blur-md  sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="object-cover object-top w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white/70"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white/70 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div>
        <p className="my-20 mx-auto text-5xl font-semibold text-center text-[#0cffb7] ">
          Experience & Expertise, Live on Stage
        </p>
      </div>
      <ul className="w-full max-w-2xl gap-4 mx-auto">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col items-center justify-between p-4 cursor-pointer md:flex-row hover:bg-white/20 hover:backdrop-blur-md rounded-xl max-w-screen"
          >
            <div className="flex flex-col gap-4 md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="object-cover object-top w-40 h-40 rounded-lg md:h-14 md:w-14"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-center text-neutral-800 dark:text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-white/70 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 mt-4 text-sm font-bold text-black bg-gray-100 rounded-full hover:bg-[#0cffb7]  md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "CTO at Swiggy",
    title: "Madhusudhan Rao",
    src: "/speaker-1.png",
    ctaText: "Know More",
    ctaLink: "https://en.wikipedia.org/wiki/Madhusudhan_Rao_(actor)",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and
          melancholia, drawing inspiration from both contemporary and vintage
          pop culture. With a career that has seen numerous critically acclaimed
          albums, Lana Del Rey has established herself as a unique and
          influential figure in the music industry, earning a dedicated fan base
          and numerous accolades.
        </p>
      );
    },
  },
  {
    description: "Founder of Cred",
    title: "Kunal  Shah",
    src: "/speaker-2.png",
    ctaText: "Know More",
    ctaLink: "https://en.wikipedia.org/wiki/Kunal_Shah",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
          His songs often reflect the struggles and triumphs of everyday life,
          capturing the essence of Punjabi culture and traditions. With a career
          spanning over two decades, Babu Maan has released numerous hit albums
          and singles that have garnered him a massive fan following both in
          India and abroad.
        </p>
      );
    },
  },

  {
    description: "CTO at RedBus",
    title: "Anoop Menon",
    src: "/speaker-3.png",
    ctaText: "Know More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
          Their songs often reflect themes of aggression, social issues, and
          personal struggles, capturing the essence of the heavy metal genre.
          With a career spanning over four decades, Metallica has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Founder & CEO of Lets Venture",
    title: "Shakti Mohan",
    src: "/speaker-4.png",
    ctaText: "Know More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br />
          Their songs often reflect a blend of blues, hard rock, and folk music,
          capturing the essence of the 1970s rock era. With a career spanning
          over a decade, Led Zeppelin has released numerous hit albums and
          singles that have garnered them a massive fan following both in the
          United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Head Fintech at Zomato",
    title: "Rahul Gupta",
    src: "/speaker-5.png",
    ctaText: "Know More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          "Aawarapan", a Bollywood movie starring Emraan Hashmi, is renowned for
          its intense storyline and powerful performances. Directed by Mohit
          Suri, the film has become a significant work in the Indian film
          industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, "Aawarapan" has garnered a
          massive fan following both in India and abroad, solidifying Emraan
          Hashmi's status as a versatile actor.
        </p>
      );
    },
  },
];
