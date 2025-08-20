import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "What do I need to provide before starting the project?",
      content: "To begin your project, please share your requirements, design references, domain/hosting details all content (test, images) . If content isn't ready, I'll use professional demo text/Images. Also provide social media links and contact info for your site's contact page.",
    },
    {
      title: "Do you both frontend and backend development?",
      content:
        "Yes, I provide Full Stack Development ( React frontend + Node.js/Express.js or PHP backend + MongoDB/MySQL database ) as a complete package.",
    },
    {
      title: "Will the website/app be mobile friendly?",
      content:
        "Absolutely! All projects are built with responsive design to work perfectly on mobile, tablet and desktop",
    },
    {
      title: "Do you use any frameworks?",
      content:
        "I use Tailwind CSS and Bootstrap (latest version) depending on your preference or project needs.",
    },
    {
      title: "Will the code be SEO-friendly?",
      content:
        "Absolutely. I follow best practices to ensure clean, semantic and SEO-optimized code.",
    },
    {
      title: "Do you work with existing codebases?",
      content:
        "Yes, I can debug, optimize and add new features to your existing MERN Stack projects. Share your code/repo link for review.",
    },
    {
      title: "What about authentication & security?",
      content:
        "All  MERN apps includes JWT/ OAuth authentication and security best practices ( e.g input validation ).",
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="500" className="w-full max-w-xl mx-auto bg-violet-200 dark:bg-neutral-900 rounded-lg shadow-md mt-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-violet-300 dark:border-neutral-700 last:border-0">
          <button
            className="w-full flex justify-between items-center py-3 px-4 text-left text-violet-500 dark:text-violet-400 font-semibold"
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
            <div className="px-4 pb-3 text-violet-900 dark:text-violet-200 text-sm">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
