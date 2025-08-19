import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe/ContactMe";
import ParticleBackground from "../BackgroundParticles/ParticleBackground";
import Services from "./Services";

const MainPage = () => {
  return (
    <>
      <div className="fixed w-full h-screen -z-10">
        <ParticleBackground />
      </div>
      <HeroSection />
      <div className="main relative w-full h-full overflow-hidden">
        <AboutMe />
        <Services />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default MainPage;
