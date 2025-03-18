// htmlContent.tsx
import React from 'react';
import Image from 'next/image';


const projectSection = (  
    // Project Section
    <section className="p-4 border border-zinc-800">
        <header>
            <h2 className="font-bold text-4xl">Projects</h2>
        </header>

        {/* Project List */}
        <ol className="project-list">

            {/* DerbyGPT */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/derbygpt.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                    <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> DerbyGPT </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A ChatGPT clone powered by Meta's Ollama3 Large Language Model, fine-tuned as an AI assistant. Built with Next.js, React, and TypeScript, and deployed on Vercel.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

            {/* Derby Chatbot */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/derby-ai.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> Derby Chatbot </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A chatbot powered by Meta's Ollama3 Large Language Model, accessed through Groq's API. Built with JavaScript, HTML, and CSS, and deployed on Netlify.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

            {/* Unicon */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/unicon.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> Unicon </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">WitAI-integrated logistics chatbot, developed in Java/Spring Boot and hosted on AWS EC2.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

            {/* Pathfinder */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/pathfinder.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> Pathfinder </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A web app that optimizes delivery routes and balances driver workloads for Singaporean logistics operations.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

            {/* Camping Landing Page */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/tombotuon-hill-camping-ground.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> Camping Landing Page </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A Landing Page for a camping website, built with vanilla web tech stack, JS, HTML and CSS.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

            {/* Lambda Vibe */}
            <li className="project w-100% h-100%">
                <Image className="project-image" src="/images/webapp-instrument.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
                <div className="invert-shadow"></div>
                <div className="project-info-container">
                <h3 className="project-title m-4"> <p className="p-2 flex justify-start items-center font-bold"> Lambda Vibe </p> </h3>
                    {/* Project Tech Stack List */}
                    <ol className="m-4 project-tech-stack-list flex justify-start items-center">
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                        <li> <p className="tech-stack flex justify-center items-center"> Python </p> </li>
                    </ol>
                    <p className="m-4 flex justify-start items-center">A university project that plays, visualise songs and instruments, built with HTML, CSS, and Typescript.</p>
                    <a className="m-4 flex justify-start items-center"><p className="p-2 flex justify-start items-center rounded-[5px]">Learn More</p></a>
                </div>
            </li>

        </ol>
    </section>
);

export default projectSection;
