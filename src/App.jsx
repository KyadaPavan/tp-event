import "./App.css";
import Circlezoom from "./components/Circlezoom";
import Eyes from "./components/Eyes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ZoomEffect from "./components/ZoomEffect";
import VideoSection from "./components/VideoSection";
import TabbedSection from "./components/TabbedSection";
import StatsSection from "./components/StatsSection";
import EventSchedule from "./components/EventSchedule";
function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      {/* <CircularScrollEffect />
      <ZoomEffect /> */}

      {/* <div className="max-w-[90%] mx-auto ">
        <Navbar />
      </div> */}

      {/* <Navbar />
      <Circlezoom /> */}
      <div>
        <Circlezoom />
      </div>
      <div>
        <ZoomEffect />
      </div>
      <div className="py-10">
        <VideoSection />
      </div>
      <div className="py-10">
        <TabbedSection />
      </div>
      <div className="py-10">
        <StatsSection />
      </div>
      <div className="py-10">
        <EventSchedule />
      </div>
      <div className="py-10">
        <TabbedSection />
      </div>
    </>
  );
}

export default App;
