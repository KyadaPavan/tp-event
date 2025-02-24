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
      "Absolutely! FTX’25 will be broadcasted live on various platforms, allowing you to attend virtually. Virtual conference attendees will have access to a link to join the event.",
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
    <div className="  max-w-5xl mx-auto p-6 text-white " id="faqs">
      {/* Heading & Description */}

      <h2 className=" text-4xl font-semibold text-[#0cffb7] text-center md:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-200 mt-8 px-2">
        We are here to help with any questions. If you need further assistance,
        contact us at &nbsp;
        <a
          href="mailto:support@example.com"
          className="text-[#0cffb7] hover:underline"
        >
          support@example.com
        </a>
      </p>

      {/* FAQs */}
      <div className="mt-16 space-y-4 relative">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#47EAA4]"
          >
            {/* Question */}
            <button
              className="w-full text-left p-4 flex items-center justify-between text-base md:text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="w-6 flex items-center justify-center">
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
              <p className="text-gray-100 md:text-base text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}

        <div className="absolute top-0  w-[90%] h-[100%] bg-gradient-to-r from-[#047059] to-[#47EAA4] opacity-50 blur-3xl rounded-full z-[-20]"></div>
      </div>
    </div>
  );
}
