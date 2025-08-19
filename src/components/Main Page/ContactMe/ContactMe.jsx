import React from "react";
import './ContactMe.css'
import { TypeAnimation } from "react-type-animation";

// Social Icons
import { FaEnvelope, FaWhatsapp, FaGithub, FaInstagram, FaTelegram, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  const socialIcons =[
    {
      icon:FaEnvelope,
      href:"mailto:shabdulbasit64@gmail.com",
      name:"Gmail",
      delay:"600" //it's just for animation, not a part of content
    },
    {
      icon:FaWhatsapp,
      href:"https://wa.me/+923135739864",
      name:"Whatsapp",
      delay:"800" //it's just for animation, not a part of content
    },
    {
      icon:FaInstagram,
      href:"https://www.instagram.com/sheikhabdul975/",
      name:"Instagram",
      delay:"1000" //it's just for animation, not a part of content
    },
    {
      icon:FaTelegram,
      href:"https://t.me/SheikhAbdulBasit01",
      name:"Telegram",
      delay:"1200" //it's just for animation, not a part of content
    },
    {
      icon:FaLinkedinIn,
      href:"https://www.linkedin.com/in/sheikh-abdul-basit-82b594302/",
      name:"LinkedIn",
      delay:"1400" //it's just for animation, not a part of content
    },
    {
      icon:FaGithub,
      href:"https://github.com/Sheikh-Basit",
      name:"Github",
      delay:"1600" //it's just for animation, not a part of content
    },
  ]
  return (
    <section id="contactMe">
      <div className="container mx-auto px-3 pt-14 lg:px-14">
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-neutral-900 dark:text-white font-bold mb-8">
          Contact Me
        </h2>
        <h3 data-aos="fade-left" data-aos-delay="600" className="text-gray-700 dark:text-white text-2xl text-center sm:text-left">
          Contact me by: 
          <TypeAnimation
            sequence={[
              "Gmail", 1500,
              "WhatsApp", 1500,
              "Instagram", 1500,
              "Telegram", 1500,
              "Linkedin", 1500,
              "Github", 1500,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            className="text-black dark:text-cyan-400 ms-2"

          />
        </h3>

        <div className="icons flex flex-wrap justify-center my-10 mx-0">
          {/* Gmail */}
          {socialIcons.map((icons, index)=>{
            return (

              <a href={icons.href} key={index} target="_blank" rel={icons.name} data-aos="fade-up" data-aos-delay={icons.delay} className="group text-white block relative mx-5 my-8 sm:my-12 sm:mx-8 dark:last:[&_.layer_span]:!border-white dark:last:[&_.layer_span]:!text-white dark:last:[&_.name]:!text-white">

            <div className="layer relative w-16 h-16 transform duration-300 group-hover:rotate-[-35deg] group-hover:skew-x-[20deg]">
              <span className="absolute top-0 left-0 h-full w-full border-2 border-white rounded-md transition duration-300 group-hover:opacity-20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 last:dark:text-while "></span>
              <span className="absolute top-0 left-0 h-full w-full border-2 border-white rounded-md transition duration-300 group-hover:opacity-40 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 last:dark:text-while"></span>
              <span className="absolute top-0 left-0 h-full w-full border-2 border-white rounded-md transition duration-300 group-hover:opacity-60 group-hover:translate-x-2.5 group-hover:-translate-y-2.5 last:dark:text-while"></span>
              <span className="absolute top-0 left-0 h-full w-full border-2 border-white rounded-md transition duration-300 group-hover:opacity-80 group-hover:translate-x-3.5 group-hover:-translate-y-3.5 last:dark:text-while"></span>
              <span className="fab absolute top-0 left-0 h-full w-full border-2 border-white rounded-md transition duration-300 flex items-center justify-center text-4xl group-hover:translate-x-4.5 group-hover:-translate-y-4.5 last:dark:text-while last:dark:border-white"><icons.icon /></span>
            </div>
            <div className="name absolute left-1/2 -bottom-1.5 opacity-0 text-xl font-semibold -translate-x-1/2 transition-all duration-300 group-hover:-bottom-11 group-hover:opacity-100">
              {icons.name}
            </div>
          </a>
          )
          })}
        </div>

      </div>


    </section>
  );
};

export default ContactMe;
