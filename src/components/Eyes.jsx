import React, { useEffect, useState } from "react";

export default function Eyes({ className }) {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 280);
    });
  }, []);

  return (
    <div className="w-full gap-[30px] flex items-center justify-center">
      <div
        className={`bg-white border-[2px] border-[#21212188] rounded-full flex items-center justify-center ${className}`}
      >
        <img
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
          src="eyes.svg"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`bg-white border-[2px] border-[#21212188] rounded-full flex items-center justify-center ${className}`}
      >
        <img
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
          src="eyes.svg"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
