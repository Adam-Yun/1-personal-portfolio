import Image from 'next/image';
import "./styles/project.css";
import { useEffect } from 'react';


const ProjectSection = () => {

    useEffect(() => {
        const projectLearnMore = document.getElementById('projectLearnMore')
        
        if (projectLearnMore){
            // 1 is an offset, 16 is padding
            document.documentElement.style.setProperty('--project-learn-more-height', 1+16+projectLearnMore.offsetHeight + "px");
        }
    

      }, []);

    return (
        // Project Section
        <section className="p-4">
            <header>
                <h2 className="font-bold text-4xl">Projects</h2>
            </header>

            {/* Project List */}
            <ol className="project-list">

                {/* DerbyGPT */}
                <li className="project">
                    <a className="project-anchor" href="https://derby-gpt-chi.vercel.app/" target="_blank">
                        <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                        <div id="projectInfoContainer" className="project-info-container">
                            <h3 className="project-title"> 
                                <p className="outlined-text">DerbyGPT</p> 
                            </h3>

                            <ol className="project-tech-stack-list">
                                <li> <p className="tech-stack"> TypeScript </p> </li>
                                <li> <p className="tech-stack"> JavaScript </p> </li>
                                <li> <p className="tech-stack"> React </p> </li>
                                <li> <p className="tech-stack"> Next.Js </p> </li>
                                <li> <p className="tech-stack"> CrewAI </p> </li>
                                <li> <p className="tech-stack"> Vercel </p> </li>
                            </ol>

                            <p id="projectDescription" className="project-description">A ChatGPT clone powered by Meta&#39;s Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                        </div>
                    </a>
                </li>

                {/* Unicon */}
                <li className="project">
                    <a className="project-anchor" href="https://www.ubts.academy/en/" target="_blank">
                        <Image className="project-image" src="/images/unicon.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                        <div className="invert-shadow"></div>
                        <div id="projectInfoContainer" className="project-info-container">
                            <h3 className="project-title"> 
                                <p className="outlined-text">Unicon</p> 
                            </h3>

                            <ol className="project-tech-stack-list">
                                <li> <p className="tech-stack"> HTML </p> </li>
                                <li> <p className="tech-stack"> CSS </p> </li>
                                <li> <p className="tech-stack"> React </p> </li>
                                <li> <p className="tech-stack"> JavaScript </p> </li>
                                <li> <p className="tech-stack"> Java </p> </li>
                                <li> <p className="tech-stack"> Spring Boot </p> </li>
                                <li> <p className="tech-stack"> WitAI </p> </li>
                                <li> <p className="tech-stack"> MongoDB </p> </li>
                                <li> <p className="tech-stack"> AWS EC2 </p> </li>
                            </ol>

                            <p id="projectDescription" className="project-description">WitAI-integrated logistics chatbot, developed in Java/Spring Boot and hosted on AWS EC2.</p>
                        </div>
                    </a>
                </li>
                
                {/* Camping Landing Page */}
                <li className="project">
                    <a className="project-anchor" href="https://tombotuon-camping-ground.netlify.app/" target="_blank">
                        <Image className="project-image" src="/images/camping.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                        <div className="invert-shadow"></div>
                        <div id="projectInfoContainer" className="project-info-container">
                            <h3 className="project-title"> 
                                <p className="outlined-text">Camping Landing Page</p> 
                            </h3>

                            <ol className="project-tech-stack-list">
                                <li> <p className="tech-stack"> HTML </p> </li>
                                <li> <p className="tech-stack"> CSS </p> </li>
                                <li> <p className="tech-stack"> React </p> </li>
                                <li> <p className="tech-stack"> JavaScript </p> </li>
                                <li> <p className="tech-stack"> Netlify </p> </li>
                            </ol>

                            <p id="projectDescription" className="project-description">A Landing Page for a camping website, built with vanilla web tech stack, JS, HTML and CSS.</p>
                        </div>
                    </a>
                </li>

                {/* Lambda Vibe */}
                <li className="project">
                    <a className="project-anchor" target="_blank">
                        <Image className="project-image" src="/images/instrument.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                        <div className="invert-shadow"></div>
                        <div id="projectInfoContainer" className="project-info-container">
                            <h3 className="project-title"> 
                                <p className="outlined-text">Lambda Vibe</p> 
                            </h3>

                            <ol className="project-tech-stack-list">
                                <li> <p className="tech-stack"> HTML </p> </li>
                                <li> <p className="tech-stack"> CSS </p> </li>
                                <li> <p className="tech-stack"> React </p> </li>
                                <li> <p className="tech-stack"> TypeScript </p> </li>
                            </ol>

                            <p id="projectDescription" className="project-description">A university project that plays, visualise songs and instruments, built with HTML, CSS, and Typescript.</p>
                        </div>
                    </a>
                </li>
            </ol>
        </section>
    );
};

export default ProjectSection;


{/*             
            <li className="project">
                <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                    <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> DerbyGPT </p> </h3>
                    
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A ChatGPT clone powered by Meta&#39;s Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li> */}