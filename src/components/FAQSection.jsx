import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book my tickets?",
    answer:
      "Simply click on the “Get tickets” button, and you will be redirected to the our secure payment page where you can complete the purchase and get the ticket.",
  },
  {
    question: "Where do I find my tickets?",
    answer:
      "You will receive a confirmation email along with your ticket at your registered email address, with details such as venue information, timings, agenda, and more.",
  },
  {
    question: "Do I have to carry a physical print-out of my ticket?",
    answer:
      "No. Just show your ticket confirmation email at the registration desk, and you'll get access to the conference. For virtual conference attendees, a link will be provided for you to join the event.",
  },
  {
    question: "Can I attend the conference virtually?",
    answer:
      "Absolutely! TechX’25 will be broadcasted live on various platforms, allowing you to attend virtually. Virtual conference attendees will have access to a link to join the event.",
  },
  {
    question:
      "I have registered but have not received an email confirmation. What should I do?",
    answer:
      "Please make sure to check your spam or junk folder. If you still can't find the confirmation email, contact support@ftx.com with the same registration email and phone number for prompt assistance.",
  },
  {
    question: "How can I cancel my tickets?",
    answer: "Ticket cancellations are not possible for this event.",
  },
  {
    question: "Is my ticket transferable?",
    answer: "No, tickets are not transferable.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl p-6 mx-auto text-white " id="faqs">
      {/* Heading & Description */}

      <h2 className=" text-4xl font-semibold text-[#D99BFF] text-center md:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="px-2 mt-8 text-center text-gray-200">
        We are here to help with any questions. If you need further assistance,
        contact us at &nbsp;
        <a
          href="mailto:support@example.com"
          className="text-[#D99BFF] hover:underline"
        >
          support@example.com
        </a>
      </p>

      {/* FAQs */}
      <div className="relative mt-16 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#D99BFF]"
          >
            {/* Question */}
            <button
              className="flex items-center justify-between w-full p-4 text-base font-medium text-left md:text-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="flex items-center justify-center w-6">
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" size={15} />
                ) : (
                  <FaChevronDown className="text-gray-400" size={15} />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 p-4"
                  : "max-h-0 opacity-0 p-0"
              }`}
            >
              <p className="text-sm text-gray-100 md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}

        <div className="absolute top-0  w-[90%] h-[100%] bg-gradient-to-r from-[#9D6BDF] to-[#CA8FFD] opacity-50 blur-3xl rounded-full z-[-20]"></div>
      </div>
    </div>
  );
}
