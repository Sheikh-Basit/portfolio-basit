import React from 'react'
import { SlCloudDownload } from "react-icons/sl";

// Images
import html5 from '../../assets/html5.svg'
import css3 from '../../assets/css3.svg'
import bootstrap from '../../assets/bootstrap.svg'
import Tailwindcss from '../../assets/Tailwindcss.svg'
import jquery from '../../assets/jquery.svg'
import javascript from '../../assets/javascript.svg'
import mongodb from '../../assets/mongodb.svg'
import MySQL from '../../assets/MySQL.svg'
import react from '../../assets/react.svg'
import php from '../../assets/php.svg'
import nodejs from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'

const AboutMe = () => {
  return (
    <section id='AboutMe'>
      <div className='container mx-auto p-3 lg:px-14 '>
        <h2 className='text-center text-5xl text-gray-900 dark:text-white mt-12 mb-7 font-bold'>About Me</h2>
        <div className="flex space-x-3">

          {/* My Info */}
          <div className="MyInfo p-4 bg-white shadow-2xl dark:bg-neutral-900 rounded w-1/2">
            <h3 className="text-xl text-gray-400 dark:text-cyan-500 font-bold mb-5">Who I Am</h3>
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">My name is Sheikh Abdul Basit and I am a full stack developer.</h4>
            <p className='text-black dark:text-gray-400 pb-6'>I have been working on web designing and web development for 4 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.</p>
            <ul className='text-black dark:text-gray-400'>
              <li className='pb-6'>
                <strong className='text-gray-900 dark:text-white'>Age: </strong>23
              </li>
              <li className='pb-6'>
                <strong className='text-gray-900 dark:text-white'>Hobbies: </strong>Programming, Cricket and Mobile Games
              </li>
              <li className='pb-6'>
                <strong className='text-gray-900 dark:text-white'>Email: </strong>shabdulbasit64@gmail.com
              </li>
              <li className='pb-6'>
                <strong className='text-gray-900 dark:text-white'>From: </strong>Taxila, Pakistan
              </li>
            </ul>
            <div className="more-info">
              <a href='#' className="border-2 border-black text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-white flex items-center px-3 py-2 my-3 w-1/2"><SlCloudDownload className='text-xl me-3' /> Download CV</a>
              <a href='#' className="border-2 border-black text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-white flex items-center px-3 py-2 my-5 w-1/2"><SlCloudDownload className='text-xl me-3' /> Read More</a>
              
            </div>
          </div>


          {/* My Skills */}
          <div className="MyInfo p-4 bg-white shadow-2xl dark:bg-neutral-900 rounded w-1/2">
            <h3 className="text-xl text-gray-400 dark:text-cyan-500 font-bold mb-5">Skills</h3>
            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">Front-End</h4>
            {/* Front end Icons */}
            <div className="front-end-social-icons grid grid-cols-3 gap-5 items-center justify-center mb-5">
              {/* HTML */}
              <div className="relative group w-max">
              <img src={html5} alt="html5" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">HTML</div>
              </div>
              {/* CSS */}
              <div className="relative group w-max">
              <img src={css3} alt="css3" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">CSS</div>
              </div>
              {/* JavaScript */}
              <div className="relative group w-max">
              <img src={javascript} alt="javascript" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">JavaScript</div>
              </div>
              {/* React */}
              <div className="relative group w-max">
              <img src={react} alt="react" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">React</div>
              </div>
              {/* Bootstrap */}
              <div className="relative group w-max">
              <img src={bootstrap} alt="bootstrap" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">Bootstrap</div>
              </div>
              {/* Tailwind */}
              <div className="relative group w-max">
              <img src={Tailwindcss} alt="Tailwindcss" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">Tailwind Css</div>
              </div>
              {/* jQuery */}
              <div className="relative group w-max">
              <img src={jquery} alt="jquery" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">jQuery</div>
              </div>

            </div>

            <h4 className="text-2xl text-gray-900 dark:text-white font-bold pb-5">Back-End</h4>
            {/* Back end Icons */}
            <div className="back-end-social-icons grid grid-cols-3 gap-5 items-center justify-center mb-5">
              {/* Node js */}
              <div className="relative group w-max">
              <img src={nodejs} alt="nodejs" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">Node js</div>
              </div>
              {/* MongoDB */}
              <div className="relative group w-max">
              <img src={mongodb} alt="mongodb" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">MongoDB</div>
              </div>
              {/* Express js */}
              <div className="relative group w-max">
              <img src={express} alt="expressjs" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">Express js</div>
              </div>
              {/* MySql */}
              <div className="relative group w-max">
              <img src={MySQL} alt="MySQL" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">MySql</div>
              </div>
              {/* php */}
              <div className="relative group w-max">
              <img src={php} alt="php" width={80} className='grayscale-0 dark:hover:grayscale-0 dark:grayscale-100 m-3' />
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-y-3  transition-all duration-500 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow-lg z-10 font-semibold">PHP</div>
              </div>
              
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutMe
