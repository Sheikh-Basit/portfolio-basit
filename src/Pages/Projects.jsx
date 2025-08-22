import React from 'react'
import PageHeader from '../components/Header/PageHeader';

/* Images (import manually or dynamically) */

import img1 from "../assets/Projects/img1.png";
import img2 from "../assets/Projects/img2.png";
import img3 from "../assets/Projects/img3.jpg";
import img4 from "../assets/img/proyecto-7.jpg";
import img6 from "../assets/img/proyecto-12.jpg";
import img8 from "../assets/img/proyecto-8.jpg";
import img9 from "../assets/img/proyecto-10.jpg";
import img10 from "../assets/img/proyecto-9.jpg";
import img11 from "../assets/img/proyecto-11.jpg";

const Projects = () => {
    const projects = [
        {
          img: img1,
          title: "Digital-Resume",
          desc: "Portfolio Template",
          tech: "HTML5 - CSS - JAVASCRIPT",
          demo: "https://simpleeportfolio.netlify.app/",
          repo: "https://github.com/Sheikh-Basit/Digital-Resume-main",
        },
        {
          img: img2,
          title: "Megaone Acrothemes",
          desc: "Digital Agency",
          tech: "HTML5 - CSS - JAVASCRIPT",
          demo: "https://megaone-acrothemes.netlify.app/",
          repo: "https://github.com/Sheikh-Basit/Website---Megaone-Acrothemes",
        },
        {
          img: img3,
          title: "Justice",
          desc: "Lawyers website",
          tech: "HTML5 - CSS - JavaScript - jQuery - Bootstrap",
          demo: "https://nahuel61920.github.io/Justice/",
          repo: "https://github.com/Nahuel61920/Justice",
        },
        {
          img: img4,
          title: "Power Engine",
          desc: "Automobiles Website",
          tech: "HTML5 - CSS - JavaScript",
          demo: "https://nahuel61920.github.io/Power-Engine/",
          repo: "https://github.com/Nahuel61920/Power-Engine",
        },
        {
          img: img6,
          title: "EveryRunning",
          desc: "Website shoes",
          tech: "HTML5 - CSS - JavaScript - Bootstrap",
          demo: "https://nahuel61920.github.io/EveryRunning/",
          repo: "https://github.com/Nahuel61920/EveryRunning",
        },
        {
          img: img8,
          title: "ShopTec",
          desc: "Ecommerce",
          tech: "HTML5 - CSS - Sass - JavaScript",
          demo: "https://nahuel61920.github.io/shop-tec/",
          repo: "https://github.com/Nahuel61920/shop-tec",
        },
        {
          img: img9,
          title: "Elegant Hand",
          desc: "Watch Shop",
          tech: "HTML5 - CSS - JavaScript",
          demo: "https://nahuel61920.github.io/ElegantHand/",
          repo: "https://github.com/Nahuel61920/ElegantHand",
        },
        {
          img: img10,
          title: "Vida en papel",
          desc: "Bookstore",
          tech: "HTML5 - CSS - JavaScript",
          demo: "https://nahuel61920.github.io/vida-en-papel/",
          repo: "https://github.com/Nahuel61920/vida-en-papel",
        },
        {
          img: img11,
          title: "Plus Anime",
          desc: "Anime website",
          tech: "HTML5 - CSS - JavaScript",
          demo: "https://nahuel61920.github.io/PlusAnime/",
          repo: "https://github.com/Nahuel61920/PlusAnime",
        },
      ];
  return (
    <>
            <PageHeader />
            <div className="container mx-auto px-3 pt-25 lg:px-14">
                <div className="projects">

                    <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold">
                        Projects
                    </h2>

                    {/* Projects */}

                    <div className="grid sm:grid-cols-2 gap-5 items-stretch place-items-center my-8 ">
                    {projects.map((project, index) => {
                        return (
                            <div key={index} data-aos="zoom-in" data-aos-delay="600" className="text-center group bg-white dark:bg-neutral-900 shadow-xl rounded hover:bg-violet-200 dark:hover:bg-neutral-900 dark:border-b-10 dark:hover:border-b-violet-400 dark:border-b-neutral-900 dark:inset-shadow-sm dark:hover:inset-shadow-violet-400">
                                <img src={project.img} alt={project.title} />
                                <h3 className="text-xl text-violet-500 dark:text-violet-400 group-hover:text-violet-950 dark:group-hover:text-violet-50 font-bold mb-5">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-900 dark:text-neutral-400 group-hover:text-violet-500 dark:group-hover:text-violet-200 mb-6 leading-8">
                                    {project.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                </div>

            </div>
        </>
  )
}

export default Projects
