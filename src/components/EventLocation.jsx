import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
const EventLocation = () => {
  return (
    <section className="px-4 py-10 text-center text-white md:py-10">
      <div className="z-20 max-w-3xl mx-auto">
        <span className="px-4 py-1 text-sm font-semibold text-white rounded-full bg-white/30 backdrop-blur-md">
          VENUE
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-[#D99BFF] md:text-5xl">
          Event Location
        </h2>

        <p className="px-6 mt-8 text-sm text-gray-100 md:text-lg">
          Visnjik Sports Center is one of the biggest venues in Croatia, an
          imposing facility whose dome shape makes it a recognizable Zadar
          landmark. More than 15,000 m² of Visnjik will host six stages and five
          halls of Shift, and our spectacular event production will transform
          the venue into a futuristic experience to remember.
        </p>
      </div>

      <div className="max-w-6xl mx-auto md:mt-20 mt-10 relative md:w-full w-[90%] flex flex-col items-center">
        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.000913744757!2d73.2442277!3d22.315805200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf8e34eeed21%3A0x1eb7157a1ea2a842!2sSiddheshwar%20Hallmark!5e0!3m2!1sen!2sin!4v1740113628952!5m2!1sen!2sin"
          target="_blank"
        >
          <img
            src="/map.jpg"
            alt="location-map-img"
            className="rounded-2xl w-full hover:shadow-lg hover:shadow-[#ca8ffdc5]"
          />
        </a>

        <div className="w-full p-4 mt-4 text-white rounded-lg shadow-lg bg-white/30 backdrop-blur-md md:w-72 md:absolute md:left-6 md:top-60">
          <h3 className="flex items-center text-lg transition-colors duration-300 hover:text-[#D99BFF]">
            <FaMapMarkerAlt className="mr-2 text-[#D99BFF] transition-transform duration-300 hover:scale-110 animate-bounce" />
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.000913744757!2d73.2442277!3d22.315805200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf8e34eeed21%3A0x1eb7157a1ea2a842!2sSiddheshwar%20Hallmark!5e0!3m2!1sen!2sin!4v1740113628952!5m2!1sen!2sin"
              target="_blank"
            >
              Where you can find us?
            </a>
          </h3>

          <p className="flex items-center mt-2 text-white transition-colors duration-300 hover:text-[#D99BFF]">
            <FaCalendarAlt className="mr-2 text-[#D99BFF] transition-transform duration-300" />
            14 - 16 September 2025
          </p>

          <p className="mt-2 font-semibold">
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.000913744757!2d73.2442277!3d22.315805200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf8e34eeed21%3A0x1eb7157a1ea2a842!2sSiddheshwar%20Hallmark!5e0!3m2!1sen!2sin!4v1740113628952!5m2!1sen!2sin"
              target="_blank"
              className="text-white transition-colors duration-300 hover:underline hover:text-[#D99BFF]"
            >
              The Kresimir Cosic Hall, Splitska ul. 3, 23000 Zadar, Croatia
            </a>
          </p>
        </div>

        {/* Gradient Background */}
        <div className="absolute -top-20 right-1/4 w-[70%] h-[40%] bg-gradient-to-r from-[#9D6BDF] to-[#CA8FFD] opacity-50 blur-3xl rounded-full z-[-20]"></div>
      </div>
    </section>
  );
};

export default EventLocation;
