import React, { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const ThemeChange = () => {
  const [isLightDark, setIsLightDark] = useState(false);

  // toggle theme
const ToggleThemeChange = () => {
  const newTheme = isLightDark ? "dark" : "light";
  setIsLightDark(!isLightDark);

  document.body.className = newTheme; // apply theme
  document.body.style.backgroundColor = newTheme === "dark" ? "#0e0c0c" : "#ffffff";

  localStorage.setItem("theme", newTheme);
};

// load theme once
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light"; // default Light theme
  setIsLightDark(savedTheme === "light");
  document.body.className = savedTheme;
  document.body.style.backgroundColor = savedTheme === "light" ? "#ffffff" : "#0e0c0c";
}, []);

  return (
    <div
      className="flex rounded-full space-x-1 bg-violet-400 px-2 py-1 relative order-3 cursor-pointer"
      aria-label="User menu"
      onClick={ToggleThemeChange}
    >
      <span
        className={`absolute top-0 ${isLightDark ? "left-0" : "right-0"
          } bottom-0 rounded-full bg-violet-950 w-1/2 m-0`}
      ></span>
      <IoSunny className="text-violet-50 text-xl" />
      <IoIosMoon className="text-violet-50 text-xl" />
    </div>
  );
};

export default ThemeChange;
