import Navbar from './components/Navbar'
import MainPage from './components/Main Page/MainPage'
import Footer from './components/Footer'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import ParticlesHeroSecBg from './components/BackgroundParticles/ParticlesHeroSecBg';

function App() {
  // Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Navbar/>
    <MainPage/>
    <Footer/>
    
    
      
    </>
  )
}

export default App
