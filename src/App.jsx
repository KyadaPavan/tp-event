import "./App.css";
import Circlezoom from "./components/Circlezoom";
import Eyes from "./components/Eyes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ZoomEffect from "./components/ZoomEffect";
import Parallex from "./components/Parallex";
import HomeSection from "./components/HomeSection";
import VideoSection from "./components/VideoSection";
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
    </>
  );
}

export default App;
