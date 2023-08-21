import React from "react";
import {TbBrandNextjs} from "react-icons/tb";
import {BsGithub, BsGit} from "react-icons/bs";
import {BiLogoPython, BiLogoJava, BiLogoPhp, BiLogoFirebase, BiLogoMongodb, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript,  BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoFigma  } from "react-icons/bi";
import {TbBrandCpp, TbSql} from "react-icons/tb";
import {SiLinux} from "react-icons/si";
import { link } from "fs";


//data
let Projects_Data = [
    {
        name: "Cotes",
        description: "This is a project",
        applied_languages: ["Next.js", "Typescript", "MongoDB"],
        link: "https://github.com/mithunb9/cotes",
        production: "https://cotes.mithunb.com/"
    },
    {
        name: "DrowseDetect",
        description: "This is a project",
        applied_languages: ["Next.js", "React", "TailwindCSS"],
        link: "https://github.com/pranavbalu1/DrowsyDrivingServer",
        production: ""
    },
]

let skills_data_Icons = [["Git", <BsGit size={35} />], ["GitHub", <BsGithub size={35} />], ["Python", <BiLogoPython size={35} />], ["Java", <BiLogoJava size={35} />], ["C/C++", <TbBrandCpp size={35} />], ["SQL", <TbSql size={35} />], ["PHP", <BiLogoPhp size={35} />], ["Linux", <SiLinux size={35} />], ["FireBase", <BiLogoFirebase size={35} />], ["MongoDB", <BiLogoMongodb size={35} />], ["HTML/CSS", <BiLogoHtml5 size={35} />], ["Javascript", <BiLogoJavascript size={35} />], ["Typescript", <BiLogoTypescript size={35} />], ["TailwindCSS", <BiLogoTailwindCss size={35} />], ["Next.js", <TbBrandNextjs size={35} />], ["React", <BiLogoReact size={35} />], ["Node.js", <BiLogoNodejs size={35} />], ["Figma", <BiLogoFigma size={35} />]];

let Experience_Data = [
    {
        title: "Software Developer",
        company: "Company 1",
        description: "Job Description",
        applied_languages: ["Next.js", "React", "TailwindCSS"],
        dates: "2021-2021"
    },
    {
        title: "Software Developer",
        company: "Company 1",
        description: "Job Description",
        applied_languages: ["Next.js", "React", "TailwindCSS"],
        dates: "2021-2021"
    },
]


function project(){

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex items-center justify-center no-select mt-[50vh] lg:mt-[0] ">
                {Projects_Data.map((project) => (

                        <div className="flex flex-col items-center justify-between py-[15%] border-4 rounded-xl lg:rounded-3xl gap-8 p-2 w-[80vw] mb-[5vh] lg:mb-[0] h-fit lg:w-[20vw] lg:h-[60vh]  bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#3b855c] hover:border-[#3b855c] hover:text-white delay-75 duration-500 ">
                            <h1 className="text-5xl  lg:text-2xl font-bold">{project.name}</h1>
                            <p className="text-4xl lg:text-lg">{project.description}</p>
                            <div className="flex flex-col items-center justify-center gap-5 w-[100%]" >
                            <div className="flex flex-row gap-4 w-[100%] bg-[#d8c8b820]  items-center justify-center text-2xl lg:text-base ">
                                {project.applied_languages.map((language) => (

                                        <h1 className="text-md font-bold">{language}</h1>

                                ))}
                            </div>
                            <button onClick={() => window.open(project.link, '_blank')} className="flex flex-row gap-4 w-[80%] lg:w-[100%] bg-[#d8c8b890] border-2 rounded-xl items-center justify-center text-3xl lg:text-base ">
                                    Github
                            </button>

                            </div>
                        </div>

                    
                ))}
            </section>
        </>
    )
}


