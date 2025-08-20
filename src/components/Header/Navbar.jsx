import { useState } from "react";

import { Link } from "react-scroll";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightDark, setIsLightDark] = useState(false);
  
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const ToggleThemeChange = () => {
    setIsLightDark(!isLightDark);
    if (isLightDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.body.style.backgroundColor = "#0e0c0c";
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
  
      <nav id="scrollToTop" className="bg-violet-200 dark:bg-neutral-950 shadow fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-3 lg:px-14">
          {/* Logo */}
          <picture className="logo order-2 sm:order-1 flex items-center justify-center">
            
              <span className="text-transparent [-webkit-text-stroke:0.3px_#22d3ee] font-bold text-4xl me-2">
                &#123; 
              </span>
            <img src={logo} width={50} alt="AB" />
           <span className="text-transparent [-webkit-text-stroke:0.3px_#22d3ee] font-bold text-4xl ms-2">
                &#125;
              </span>
          </picture>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMobileMenu}
            className="hamburger flex flex-col space-y-0.5 px-2 py-2.5 border-1 border-violet-500 order-1 sm:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`line bg-violet-500 w-5 h-0.5 transition-all ${isMobileMenuOpen ? "-rotate-45" : ""}`}></span>
            <span className={`line bg-violet-500 w-5 h-0.5 transition-all ${isMobileMenuOpen ? "hidden" : ""}`}></span>
            <span className={`line bg-violet-500 w-5 h-0.5 transition-all ${isMobileMenuOpen ? "rotate-45" : ""}`}></span>
          </button>

          {/* Nav-menu */}
          <ul
            className={`flex gap-x-5 order-2 absolute top-full left-0 flex-col bg-violet-200 dark:bg-neutral-950 w-full sm:w-auto border-t-1 border-violet-400 dark:border-neutral-800 -translate-x-full sm:translate-0 ${
              isMobileMenuOpen ? "translate-x-0" : ""
            } transition-all  sm:pb-0 sm:border-0 sm:relative sm:flex-row sm:justify-center`}
          >
            {/* Home */}
            <li className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 hover:bg-violet-300 dark:hover:bg-violet-400 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="py-3 block font-bold sm:font-semibold sm:before:content=[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer"
              >
                Home
              </Link>
            </li>
            {/* About Me */}
            <li className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 hover:bg-violet-300 dark:hover:bg-violet-400 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
              <Link
                to="aboutme"
                smooth={true}
                duration={500}
                className="py-3 block font-bold sm:font-semibold sm:before:content=[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer"
              >
                About Me
              </Link>
            </li>
            {/* Services */}
            <li className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 hover:bg-violet-300 dark:hover:bg-violet-400 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="py-3 block font-bold sm:font-semibold sm:before:content=[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer"
              >
                Services
              </Link>
            </li>
            {/* Projects */}
            <li className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 hover:bg-violet-300 dark:hover:bg-violet-400 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="py-3 block font-bold sm:font-semibold sm:before:content=[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer"
              >
                Projects
              </Link>
            </li>
            {/* Contact Me */}
            <li className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 hover:bg-violet-300 dark:hover:bg-violet-400 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
              <Link
                to="contactMe"
                smooth={true}
                duration={500}
                className="py-3 block font-bold sm:font-semibold sm:before:content=[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
            
          </ul>

          {/* toogle light/dark Mode */}
          <div
            className="flex rounded-full space-x-1 bg-violet-400 px-2 py-1 relative order-3"
            aria-label="User menu"
            onClick={ToggleThemeChange}
          >
            <span
              className={`absolute top-0 ${
                isLightDark ? "left-0" : "right-0"
              } bottom-0 rounded-full bg-violet-950 w-1/2 m-0`}
            ></span>
            <IoSunny className="text-violet-50 text-xl" />
            <IoIosMoon className="text-violet-50 text-xl" />
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
