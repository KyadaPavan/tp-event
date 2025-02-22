import "./App.css";
import Circlezoom from "./components/Circlezoom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ZoomEffect from "./components/ZoomEffect";
import VideoSection from "./components/VideoSection";
import TabbedSection from "./components/TabbedSection";
import StatsSection from "./components/StatsSection";
import EventSchedule from "./components/EventSchedule";
import MainGuest from "./components/MainGuest";
import Speakers from "./components/Speaker";
import Sponser from "./components/Sponser";
import TextZoomScroll from "./components/TextZoomScroll";
import CallDareSection from "./components/CallDareSection";
import TicketSection from "./components/TicketSection";
import EventLocation from "./components/EventLocation";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { HeroHighlight } from "./components/ui/Hero-highlight";
import AnimatedCursor from "react-animated-cursor";
import StickyScroll from "./components/ui/Sticky-scroll-reveal";
import { ExpandableCardDemo } from "./components/ui/ExpandableCardDemo";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Router>
        <div className="hidden App md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
            outerStyle={{
              border: "3px solid var(--cursor-color)",
            }}
          />
        </div>
        <Navbar />
        <div>
          <Circlezoom />
        </div>
        <div className="block md:hidden">
          <ZoomEffect />
        </div>

        <div className="hidden md:block">
          <HeroHighlight />
        </div>
        <div className="py-4 md:py-10 ">
          <VideoSection />
        </div>
        <div className="py-4 md:py-10 ">
          <StickyScroll
            content={[
              {
                id: 1,
                title: "Connect",
                description:
                  "Networking is the best part of every conference, and Shift is no exception. We pride ourselves on creating a laid-back atmosphere where meeting new people comes naturally.",
                image: "/tab-1.jpg",
              },
              {
                id: 2,
                title: "Learn",
                description:
                  "Gain insights from top industry leaders and discover the latest trends in tech. Our sessions are designed to be informative, engaging, and packed with valuable takeaways.",
                image: "/tab-2.jpg",
              },
              {
                id: 3,
                title: "Innovate",
                description:
                  "Get inspired by groundbreaking ideas and cutting-edge technology. Experience live demos, hands-on workshops, and explore the future of innovation.",
                image: "/tab-3.jpg",
              },
              {
                id: 4,
                title: "Engage",
                description:
                  "Participate in interactive discussions, roundtables, and Q&A sessions with experts. This is your chance to get your questions answered and share your thoughts.",
                image: "/tab-4.jpg",
              },
            ]}
          />
        </div>

        <div className="py-4 md:py-10">
          <TabbedSection />
        </div>
        <div className="py-4 md:py-10">
          <StatsSection />
        </div>
        <div className="hidden py-4 md:py-10 md:block ">
          <TextZoomScroll />
        </div>

        <div className="py-4 md:py-10 scrollbar-hide">
          <ExpandableCardDemo />
        </div>
        <div className="hidden py-4 md:py-10 md:block ">
          <MainGuest />
        </div>
        <div className="block py-10 md:py-10 md:hidden">
          <Speakers />
        </div>
        <div className="py-4 md:py-10">
          <EventSchedule />
        </div>

        <div className="py-4 md:py-10">
          <CallDareSection />
        </div>
        <div className="py-4 md:py-10">
          <TicketSection />
        </div>
        <div className="py-4 md:py-10">
          <EventLocation />
        </div>
        <div className="py-4 md:py-10">
          <Sponser />
        </div>
        {/* <div className="py-4 md:py-10">
          <SponsorsSection />
        </div> */}

        <div className="py-4 md:py-10">
          <FAQSection />
        </div>
        <div className="py-4 md:py-10">
          <CTA />
        </div>
        <div className="block pt-4 md:pt-10 md:hidden">
          <Footer />
        </div>

        <div
          className="relative h-[840px] hidden md:block"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
            <div className="h-[800px] sticky top-[calc(100vh-800px)]">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
