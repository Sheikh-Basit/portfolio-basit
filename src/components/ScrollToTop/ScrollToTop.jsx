import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisibleScrollBtn, setIsVisibleScrollBtn] = useState(false);

//   Show/Hide the button
  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY > 500) {
        setIsVisibleScrollBtn(true);
      } else {
        setIsVisibleScrollBtn(false);
      }
    };
    
    window.addEventListener("scroll", scrollToTop);
    return () => window.removeEventListener("scroll", scrollToTop);
  }, []);

//   Scroll to top
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="s-t-t">
      {isVisibleScrollBtn && (
        <button
          className="cursor-pointer mb-3 rounded-full w-12 h-12 dark:bg-violet-400 bg-violet-950 text-violet-200 dark:text-violet-100 flex justify-center items-center text-3xl"
          onClick={scrollUp}
        >
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
