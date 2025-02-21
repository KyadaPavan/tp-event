import React from "react";

const speakers = [
  {
    id: 1,
    title: "Madhusudhan Rao",
    img: "/speaker-1.png",
    postion: "CTO",
    company: "Swiggy",
  },
  {
    id: 2,
    title: "Krunal Shah",
    img: "/speaker-2.png",
    postion: "Founder",
    company: "Cred",
  },
  {
    id: 3,
    title: "Anoop Menon",
    img: "/speaker-3.png",
    postion: "CTO",
    company: "RedBus",
  },
  {
    id: 4,
    title: "Shakti Mohan",
    img: "/speaker-4.png",
    postion: "Founder & CEO",
    company: "Lets Venture",
  },
  {
    id: 5,
    title: "Rahul Gupta",
    img: "/speaker-5.png",
    postion: "Head Fintech",
    company: "Zomato",
  },
  {
    id: 6,
    title: "Sandhya Devanathan",
    img: "/speaker-6.png",
    postion: "Vice President, India",
    company: "Meta",
  },
  {
    id: 7,
    title: "Lizzie Chapman",
    img: "/speaker-7.png",
    postion: "Patner",
    company: "Berkeley ",
  },
];

const Speakers = () => {
  return (
    <div className="mx-auto max-w-[90%] overflow-hidden">
      <p className="mx-auto text-2xl my-8 font-semibold text-center text-[#0cffb7]">
        Experience & Expertise, Live on Stage
      </p>

      {/* Scrollable container on mobile */}
      <div className="flex space-x-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide ">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto text-white shadow-lg rounded-xl snap-center"
          >
            <img
              src={speaker.img}
              alt={speaker.title}
              className="object-cover mb-4 w-60 h-60 rounded-xl"
            />
            <h3 className="text-lg font-bold">{speaker.title}</h3>
            <p className="text-base text-gray-400">{speaker.postion}</p>
            <p className="text-base font-bold italic text-[#0cffb7] mb-10">
              {speaker.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
