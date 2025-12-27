import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe/ContactMe";
import Services from "./Services";
import Navbar from "../Header/Navbar";
import EducationAndExperince from "./Education & Experience/EducationAndExperience";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="main relative w-full h-full overflow-hidden">
        <AboutMe />
        <EducationAndExperince />
        <Services />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default MainPage;
