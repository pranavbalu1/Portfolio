import React from "react";
import {BsArrowDownCircle} from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter'
import {BsGithub, BsLinkedin} from "react-icons/bs";



function Dashboard() {

    return (
        <>
            <div className="flex flex-row w-[15vw] m-[1vw] items-center justify-evenly  h-[7vh] fixed " >
                <button onClick={() => window.open("https://github.com/pranavbalu1", '_blank')} className="flex flex-row items-center justify-evenly w-[30%] text-xl" >

                    <BsGithub color="#444" size={35} />
                </button>
                <button onClick={() => window.open("https://www.linkedin.com/in/pranavbalu/", '_blank')} className="flex flex-row items-center justify-evenly w-[30%] text-xl" >

                    <BsLinkedin color="#444" size={35} />
                </button>
            </div>

            <div className="flex flex-col pt-[10vh] lg:flex-row items-center select-none justify-center h-[70vh] lg:h-[90vh] gap-[10%]" >
                <section className=" w-[80vw] lg:w-[30vw] flex flex-col  justify-center" >
                    <h1 className="text-9xl lg:text-8xl text-[#444] font-bold mb-[5%]" >Pranav <br></br> Balu</h1>
                    <p className="text-3xl lg:text-2xl text-[#444] " >I'm a <Typewriter typeSpeed={100} deleteSpeed={80} delaySpeed={1000} loop={true} cursor={true} cursorColor="#444444" cursorStyle="_" words={["Machine Learning Enthusiast", "Web Developer", "Software Developer"]} /></p>


                </section>
                <section className="w-[80vw] lg:w-[30vw] " >
                    <video  autoPlay loop >
                        <source type="video/webm" src="https://storage.googleapis.com/gweb-aiaz.appspot.com/animations/Masthead.webm" />
                    </video>
                </section>

            </div>
            <div className=" select-none flex flex-row items-center  justify-center " >
                <button className="animate-bounce" >
                    <BsArrowDownCircle color="#444" size={60} className=" hover:animate-pulse text-[#444] text-5xl" />
                </button>
            </div>

        </>
    );
}

// Path: src/screens/dashboard.tsx
export default Dashboard;
