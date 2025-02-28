import { Timeline } from "./ui/Timeline";

const scheduleData = [
  {
    title: "09:00 AM - Opening Ceremony",
    content:
      "Kickstart the event with a welcome speech from the organizers, followed by an introduction to the day's schedule and key highlights.",
    speakers: [
      {
        name: "Shashank Kumar",
        role: "Co-Founder & MD",
        company: "Razorpay",
        image: "/speaker-1.png",
        badge: "Moderator",
      },
      {
        name: "Anil Singh",
        role: "Country Head Credit Cards",
        company: "YES Bank",
        image: "/speaker-3.png",
      },
    ],
  },
  {
    title: "10:00 AM - Keynote Speech",
    content:
      "Gain valuable insights from industry leaders as they discuss emerging trends, innovations, and the future of technology.",
    speakers: [
      {
        name: "Rohan Verma",
        role: "CEO ",
        company: "MapmyIndia",
        image: "/speaker-5.png",
      },
      {
        name: "Priya Sharma",
        role: "CTO",
        company: "Fintech Hub",
        image: "/speaker-4.png",
      },
    ],
  },
  {
    title: "11:30 AM - Networking Break",
    content:
      "A dedicated session to connect with fellow attendees, speakers, and industry professionals.",
    speakers: [
      {
        name: "Sandeep Malhotra",
        role: "VP Product Management",
        company: "Mastercard",
        image: "/speaker-6.png",
      },
      {
        name: "Divya Mehta",
        role: "Head of AI Research",
        company: "Google AI",
        image: "/speaker-7.png",
      },
      {
        name: "Rajesh Iyer",
        role: "Managing Director",
        company: "Accenture",
        image: "/speaker-3.png",
      },
      {
        name: "Nisha Agarwal",
        role: "Innovation Lead",
        company: "Microsoft",
        image: "/speaker-5.png",
      },
    ],
  },
  {
    title: "01:00 PM - Panel Discussion",
    content:
      "An engaging discussion featuring experts from various fields, addressing key challenges and opportunities in the industry.",
    speakers: [
      {
        name: "Aditya Prakash",
        role: "Co-Founder",
        company: "Tech Startups India",
        image: "/speaker-4.png",
      },
      {
        name: "Meenal Kapoor",
        role: "Senior Data Scientist",
        company: "IBM",
        image: "/speaker-6.png",
      },
    ],
  },
  {
    title: "03:00 PM - Workshops & Sessions",
    content:
      "Participate in interactive workshops and breakout sessions designed to provide hands-on learning experiences and skill development.",
    speakers: [
      {
        name: "Vikram Joshi",
        role: "Lead Blockchain Developer",
        company: "Polygon",
        image: "/speaker-7.png",
      },
      {
        name: "Ananya Gupta",
        role: "Cybersecurity Analyst",
        company: "Palo Alto Networks",
        image: "/speaker-3.png",
      },
      {
        name: "Mohit Sharma",
        role: "AI Ethics Consultant",
        company: "OpenAI",
        image: "/speaker-5.png",
      },
    ],
  },
  {
    title: "06:00 PM - Closing Remarks",
    content:
      "Wrap up the day with final thoughts from the organizers and key takeaways.",
    speakers: [
      {
        name: "Ramesh Krishnan",
        role: "Event Organizer",
        company: "Startup India",
        image: "/speaker-1.png",
      },
      {
        name: "Pooja Patel",
        role: "Marketing Director",
        company: "Amazon Web Services",
        image: "/speaker-2.png",
      },
    ],
  },
];

const EventTimeline = () => {
  return (
    <>
      <div id="schedule">
        <Timeline data={scheduleData} />
      </div>
    </>
  );
};

export default EventTimeline;
