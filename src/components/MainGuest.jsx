import React, { useState } from "react";

const MainGuest = () => {
  const data = [
    {
      id: 1,
      title: "Madhusudhan Rao",
      img: "/speaker-1.png",
      postion: "CTO at",
      company: "Swiggy",
    },
    {
      id: 2,
      title: "Krunal Shah",
      img: "/speaker-2.png",
      postion: "Founder of",
      company: "Cred",
    },
    {
      id: 3,
      title: "Anoop Menon",
      img: "/speaker-3.png",
      postion: "CTO at",
      company: "RedBus",
    },
    {
      id: 4,
      title: "Shakti Mohan",
      img: "/speaker-4.png",
      postion: "Founder & CEO of",
      company: "Lets Venture",
    },
    {
      id: 5,
      title: "Rahul Gupta",
      img: "/speaker-5.png",
      postion: "Head Fintech at",
      company: "Zomato",
    },
    {
      id: 6,
      title: "Sandhya Devanathan",
      img: "/speaker-6.png",
      postion: "Vice President, India at",
      company: "Meta",
    },
    {
      id: 7,
      title: "Lizzie Chapman",
      img: "/speaker-7.png",
      postion: "Patner of",
      company: "Berkeley ",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <>
      <div className="text-white max-w-[80%] mx-auto">
        <div>
          <p className=" mx-auto text-5xl font-semibold text-center text-[#0cffb7]">
            Experience & Expertise, Live on Stage
          </p>
        </div>
        {hoveredIndex !== null && (
          <div
            className="fixed z-50 w-48 h-48 bg-center bg-cover rounded-lg pointer-events-none"
            style={{
              backgroundImage: `url(${data[hoveredIndex].img})`,
              left: cursorPos.x + 20 + "px",
              top: cursorPos.y + 20 + "px",
            }}
          >
            {" "}
          </div>
        )}

        {/* Guest List */}
        <div
          className="flex items-center justify-center p-20 text-white"
          onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
        >
          <div className="w-full">
            {data.map((guest, index) => (
              <div
                key={guest.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="pt-10 pb-4 border-b cursor-pointer border-[#0cffb7]/40"
              >
                <p className="text-3xl capitalize">{guest.title}</p>

                {/* Only show details for the hovered guest */}

                <div className="mt-2">
                  <p className="text-base capitalize text-white/80">
                    {guest.postion} {guest.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainGuest;
