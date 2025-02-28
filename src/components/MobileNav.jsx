import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
export default function MobileNav() {
  const [toggle, setToggle] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const footernavbarItems = [
    { id: 1, title: "About", href: "about" },
    { id: 2, title: "Speakers", href: "speakers" },
    { id: 3, title: "Schedule", href: "schedule" },
    { id: 4, title: "Pricing", href: "pricing" },
    { id: 5, title: "FAQs", href: "faqs" },
  ];

  return (
    <>
      <div
        className={`${
          isScrollingDown ? "-top-20" : "top-0"
        } w-full  justify-between items-center h-[8vh] padding-x flex lg:hidden max-w-[100%] mx-auto py-8 bg-white/10 backdrop-blur-[20px] px-4`}
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          <img
            src="/tp_whitelogo.svg"
            alt="trustopay logo"
            width={170}
            height={170}
          />
        </ScrollLink>
        <RiMenuFill
          onClick={() => setToggle(true)}
          className="w-8 h-8 text-xl text-white cursor-pointer"
        />
      </div>
      <AnimatePresence mode="wait">
        {toggle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed top-0 bottom-0 right-0 z-50 flex flex-col items-end justify-end w-full min-h-screen text-white bg-white/50 backdrop-blur-md bg-secondry"
          >
            <div className="w-full flex justify-between items-center h-[8vh] border-b border-[#f1f1f155] padding-x max-w-[90%] mx-auto mt-2 ">
              <ScrollLink to="home" smooth={true} duration={500}>
                <img
                  src="/tp_whitelogo.svg"
                  alt="trustopay logo"
                  width={170}
                  height={170}
                />
              </ScrollLink>
              <IoMdClose
                onClick={() => setToggle(false)}
                className="w-8 h-8 text-3xl cursor-pointer text-background"
              />
            </div>
            <ul className="h-full w-full flex justify-start text-left flex-col  max-w-[90%] mx-auto items-center">
              {footernavbarItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggle(false)}
                  className="text-[26px] leading-[67px]  uppercase font-semibold tracking-[-.9] text-background"
                >
                  {item.title}
                </ScrollLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
