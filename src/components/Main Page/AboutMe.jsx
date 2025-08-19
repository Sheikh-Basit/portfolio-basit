import React from "react";
import { SlCloudDownload } from "react-icons/sl";
import { FaCircleArrowRight } from "react-icons/fa6";
import download from "../../assets/download.gif";

// CV
import CV from "../../assets/CV.pdf";

// Images
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";
import bootstrap from "../../assets/bootstrap.svg";
import Tailwindcss from "../../assets/Tailwindcss.svg";
import jquery from "../../assets/jquery.svg";
import javascript from "../../assets/javascript.svg";
import mongodb from "../../assets/mongodb.svg";
import MySQL from "../../assets/MySQL.svg";
import react from "../../assets/react.svg";
import php from "../../assets/php.svg";
import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import figma from "../../assets/figma.svg";
import git from "../../assets/git.svg";
import photoshop from "../../assets/photoshop.png";
import vsCode from "../../assets/vsCode.png";

const AboutMe = () => {
  const d = new Date();
  let year = d.getFullYear();
  const frontend = [
    {
      src: html5,
      alt: "HTML",
    },
    {
      src: css3,
      alt: "CSS",
    },
    {
      src: javascript,
      alt: "JavaScript",
    },
    {
      src: react,
      alt: "React",
    },
    {
      src: bootstrap,
      alt: "Bootstrap",
    },
    {
      src: Tailwindcss,
      alt: "Tailwind Css",
    },
    {
      src: jquery,
      alt: "jQuery",
    },
  ];

  const backend = [
    {
      src: nodejs,
      alt: "Node Js",
    },
    {
      src: mongodb,
      alt: "MOngoDB",
    },
    {
      src: express,
      alt: "Express Js",
    },
    {
      src: MySQL,
      alt: "MySQL",
    },
    {
      src: php,
      alt: "PHP",
    },
  ];

  const tools = [
    {
      src: figma,
      alt: "Figma",
    },
    {
      src: photoshop,
      alt: "Photoshop",
    },
    {
      src: git,
      alt: "Git",
    },
    {
      src: vsCode,
      alt: "Vs Code",
    },
  ];
  return (
    <section id="aboutme">
      <div className="container mx-auto px-3 pt-14 lg:px-14 ">
        <h2 className="text-center text-4xl sm:text-5xl text-gray-900 dark:text-white font-bold">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mt-12">
          {/* My Info */}
          <div className="MyInfo p-4 bg-white shadow-2xl dark:bg-neutral-900 rounded w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl text-gray-400 dark:text-cyan-400 font-bold mb-5">
              Who I Am
            </h3>
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">
              My name is Sheikh Abdul Basit and I am a full stack developer.
            </h4>
            <p className="text-black dark:text-gray-400 mb-6 leading-8">
              I have been working on web designing and web development for 4
              years. Constantly updating the technologies I already master, but
              also looking to learn new technologies to enrich my skills and
              improve my good practices as a developer.
            </p>
            <ul className="text-black dark:text-gray-400">
              <li className="pb-6">
                <strong className="text-gray-900 dark:text-white">Age: </strong>{year-2002}
              </li>
              <li className="pb-6">
                <strong className="text-gray-900 dark:text-white">
                  Hobbies:{" "}
                </strong>
                Programming, Cricket and Mobile Games
              </li>
              <li className="pb-6">
                <strong className="text-gray-900 dark:text-white">
                  Email:{" "}
                </strong>
                shabdulbasit64@gmail.com
              </li>
              <li className="pb-6">
                <strong className="text-gray-900 dark:text-white">
                  From:{" "}
                </strong>
                Taxila, Pakistan
              </li>
            </ul>
            <div className="more-info flex justify-center items-center md:items-start md:flex-col gap-x-2 md:gap-y-3 mb-2">
              <a
                href={CV}
                className="rounded bg-black border-2 border-black text-white dark:border-white dark:text-black dark:bg-white p-1 sm:px-3 w-50 text-sm flex items-center justify-center"
                download="Sheikh-Abdul-Basit.pdf"
              >
                <img
                  src={download}
                  width={30}
                  alt="download"
                  className="me-2 sm:me-3"
                />{" "}
                Download CV
              </a>

              <a href="#" className="animated-btn">
                Read More
                <FaCircleArrowRight className="text-xl ms-5" />
              </a>
            </div>
          </div>

          {/* My Skills */}
          <div className="MyInfo p-4 bg-white shadow-2xl dark:bg-neutral-900 rounded w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl text-gray-400 dark:text-cyan-400 font-bold mb-5">
              Skills
            </h3>

            {/* Front End */}
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">
              Front-End
            </h4>
            {/* Front end Icons */}
            <div className="front-end-social-icons grid grid-cols-4 md:grid-cols-3 gap-5 place-items-center mb-5">
              {frontend.map((item, index) => {
                return (
                  <div key={index} className="relative group w-max">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-14 sm:w-20 grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3"
                    />
                    <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">
                      {item.alt}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back End */}
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">
              Back-End
            </h4>
            {/* Back end Icons */}
            <div className="back-end-social-icons grid grid-cols-4 md:grid-cols-3 gap-5 place-items-center mb-5">
              {backend.map((item, index) => {
                return (
                  <div key={index} className="relative group w-max">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-14 sm:w-20 grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3"
                    />
                    <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">
                      {item.alt}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools */}
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">
              Tools
            </h4>
            {/* Tools Icons */}
            <div className="back-end-social-icons grid grid-cols-4 md:grid-cols-3 gap-5 place-items-center mb-5">
              {tools.map((item, index) => {
                return (
                  <div key={index} className="relative group w-max">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-14 sm:w-20 grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3"
                    />
                    <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">
                      {item.alt}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
