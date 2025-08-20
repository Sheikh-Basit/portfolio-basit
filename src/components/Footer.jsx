import React from "react";
// Social Icons
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 dark:text-white border-t border-gray-200 dark:border-0">
      <div className="container mx-auto flex sm:flex-row flex-col space-y-8 sm:space-y-0 justify-between items-center py-8 p-3 lg:px-14">
        <div className="copyright text-center sm:text-left">
          <p>Page Created by Sheikh Abdul Basit</p>
          <p>&copy; 2025 All Rights Reserved</p>
        </div>
        <div className="footer-icons flex items-center justify-center gap-x-6 text-2xl me-8">
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sheikh-abdul-basit-82b594302/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Sheikh-Basit" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* fixed buttons */}

      <div className="z-10 fixed bottom-7 right-5">
          {/* Scroll to top */}
          <ScrollToTop/>

          {/* Whatsapp icon */}
          <a
            href="https://wa.me/+923135739864"
            target="_blank"
            className="cursor-pointer rounded-full w-12 h-12 bg-green-400 text-violet-50 flex justify-center items-center text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
