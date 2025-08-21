import React from 'react'
import PageHeader from '../components/Header/PageHeader';
import AB from '../assets/AB.jpg'
import { SlCloudDownload } from "react-icons/sl";

// CV
import CV from "../assets/CV.pdf";

// Skill Images 
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
import Tailwindcss from "../assets/Tailwindcss.svg";
import jquery from "../assets/jquery.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import MySQL from "../assets/MySQL.svg";
import react from "../assets/react.svg";
import php from "../assets/php.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";


const AboutMePage = () => {
    const skills = [
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
            alt: "React Js",
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


    return (
        <>
            <PageHeader />
            <div className="container mx-auto px-3 pt-25 lg:px-14">
                <div className="aboutme">

                    {/* About Me */}
                    <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                        About Me
                    </h2>

                    <div className=" my-8 ">
                        {/* Text Section */}
                        <div className="detail p-6 bg-violet-50 dark:bg-neutral-900 rounded-md">
                            {/* Image & CV */}
                            <div className='relative flex flex-col justify-center items-center gap-5 sm:float-right w-full sm:w-60 h-full sm:ml-4 mb-3 z-10'>

                                <img src={AB} alt="image" data-aos="fade-left" data-aos-delay="600" className='rounded-full w-60 h-60 sm:w-auto sm:h-auto object-cover' />
                                <a
                                    href={CV}
                                    data-aos="fade-left" data-aos-delay="800"
                                    className="rounded bg-violet-500 hover:bg-violet-400 hover:border-violet-600 border-2 border-violet-500 text-violet-50 hover:text-violet-900 transition-all dark:border-violet-50 dark:text-violet-900 dark:bg-violet-50 px-1 sm:px-3 py-2 w-50 text-sm flex items-center justify-center font-semibold"
                                    download="Sheikh-Abdul-Basit.pdf"
                                ><SlCloudDownload className="text-xl me-3" />

                                    Download CV
                                </a>
                            </div>
                            <p data-aos="fade-right" data-aos-delay="600" className='-z-10 pe-5 leading-8 text-neutral-900 dark:text-violet-200'>
                                I am a passionate and dedicated developer with a strong foundation in Computer Science, having recently completed my graduation. My journey in the world of development began in 2023 when I started from scratch, learning the basics of HTML, CSS, and JavaScript. With consistent practice and curiosity, I gradually built my skills and moved from creating simple static pages to designing more interactive and dynamic web applications. Along the way, I also worked with WordPress and PHP, which helped me understand content management systems, client requirements, and how to deliver functional websites with efficient workflows.
                                <br />

                                As my interest in modern web technologies grew, I transitioned into the MERN stack, where I have been working for the past 10 months. During this time, I have developed full-featured applications using MongoDB, Express.js, React.js, and Node.js, gaining hands-on experience in building scalable and responsive solutions. My focus lies in writing clean, maintainable code and crafting user-friendly interfaces that enhance the overall digital experience.
                                <br />

                                With every project, I strive to learn, adapt, and grow as a developer. My ultimate goal is to deliver impactful solutions while continuously improving my skills as a full-stack developer.
                            </p>

                        </div>
                    </div>



                    {/* Skills */}
                    <div className="skills">
                        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                            Skills
                        </h2>

                        <div className="front-end-social-icons grid grid-cols-4 md:grid-cols-3 gap-5 place-items-center my-5">
                            {skills.map((item, index) => {
                                return (
                                    <div data-aos="zoom-in" data-aos-delay="300" key={index} className="relative group w-max">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-14 sm:w-20 grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3"
                                        />
                                        <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-violet-500 dark:bg-violet-50 text-violet-50 dark:text-violet-500 text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">
                                            {item.alt}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default AboutMePage
