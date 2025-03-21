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

                <li className="project">
                    <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                    <div className="invert-shadow"></div>
                    <div id="projectInfoContainer" className="project-info-container">
                        <h3 className="project-title"> 
                            <p>DerbyGPT</p> 
                        </h3>

                        <ol className="project-tech-stack-list">
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                        </ol>

                        <p id="projectDescription" className="project-description">A ChatGPT clone powered by Meta&#39;s Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                        <a className="project-anchor"><p className="project-learn-more">Learn More</p></a>
                    </div>
                </li>

                <li className="project">
                    <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                    <div className="invert-shadow"></div>
                    <div id="projectInfoContainer" className="project-info-container">
                        <h3 className="project-title"> 
                            <p>DerbyGPT</p> 
                        </h3>

                        <ol className="project-tech-stack-list">
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                        </ol>

                        <p className="project-description">A ChatGPT clone powered by Meta&#39;s Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                        <a id="projectAnchor" className="project-anchor"><p id="projectLearnMore" className="project-learn-more">Learn More</p></a>
                    </div>
                </li>

                <li className="project">
                    <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                    <div className="invert-shadow"></div>
                    <div id="projectInfoContainer" className="project-info-container">
                        <h3 className="project-title"> 
                            <p>DerbyGPT</p> 
                        </h3>

                        <ol className="project-tech-stack-list">
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                            <li> <p className="tech-stack"> Python </p> </li>
                        </ol>

                        <p id="projectDescription" className="project-description">A ChatGPT clone powered by Meta&#39;s Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                        <a className="project-anchor"><p className="project-learn-more">Learn More</p></a>
                    </div>
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