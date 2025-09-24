import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaGavel } from "react-icons/fa";

const faqs = [
  {
    question: "How do I know if I need a lawyer?",
    answer:
      "If you're facing a legal issue that impacts your business, family, or property, consulting a lawyer helps protect your rights and ensures you're making informed decisions."
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any documents related to your case, such as contracts, identification, previous correspondence, and any notes you’ve taken."
  },
  {
    question: "How long does a typical case take?",
    answer:
      "The timeline varies depending on the type of case, its complexity, and whether it goes to court. Some matters may resolve in weeks, while others take months or years."
  },
  {
    question: "Will my case go to court?",
    answer:
      "Not all cases go to court. Many are resolved through negotiation, mediation, or settlement before reaching trial."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex justify-center items-center gap-2">
            <FaGavel className="text-orange-600" /> Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Answers to common questions about the legal process and working with us.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-orange-600" />
                ) : (
                  <FaChevronDown className="text-orange-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
