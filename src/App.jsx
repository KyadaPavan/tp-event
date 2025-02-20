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
function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
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
      <div>
        <TextZoomScroll />
      </div>

      <div className="hidden py-4 md:py-10 md:block ">
        <MainGuest />
      </div>
      <div className="block py-4 md:py-10 md:hidden">
        <Speakers />
      </div>
      <div className="py-4 md:py-10">
        <EventSchedule />
      </div>
      <div className="py-4 md:py-10">
        <Sponser />
      </div>
    </>
  );
}

export default App;
