/* Images (import manually or dynamically) */

import img1 from "../../assets/Projects/img1.png";
import img2 from "../../assets/Projects/img2.png";
import img3 from "../../assets/Projects/img3.jpg";
import img4 from "../../assets/img/proyecto-7.jpg";
import img6 from "../../assets/img/proyecto-12.jpg";
import img8 from "../../assets/img/proyecto-8.jpg";
import img9 from "../../assets/img/proyecto-10.jpg";
import img10 from "../../assets/img/proyecto-9.jpg";
import img11 from "../../assets/img/proyecto-11.jpg";

// Skill Images 
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
import ProjectDetailModal from "./ProjectDetailModal";

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
      title: "Justice",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Lawyers website",
      tech: "HTML5 - CSS - JavaScript - jQuery - Bootstrap",
      demo: "https://nahuel61920.github.io/Justice/",
      repo: "https://github.com/Nahuel61920/Justice",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
        { name: "jQuery", img: jquery },
        { name: "Bootstrap", img: bootstrap },
      ]
    },
    {
      img: img4,
      title: "Power Engine",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Automobiles Website",
      tech: "HTML5 - CSS - JavaScript",
      demo: "https://nahuel61920.github.io/Power-Engine/",
      repo: "https://github.com/Nahuel61920/Power-Engine",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
      ]
    },
    {
      img: img6,
      title: "EveryRunning",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Website shoes",
      tech: "HTML5 - CSS - JavaScript - Bootstrap",
      demo: "https://nahuel61920.github.io/EveryRunning/",
      repo: "https://github.com/Nahuel61920/EveryRunning",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScript", img: javascript },
        { name: "bootstrap", img: bootstrap },
      ]
    },
    {
      img: img8,
      title: "ShopTec",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Ecommerce",
      tech: "HTML5 - CSS - Sass - JavaScript",
      demo: "https://nahuel61920.github.io/shop-tec/",
      repo: "https://github.com/Nahuel61920/shop-tec",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScrip", img: javascript },
      ]
    },
    {
      img: img9,
      title: "Elegant Hand",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Watch Shop",
      tech: "HTML5 - CSS - JavaScript",
      demo: "https://nahuel61920.github.io/ElegantHand/",
      repo: "https://github.com/Nahuel61920/ElegantHand",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScrip", img: javascript },
      ]
    },
    {
      img: img10,
      title: "Vida en papel",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Bookstore",
      tech: "HTML5 - CSS - JavaScript",
      demo: "https://nahuel61920.github.io/vida-en-papel/",
      repo: "https://github.com/Nahuel61920/vida-en-papel",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScrip", img: javascript },
      ]
    },
    {
      img: img11,
      title: "Plus Anime",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit expedita! Hic quaerat repellat id delectus autem eveniet officiis aliquid odit sequi quod laborum doloribus suscipit tempore accusantium perferendis, consequuntur sed nihil sit alias dolor.",
      projectType: "Anime website",
      tech: "HTML5 - CSS - JavaScript",
      demo: "https://nahuel61920.github.io/PlusAnime/",
      repo: "https://github.com/Nahuel61920/PlusAnime",
      techImages: [
        { name: "HTML", img: html5, },
        { name: "CSS", img: css3, },
        { name: "JavaScrip", img: javascript },
      ]
    },
  ];

  export default projects