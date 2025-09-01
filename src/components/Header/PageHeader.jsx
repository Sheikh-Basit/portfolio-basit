import { useState } from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import ThemeChange from "./ThemeChange";

const PageHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-violet-200 dark:bg-neutral-950 shadow fixed w-full z-100">
      <div className="container mx-auto flex justify-between items-center p-3 lg:px-14">
        {/* Logo */}
        <NavLink to="/portfolio-basit" className="order-2 sm:order-1 cursor-pointer">
          <picture className="flex items-center justify-center">
            <span className="text-transparent [-webkit-text-stroke:1px_#2f0d68] dark:[-webkit-text-stroke:1px_#a684ff] font-bold text-4xl me-2">
              &#123;
            </span>
            <img src={logo} width={50} alt="AB" />
            <span className="text-transparent [-webkit-text-stroke:1px_#2f0d68] dark:[-webkit-text-stroke:1px_#a684ff] font-bold text-4xl ms-2">
              &#125;
            </span>
          </picture>
        </NavLink>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="hamburger flex flex-col space-y-0.5 px-2 py-2.5 border-1 border-violet-500 order-1 sm:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition-all ${
              isMobileMenuOpen ? "-rotate-45" : ""
            }`}
          ></span>
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition-all ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition-all ${
              isMobileMenuOpen ? "rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Nav-menu */}
        <nav
          className={`flex gap-x-5 order-2 absolute top-full left-0 flex-col -translate-x-full ${
            isMobileMenuOpen
              ? "translate-x-0 bg-violet-200 dark:bg-neutral-950 w-full border-t border-violet-400 dark:border-neutral-800 transition"
              : ""
          } sm:translate-x-0 sm:w-auto sm:pb-0 sm:border-0 sm:relative sm:flex-row sm:justify-center`}
        >
          {/* Home */}
          <NavLink
            to="/portfolio-basit"
            className={({ isActive }) =>
              `relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 py-3 block font-bold sm:font-semibold sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent ${isActive ? "sm:before:w-full" : ""}`
            }
          >
            Home
          </NavLink>

          {/* About Me */}
          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              `relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 py-3 block font-bold sm:font-semibold sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent ${isActive ? "sm:before:w-full" : ""}`
            }
          >
            About Me
          </NavLink>

          {/* Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 py-3 block font-bold sm:font-semibold sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent ${isActive ? "sm:before:w-full" : ""}`
            }
          >
            Services
          </NavLink>

          {/* Projects */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 py-3 block font-bold sm:font-semibold sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full cursor-pointer hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent ${isActive ? "sm:before:w-full" : ""}`
            }
          >
            Projects
          </NavLink>
        </nav>

        {/* toogle light/dark Mode */}

        <ThemeChange />
      </div>
    </header>
  );
};

export default PageHeader;
