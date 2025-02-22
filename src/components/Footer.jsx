import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import { FloatingDock } from "./ui/Floating-dock";

const Footer = () => {
  const items = [
    {
      title: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedinIn className="text-xl" />,
    },
    {
      title: "Twitter",
      href: "https://twitter.com",
      icon: <FaTwitter className="text-xl" />,
    },
    {
      title: "Facebook",
      href: "https://facebook.com",
      icon: <FaFacebookF className="text-xl" />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com",
      icon: <FaInstagram className="text-xl" />,
    },
    {
      title: "YouTube",
      href: "https://youtube.com",
      icon: <FaYoutube className="text-xl" />,
    },
    {
      title: "WhatsApp",
      href: "https://whatsapp.com",
      icon: <FaWhatsapp className="text-xl" />,
    },
  ];

  return (
    <footer className="relative px-6 py-12 mt-10 text-white bg-white/20 backdrop-blur-md md:px-12 md:py-24">
      <div className="absolute  w-[90%] mx-auto h-[90%] bg-gradient-to-r from-[#FC6524] to-[#47EAA4] opacity-50 blur-3xl my-auto rounded-full z-[-4]"></div>
      <div className="mx-auto md:max-w-[80%] max-w-[90%] ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex items-center space-x-2 ">
              <img
                src="/tp_whitelogo.svg"
                alt="tp-logo-white"
                className="w-60 "
              />
            </div>
            <p className="max-w-md mt-4 text-base leading-8">
              Shift is the biggest developer event in Southeastern Europe. Once
              again we are bringing together the global tech community; more
              than 5,000 developers, software engineers, product owners,
              founders, startups, and all kinds of IT professionals.
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Column 1 */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-lg font-semibold">Previous Events</h3>
              <div className="h-0.5 md:w-[80%] w-full bg-white"></div>
              <ul className="mt-4 space-y-2">
                {[
                  { name: "Infobip's Shift Europe", href: "/shift-europe" },
                  { name: "Infobip's Shift America", href: "/shift-america" },
                  { name: "Shift Dev", href: "/shift-dev" },
                  { name: "Shift Money", href: "/shift-money" },
                  { name: "Shift AI", href: "/shift-ai" },
                  { name: "Shift Remote", href: "/shift-remote" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-white transition-colors duration-300  hover:text-[#47EAA4]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="mb-2 text-lg font-semibold text-center md:text-left">
                More
              </h3>
              <div className="h-0.5 md:w-[80%] w-full bg-white "></div>
              <ul className="mt-4 space-y-2 text-center md:text-left">
                {[
                  { name: "Become a Sponsor", href: "/sponsor" },
                  { name: "Code of Conduct", href: "/code-of-conduct" },
                  { name: "Terms and Conditions", href: "/terms" },
                  { name: "Privacy", href: "/privacy" },
                  { name: "Press & Media Kit", href: "/press-media" },
                  { name: "Photos", href: "/photos" },
                  { name: "Videos", href: "/videos" },
                  { name: "Infobip Acquisition", href: "/infobip-acquisition" },
                  {
                    name: "Infobip website",
                    href: "https://www.infobip.com",
                    external: true,
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className="text-white transition-colors duration-300 hover:text-[#47EAA4]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-lg font-semibold">Contact</h3>
              <div className="h-0.5 md:w-[80%] w-full bg-white "></div>
              <p className="mt-4">Infobip d.o.o.</p>
              <p>Domovinskog rata 61,</p>
              <p>21000 Split, Croatia</p>
              <p className="mt-2 transition-colors duration-300 cursor-pointer hover:text-white">
                shift@infobip.com
              </p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center justify-between gap-6 mt-10 text-center md:flex-row md:gap-0">
          <h3 className="text-lg font-semibold text-white">
            Bringing the Brightest Developers Together
          </h3>

          {/* <button className="px-6 py-3 text-base font-medium rounded-lg text-[#FC6423] bg-[#002324] flex items-center gap-2  transition-all duration-300 ease-in-out  hover:shadow-lg hover:gap-3">
            Get Tickets
            <ArrowRight size={20} />
          </button> */}
          <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#FC6524] to-[#47EAA4] shadow-lg flex items-center gap-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#47EAA4] hover:to-[#FC6524] hover:gap-3">
            Get Tickets
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 mt-10 text-center border-t border-white md:flex-row">
          <p className="flex mt-4 space-x-4 md:mt-12">© Trustopay 2025</p>
          <div className="flex mt-4 space-x-4 md:mt-12">
            <FloatingDock items={items} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
