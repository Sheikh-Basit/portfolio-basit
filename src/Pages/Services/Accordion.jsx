import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is TailwindCSS?",
      content:
        "TailwindCSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      title: "What is MERN Stack?",
      content:
        "MERN stands for MongoDB, Express, React, and Node.js, a stack for full-stack development.",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-neutral-900 rounded-lg shadow-md mt-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-800">
          <button
            className="w-full flex justify-between items-center py-3 px-4 text-left text-white font-semibold hover:text-cyan-400"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-3 text-gray-600 text-sm">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
