import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// images
import html5 from '../../assets/Skills/html5.svg';
import css3 from '../../assets/Skills/css3.svg';
import javascript from '../../assets/Skills/javascript.svg';
import typescript from '../../assets/Skills/typescript.svg';
import jquery from '../../assets/Skills/jquery.svg';
import bootstrap from '../../assets/Skills/bootstrap.svg';
import Tailwindcss from '../../assets/Skills/Tailwindcss.svg';
import php from '../../assets/Skills/php.svg';
import mongodb from '../../assets/Skills/mongodb.svg';
import nodejs from '../../assets/Skills/nodejs.svg';
import MySQL from '../../assets/Skills/MySQL.svg';
import react from '../../assets/Skills/react.svg';
import redux from '../../assets/Skills/redux.png';


const ParticlesHeroSecBg = () => {
  const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

  return (
    <Particles
            id="tsparticles"
            className="h-full"
            init={particlesInit}
            options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000"
        },
        fullScreen: {
          enable: false
        },
        interactivity: {
          
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 500,
                y: 1000,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            random: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 5,
            },
            direction: "random",
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                sides: 5,
              },
              star: {
                sides: 5,
              },
              images: [
                {
                  src: html5,
                  width: 20,
                  height: 20,
                },
                {
                  src: css3,
                  width: 20,
                  height: 20,
                },
                {
                  src: javascript,
                  width: 20,
                  height: 20,
                },
                {
                  src: typescript,
                  width: 20,
                  height: 20,
                },
                {
                  src: jquery,
                  width: 20,
                  height: 20,
                },
                {
                  src: bootstrap,
                  width: 20,
                  height: 20,
                },
                {
                  src: Tailwindcss,
                  width: 20,
                  height: 20,
                },
                {
                  src: php,
                  width: 20,
                  height: 20,
                },
                {
                  src: mongodb,
                  width: 20,
                  height: 20,
                },
                {
                  src: nodejs,
                  width: 20,
                  height: 20,
                },
                {
                  src: MySQL,
                  width: 20,
                  height: 20,
                },
                {
                  src: react,
                  width: 20,
                  height: 20,
                },
                {
                  src: redux,
                  width: 20,
                  height: 20,
                },
                
              ],
            },
            type: "image",
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: "100px",
            color: {
              value: "#000000",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
              },
            },
          },
        },
      }}
        />
  );
};

export default ParticlesHeroSecBg;
