import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ParticlesHeroSecBg from '../../../components/BackgroundParticles/ParticlesHeroSecBg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className=' w-full h-screen relative border border-amber-500'>
          {/* Background Particles */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <ParticlesHeroSecBg/>
          </div>
    
          <div className="container mx-auto p-3 px-14 pt-50 flex flex-col items-center">
            <p data-aos="fade-up" className="text-4xl text-white font-bold">Hello</p>
            <h1 data-aos="fade-up" className='text-5xl text-cyan-500 font-bold uppercase my-2'>I am Abdul Basit</h1>
            <p data-aos="fade-up" className="text-4xl text-white font-bold">Full Stack Developer</p>
    
            {/* Social Icons */}
            <div className="flex space-x-5 mt-3">
              {/* LinkedIN icon */}
              <a href="https://www.linkedin.com/in/sheikh-abdul-basit-82b594302/" target='_blank' data-aos="fade-up" className="group">
                <div className="icon flex items-center p-2 rounded-full bg-cyan-500 transition-all duration-500">
                  <span className='border border-neutral-800 rounded-full p-1'>
                    <FaLinkedinIn />
                  </span>
                  <span className='opacity-0 max-w-0 overflow-hidden group-hover:ms-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-black'>
                    LinkedIn
                  </span>
                </div>
              </a>
    
               {/* Github icon */}
              <a href="https://github.com/Sheikh-Basit" target='_blank' data-aos="fade-up" className="group">
                <div className="icon flex items-center p-2 rounded-full bg-cyan-500 transition-all duration-500">
                  <span className='border border-neutral-800 rounded-full p-1'>
                    <TbBrandGithubFilled />
                  </span>
                  <span className='opacity-0 max-w-0 overflow-hidden group-hover:ms-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-black'>
                    Github
                  </span>
                </div>
              </a>
    
              {/* Facebook icon */}
              <a href="https://www.facebook.com/profile.php?id=61578323800693" target='_blank' data-aos="fade-up" className="group">
                <div className="icon flex items-center p-2 rounded-full bg-cyan-500 transition-all duration-500">
                  <span className='border border-neutral-800 rounded-full p-1'>
                    <FaFacebookF />
                  </span>
                  <span className='opacity-0 max-w-0 overflow-hidden group-hover:ms-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-black'>
                    Facebook
                  </span>
                </div>
              </a>
    
              {/* Whatsapp icon */}
              <a href="https://wa.me/+923135739864" target='_blank' data-aos="fade-up" className="group">
                <div className="icon flex items-center p-2 rounded-full bg-cyan-500 transition-all duration-500">
                    <FaWhatsapp className='text-2xl'/>
                  {/* <span className='border border-neutral-800 rounded-full p-1'>
                  </span> */}
                  <span className='opacity-0 max-w-0 overflow-hidden group-hover:ms-2 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-black'>
                    Whatsapp
                  </span>
                </div>
              </a>
    
            </div>
          </div>

          {/* Scroll Down Button */}
          <a href="#AboutMe">
          <div className="scroll-down absolute bottom-5 left-1/2 -translate-x-1/2 w-8 h-13 border-2 border-white rounded-4xl cursor-pointer">
          </div>
          </a>
    
        </section>
  )
}

export default HeroSection