function frameworks(){

    return(
        <>
            <section className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-14 flex items-center justify-center no-select" >
                {skills_data_Icons.map((skill) => (
                        <button className="flex flex-col lg:flex-row items-center justify-evenly  col-span-1 border-4 rounded-lg p-4 w-[25vw] lg:w-[10vw] h-[10vh] bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#5b7b9a] hover:border-[#5b7b9a] hover:text-white delay-75 duration-500 ">
                            <h1 className="text-4xl lg:text-base font-bold">{skill[0]}</h1>
                            {skill[1]}
                        </button>
                ))}
            </section>
        </>
    )
}
function socials(){

    return(<>Socials</>)
}

function experience(){

    return(
    <>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex items-center justify-center no-select ">
            {Experience_Data.map((experience) => (

                        <div className="flex flex-col items-center justify-between py-[15%] border-4 rounded-xl lg:rounded-3xl gap-8 p-2 w-[80vw] h-fit lg:w-[20vw] mb-[5vh] lg:mb-[5vh] lg:h-[60vh]  bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#3b855c] hover:border-[#3b855c] hover:text-white delay-75 duration-500 ">
                            <h1 className="text-5xl  lg:text-2xl font-bold">{experience.title}</h1>
                            <h1 className="text-5xl  lg:text-2xl font-bold">{experience.company}</h1>
                            <p className="text-4xl lg:text-lg">{experience.description}</p>
                            <div className="flex flex-col items-center justify-center gap-5 w-[100%]" >
                            <div className="flex flex-row gap-4 w-[100%] bg-[#d8c8b820]  items-center justify-center text-3xl lg:text-base ">
                                {experience.applied_languages.map((language) => (

                                        <h1 className="text-md font-bold">{language}</h1>

                                ))}
                            </div>
                            <button className="flex flex-row gap-4 w-[100%]  items-center justify-center text-3xl lg:text-base ">
                                    {experience.dates}
                            </button>
                            </div>
                        </div>
                ))}
        </section>
    </>)
}

function Navbar(){
    const [bioState, setBioState] = React.useState("");

    return (
        <>

            <section className=" lg:flex place-self-center  grid grid-cols-2  lg:flex-row  items-center justify-center gap-[5%] mx-[10vw]  mb-[5vh] lg:mb-[0] mt-[5vh] lg:mt-[10vh] w-[80vw] h-[10vh] lg:h-[10vh] " >
                <button onClick={() => {window.scrollTo({top: 10000, behavior: 'smooth'}); setBioState("Projects")}} className=" lg:text-lg text-3xl px-[4%] py-[2%] lg:w-fit lg:px-[2%] lg:py-[0.25%]  lg:border-2 rounded-full bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#3b855c] hover:border-[#3b855c] hover:text-white delay-75 duration-500 " >
                    Projects
                </button>
                <button onClick={() => {window.scrollTo({top: 10000, behavior: 'smooth'});  setBioState("Frameworks/Languages")}} className=" lg:text-lg text-3xl px-[4%] py-[2%] lg:w-fit lg:px-[2%] lg:py-[0.25%] lg:border-2 rounded-full  bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#5b7b9a] hover:border-[#5b7b9a] hover:text-white delay-75 duration-500 " >
                    Frameworks/Languages
                </button>
                <button onClick={() => {window.scrollTo({top: 1000, behavior: 'smooth'}); setBioState("Experience")}} className=" lg:text-lg text-3xl px-[4%] py-[2%] lg:w-fit lg:px-[2%] lg:py-[0.25%] lg:border-2 rounded-full  bg-[#eaddcf] border-[#d8c8b8] hover:bg-[#bc7e09] hover:border-[#bc7e09] hover:text-white delay-75 duration-500 " >
                    Work History
                </button>                
            </section>
            <section className="flex flex-row items-center justify-center gap-[5%] h-[80vh] select-none  " >
                {bioState === "Frameworks/Languages" ? frameworks() : bioState === "Experience" ? experience() : project()}
            </section>

        </>
    );
}



export default Navbar;