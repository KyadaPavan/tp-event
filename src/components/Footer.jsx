import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FloatingDock } from "./ui/Floating-dock";
import { FaHome } from "react-icons/fa";

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
    <footer className="bg-[#FC6423] text-[#002324] px-6 md:px-12 md:py-24 py-12 mt-10">
      <div className="mx-auto md:max-w-[80%] max-w-[90%]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex items-center space-x-2 ">
              <img
                src="/tp-greenlogo.svg"
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
            <div>
              <h3 className="mb-2 font-semibold">Previous Events</h3>
              <div className="h-0.5 w-[80%] bg-[#002324]"></div>
              <ul className="mt-4 space-y-2">
                <li>Infobip's Shift Europe</li>
                <li>Infobip's Shift America</li>
                <li>Shift Dev</li>
                <li>Shift Money</li>
                <li>Shift AI</li>
                <li>Shift Remote</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="mb-2 font-semibold">More</h3>
              <div className="h-0.5 w-[80%] bg-[#002324]"></div>
              <ul className="mt-4 space-y-2">
                <li>Become a Sponsor</li>
                <li>Code of Conduct</li>
                <li>Terms and Conditions</li>
                <li>Privacy</li>
                <li>Press & Media Kit</li>
                <li>Photos</li>
                <li>Videos</li>
                <li>Infobip Acquisition</li>
                <li>Infobip website</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="mb-2 font-semibold">Contact</h3>
              <div className="h-0.5 w-[80%] bg-[#002324]"></div>
              <p className="mt-4">Infobip d.o.o.</p>
              <p>Domovinskog rata 61,</p>
              <p>21000 Split, Croatia</p>
              <p className="mt-2">shift@infobip.com</p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center justify-between gap-6 mt-10 text-center md:flex-row md:gap-0">
          <h3 className="text-lg font-semibold text-[#002324]">
            Bringing the Brightest Developers Together
          </h3>

          <button className="px-6 py-3 text-base font-medium rounded-lg text-[#FC6423] bg-[#002324] flex items-center gap-2  transition-all duration-300 ease-in-out  hover:shadow-lg hover:gap-3">
            Get Tickets
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 mt-10 text-center border-t border-black md:flex-row">
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
