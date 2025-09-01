import { useState } from "react";

import { Link } from "react-scroll";

import logo from "../../assets/logo.png";
import ThemeChange from "./ThemeChange";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-violet-200 dark:bg-neutral-950 shadow fixed w-full z-100">
      <div className="container mx-auto flex justify-between items-center p-3 lg:px-14">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="order-2 sm:order-1 cursor-pointer"
        >
          <picture className="logo flex items-center justify-center">
            <span className="text-transparent [-webkit-text-stroke:1px_#2f0d68] dark:[-webkit-text-stroke:1px_#a684ff] font-bold text-4xl me-2">
              &#123;
            </span>
            <img src={logo} width={50} alt="AB" />
            <span className="text-transparent [-webkit-text-stroke:1px_#2f0d68] dark:[-webkit-text-stroke:1px_#a684ff] font-bold text-4xl ms-2">
              &#125;
            </span>
          </picture>
        </Link>
        

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="hamburger flex flex-col space-y-0.5 px-2 py-2.5 border-1 border-violet-500 order-1 sm:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition ${
              isMobileMenuOpen ? "-rotate-45" : ""
            }`}
          ></span>
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`line bg-violet-500 w-5 h-0.5 transition ${
              isMobileMenuOpen ? "rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Nav-menu */}

        <nav className={`flex gap-x-5 order-2 absolute top-full left-0 flex-col -translate-x-full ${ isMobileMenuOpen ? "translate-x-0 bg-violet-200 dark:bg-neutral-950 w-full border-t-1 border-violet-400 dark:border-neutral-800 transition" : "" } sm:translate-0 sm:w-auto bord sm:pb-0 sm:border-0 sm:relative sm:flex-row sm:justify-center`}>

          {/* Home */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
            className="relative text-violet-950 dark:text-violet-400 px-3 sm:px-0 py-3 hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent block font-bold sm:font-semibold cursor-pointer sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full"
          >
            Home
          </Link>

          {/* About Me */}
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active-link"
            className="relative text-violet-950 dark:text-violet-400 px-3 hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:px-0 py-3 block font-bold sm:font-semibold cursor-pointer sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full"
          >
            About Me
          </Link>

          {/* Services */}
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active-link"
            className="relative text-violet-950 dark:text-violet-400 px-3 hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:px-0 py-3 block font-bold sm:font-semibold cursor-pointer sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full"
          >
            Services
          </Link>

          {/* Projects */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active-link"
            className="relative text-violet-950 dark:text-violet-400 px-3 hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:px-0 py-3 block font-bold sm:font-semibold cursor-pointer sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full"
          >
            Projects
          </Link>

          {/* Contact Me */}
          <Link
            to="contactMe"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            
            activeClass="active-link"
            className="relative text-violet-950 dark:text-violet-400 px-3 hover:bg-violet-300 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent sm:px-0 py-3 block font-bold sm:font-semibold cursor-pointer sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:bg-violet-950 sm:dark:before:bg-violet-500 sm:before:w-0 sm:before:h-0.5 sm:before:transition-all sm:before:duration-300 sm:hover:before:w-full"
          >
            Contact Me
          </Link>
        </nav>

        {/* toogle light/dark Mode */}
        <div className="order-3">
          <ThemeChange />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
