/* Images (import manually or dynamically) */

import img1 from "../../assets/Projects/img1.png";
import img2 from "../../assets/Projects/img2.png";
import img3 from "../../assets/Projects/img3.png";
import img4 from "../../assets/Projects/img4.png";


// Skill Images 
import html5 from "../../assets/Skills/html5.svg";
import css3 from "../../assets/Skills/css3.svg";
import bootstrap from "../../assets/Skills/bootstrap.svg";
import Tailwindcss from "../../assets/Skills/Tailwindcss.svg";
import javascript from "../../assets/Skills/javascript.svg";
import react from "../../assets/Skills/react.svg";
import redux from "../../assets/Skills/redux.png";


const projects = [
    {
      img: img1,
      title: "Digital-Resume",
      desc: "A simple digital resume template created in 2023 using HTML, CSS, and JavaScript. It features demo text and images, designed for practice, learning, and showcasing a responsive layout.",
      projectType: "Portfolio Template",
      tech: "HTML5 - CSS - JAVASCRIPT",
      demo: "https://simpleeportfolio.netlify.app/",
      repo: "https://github.com/Sheikh-Basit/Digital-Resume-main",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
      ]
    },
    {
      img: img2,
      title: "Megaone Acrothemes",
      desc: "A single-page MegaOne Acrothemes replica built in 2023 using HTML5, CSS, and vanilla JavaScript, featuring smooth animations, transitions, sliders, and a portfolio filter for interactive design practice.",
      projectType: "Digital Agency",
      tech: "HTML5 - CSS - JAVASCRIPT",
      demo: "https://megaone-acrothemes.netlify.app/",
      repo: "https://github.com/Sheikh-Basit/Website---Megaone-Acrothemes",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
      ]
    },
    {
      img: img3,
      title: "Shopy",
      desc: "🚀 Shopy is a modern eCommerce website built with React, Vite, Redux Toolkit, and Fake API. It allows users to browse products, view details, manage their cart, and place orders with a clean and responsive UI.",
      projectType: "Ecommerce website",
      tech: "React - Tailwindcss - Redux Toolkit - API",
      demo: "https://sheikh-basit.github.io/Shopy-Ecommerce",
      repo: "https://github.com/Sheikh-Basit/Shopy-Ecommerce",
      techImages: [
        { name: "React", img: react, },
        { name: "Tailwind", img: Tailwindcss },
        { name: "Redux", img: redux },
      ]
    },
    {
      img: img4,
      title: "Consultant",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "HTML Template",
      tech: "HTML5 - CSS - JavaScript -Bootstrap",
      demo: "https://sheikh-basit.github.io/Consultancy-Website-Template/",
      repo: "https://github.com/Sheikh-Basit/Consultancy-Website-Template",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
        { name: "Bootstrap", img: bootstrap },
      ]
    },
    // Delete this when add more project
    {
      img: img1,
      title: "Digital-Resume",
      desc: "A simple digital resume template created in 2023 using HTML, CSS, and JavaScript. It features demo text and images, designed for practice, learning, and showcasing a responsive layout.",
      projectType: "Portfolio Template",
      tech: "HTML5 - CSS - JAVASCRIPT",
      demo: "https://simpleeportfolio.netlify.app/",
      repo: "https://github.com/Sheikh-Basit/Digital-Resume-main",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
      ]
    },
    
  ];

  export default projects