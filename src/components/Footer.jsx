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
    <footer className="relative px-6 py-12 mt-10 text-white bg-white/20 backdrop-blur-md md:px-12 md:py-10">
      <div className="absolute  w-[90%] mx-auto h-[90%] bg-gradient-to-r from-[#6423C4] via-[#C358F4] to-[#CA8FFD] opacity-50 blur-3xl my-auto rounded-full z-[-4]"></div>
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
              Trustopay is the biggest developer event in Southeastern Europe.
              Once again we are bringing together the global tech community;
              more than 5,000 developers, software engineers, product owners,
              founders, startups, and all kinds of IT professionals.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center justify-center gap-4 md:items-end">
            <h3 className="text-lg font-semibold text-center text-white">
              Bringing the Brightest Developers Together
            </h3>

            <button className="px-6 py-3 text-base font-medium rounded-lg  shadow-lg flex items-center gap-2 text-white bg-gradient-to-r from-[#6423C4] via-[#CA8FFD] to-[#C358F4]   hover:bg-gradient-to-r hover:from-[#C358F4] hover:via-[#CA8FFD] hover:to-[#6423C4] transition-all duration-300 hover:gap-3">
              Get Tickets
              <ArrowRight size={20} />
            </button>
          </div>
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
