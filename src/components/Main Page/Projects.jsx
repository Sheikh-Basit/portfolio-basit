import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

/* Images (import manually or dynamically) */
import img1 from "../../assets/Projects/img1.png";
import img2 from "../../assets/Projects/img2.png";
import img3 from "../../assets/Projects/img3.jpg";
// import img3 from "../../assets/img/proyecto-app-17.png";
import img4 from "../../assets/img/proyecto-7.jpg";
import img5 from "../../assets/img/proyecto-6.jpg";
import img6 from "../../assets/img/proyecto-12.jpg";
import img7 from "../../assets/img/proyecto-5.jpg";
import img8 from "../../assets/img/proyecto-8.jpg";
import img9 from "../../assets/img/proyecto-10.jpg";
import img10 from "../../assets/img/proyecto-9.jpg";
import img11 from "../../assets/img/proyecto-11.jpg";

/* Icons */
import { FaCircleArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section id="projects">
      <div className="container mx-auto px-3 pt-14 lg:px-14">
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-4xl sm:text-5xl text-violet-950 dark:text-violet-50 font-bold mb-8">
          Projects
        </h2>

        <Swiper
          data-aos="flip-right" data-aos-delay="600"
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}

          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // onSlideChange={() => console.log("slide change")}

          className="mySwiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i} className={`transition-all duration-500 ${activeIndex === i ? "opacity-100" : "opacity-50"}`}>
              <img src={p.img} alt={p.title} className={`transition-all duration-300 ${activeIndex === i ? "scale-100" : "scale-75"}`} />
              
                <div className={`content text-center my-4 mb-14 transition-all duration-300 ${activeIndex === i ? "scale-100" : "scale-0"}`}>
                  <h3 className="text-violet-500 dark:text-violet-400 text-3xl font-bold mb-3">
                    {p.title}
                  </h3>
                  <p className="text-neutral-900 dark:text-violet-200 mb-3">{p.desc}</p>
                  <p className="text-neutral-900 dark:text-violet-200 mb-3">{p.tech}</p>
                  <div className="flex items-center justify-center gap-x-2">
                    <a
                      href={p.demo}
                      className="bg-violet-500 font-bold border-2 border-violet-500 text-violet-50 rounded px-3 py-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Demo</span>
                    </a>
                    <a
                      href={p.repo}
                      className="border-2 border-neutral-900 dark:border-violet-50 px-3 py-1 rounded text-neutral-900 dark:text-violet-50 font-bold hover:bg-neutral-900 dark:hover:bg-violet-50 hover:text-violet-50 dark:hover:text-neutral-900 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </a>
                  </div>
                </div>
            </SwiperSlide>
          ))}
          <div />
        </Swiper>
        <div className="text-center flex justify-center items-center mt-5">
          <NavLink to="/projects" className="Read-more" data-aos="fade-up" data-aos-delay="600">
                Read More
                <FaCircleArrowRight className="text-xl ms-5" />
              </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Projects;
