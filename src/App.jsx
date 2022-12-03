import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";
import "./profileColumn.js";
import Card from "./Card.js";
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiFlask, SiMongodb, SiFirebase, SiCplusplus, SiDjango } from "react-icons/si";
import SkillComponent from "./SkillComponent.js";
import NavBar from "./NavBar.js";
import { useRef, useEffect } from "react";



const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const profileSection = useRef(null);
  const profileScroll2 = () => {
    profileSection.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scrolling");
  };

  const titleSection = useRef(null);
  const titleSection2 = () => {
    titleSection.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scrolling");
  };
  useEffect(() => {
    titleSection2();
  }, []);
  return (
    <>

      <div id="landingPage">
        
        <NavBar goToHome={titleSection2} goToProfile={profileScroll2}/>
        <section id="titleSection" ref={titleSection}>
          <flex>
            <h1 id="titleCard">Pranav Balu</h1>
            <h2>
              I am a
              <br />
              <Typewriter
                id="typewriter"
                words={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "ML and AI Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="<"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

          </flex>
        </section>

        <section id="profileSection" ref={profileSection}>
          <span id="cardSection">
            <Card className="cards" titleLeft="Cotes" 
            bodyLeft="A Productivity tool for programmers that focused on note-taking
            with code. Cotes brought an unique feature where programmers
            could take notes and code onto one document; however, unlike
            many other note taking tools, code could be run and displayed
            onto the document" titleRight="DrowsyDriver" bodyRight="Using a Raspberry Pi 3, I was able to develop a
            an add-on accessory to cars to alert
            drowsy drivers with facial recognition. This was my very first hardware project and I
            was seeking challenge myself by trying something out of my expertise (software
            sided project)"/>
            <Card className="cards" titleLeft="Portfolio" bodyLeft="A project in development to display and show off my skills and
accomplishments! I'm using Particle.Js to create flawless animations and React.Js to create a breathtaking website" titleRight="FosterFinder" bodyRight="A web app designed to help networking between foster children
and families willing to adopt. The website was meant to help
children find families and to bring resources to new parents looking
to learn"/>
          </span>
          <span className="skillSection">
          <SkillComponent name="React" icon={<FaReact className="icons" />} />
          <SkillComponent name="Python" icon={<FaPython className="icons" />} />
          <SkillComponent name="Java" icon={<FaJava className="icons" />} />
          <SkillComponent name="Flask" icon={<SiFlask className="icons" />} />
          <SkillComponent name="Django" icon={<SiDjango className="icons" />} />
          </span>
          <span className="skillSection">
          <SkillComponent name="HTML5" icon={<FaHtml5 className="icons" />} />
          <SkillComponent name="CSS3" icon={<FaCss3 className="icons" />} />
          <SkillComponent name="MongoDB" icon={<SiMongodb className="icons" />} />
          <SkillComponent name="FireBase" icon={<SiFirebase className="icons" />} />
          <SkillComponent name="C++" icon={<SiCplusplus className="icons" />} />
          </span>
          <h1 id="title"> Projects </h1>
        </section>

        <section>
          <span id="creditSection">
            <h2 id="thanks">Thanks For Visiting!</h2>
          </span>
        </section>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#000000",
            },
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: false,
                mode: [],
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
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
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 5,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 400,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: false,
                  },
                  links: {
                    enable: false,
                  },
                  move: {
                    outModes: {
                      default: "destroy",
                    },
                    speed: 2,
                  },
                  size: {
                    value: 5,
                    animation: {
                      enable: true,
                      speed: 5,
                      minimumValue: 1,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                  },
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#fff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 20,
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
            groups: {
              z5000: {
                number: {
                  value: 70,
                },
                zIndex: {
                  value: 50,
                },
              },
              z7500: {
                number: {
                  value: 30,
                },
                zIndex: {
                  value: 75,
                },
              },
              z2500: {
                number: {
                  value: 50,
                },
                zIndex: {
                  value: 25,
                },
              },
              z1000: {
                number: {
                  value: 40,
                },
                zIndex: {
                  value: 10,
                },
              },
            },
            move: {
              angle: {
                offset: 0,
                value: 10,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "right",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 5,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: false,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
              animation: {
                count: 0,
                enable: false,
                speed: 3,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.1,
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: false,
                minimumValue: 1,
              },
              value: 3,
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 5,
              opacityRate: 0.5,
              sizeRate: 1,
              velocityRate: 1,
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: {
            autoPlay: true,
            fill: true,
            life: {
              wait: false,
            },
            rate: {
              quantity: 1,
              delay: 7,
            },
            shape: "square",
            startCount: 0,
            size: {
              mode: "percent",
              height: 0,
              width: 0,
            },
            particles: {
              shape: {
                type: "images",
                options: {
                  images: {
                    width: 500,
                    height: 634,
                  },
                },
              },
              size: {
                value: 40,
              },
              move: {
                speed: 10,
                outModes: {
                  default: "none",
                  right: "destroy",
                },
                straight: true,
              },
              zIndex: {
                value: 0,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true,
                },
              },
            },
            position: {
              x: -5,
              y: 55,
            },
          },
        }}
      />
    </>
  );
};

export default App;
