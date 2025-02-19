import { Timeline } from "./ui/Timeline";

const scheduleData = [
  {
    title: "09:00 AM - Opening Ceremony",
    content:
      "Kickstart the event with a welcome speech from the organizers, followed by an introduction to the day's schedule and key highlights.",
  },
  {
    title: "10:00 AM - Keynote Speech",
    content:
      "Gain valuable insights from industry leaders as they discuss emerging trends, innovations, and the future of technology.",
  },
  {
    title: "11:30 AM - Networking Break",
    content:
      "A dedicated session to connect with fellow attendees, speakers, and industry professionals. Exchange ideas, build relationships, and expand your network.",
  },
  {
    title: "01:00 PM - Panel Discussion",
    content:
      "An engaging discussion featuring experts from various fields, addressing key challenges and opportunities in the industry.",
  },
  {
    title: "03:00 PM - Workshops & Sessions",
    content:
      "Participate in interactive workshops and breakout sessions designed to provide hands-on learning experiences and skill development.",
  },
  {
    title: "06:00 PM - Closing Remarks",
    content:
      "Wrap up the day with final thoughts from the organizers, key takeaways from the sessions, and a look ahead to upcoming events.",
  },
];

const EventTimeline = () => {
  return (
    <>
      <Timeline data={scheduleData} />
    </>
  );
};

export default EventTimeline;
