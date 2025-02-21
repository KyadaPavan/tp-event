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
import SponsorsSection from "./components/SponsorsSection";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
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
        <div>
          <Circlezoom />
        </div>
        <div>
          <ZoomEffect />
        </div>
        <div className="py-4 md:py-10">
          <VideoSection />
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
          <Sponser />
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
          <SponsorsSection />
        </div>
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
