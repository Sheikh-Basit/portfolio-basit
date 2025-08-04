import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import ParticleBackground from '../BackgroundParticles/ParticleBackground'
import Services from './Services'


const MainPage = () => {
  return (
    <div>
        <div className="fixed w-full h-screen -z-10">
            <ParticleBackground />
        </div>
      <HeroSection/>
      <div className="main relative w-full h-full">
        <AboutMe/>
        <Services/>
        <Projects/>
        <ContactMe/>
      </div>
    </div>
  )
}

export default MainPage

