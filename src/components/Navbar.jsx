import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import TextHover from "./TextHover";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
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

  const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } },
  };

  const navbarItems = [
    { id: 1, title: "Services", href: "services" },
    { id: 2, title: "Our work", href: "presentation" },
    { id: 3, title: "About us", href: "ochi-team" },
    { id: 4, title: "Insights", href: "insights" },
    { id: 5, title: "Contact us", href: "contact" },
  ];

  return (
    <>
      <motion.nav
        variants={navVariants}
        className={`${
          isScrollingDown ? "-top-20" : "top-0"
        } max-w-[90%] w-full h-[8vh] px-4 fixed z-50 backdrop-blur-[7px] hidden items-center justify-between lg:flex mx-auto`}
        animate={hidden ? "hidden" : "visible"}
      >
        <div className="w-[50%] ">
          <ScrollLink to="top" smooth={true} duration={500}>
            <img
              src="/tp_whitelogo.svg"
              alt="trustopay logo"
              width={170}
              height={170}
            />
          </ScrollLink>
        </div>
        <div className="flex gap-8 w-[50%] ">
          {navbarItems.map((item) => (
            <ScrollLink
              key={item.id}
              className={`w-fit paragraph font-medium text-lg  capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              }`}
              to={item.href}
              smooth={true}
              duration={500}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </ScrollLink>
          ))}
        </div>
      </motion.nav>

      <MobileNav />
    </>
  );
}
