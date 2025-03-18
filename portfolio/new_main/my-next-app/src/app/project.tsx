import React, { useState } from 'react';
import Image from 'next/image';

interface ListProps {
    count: number;
}

// Function to generate the project <li> typescript xml (tsx)
const generateProjects = (count: number): React.ReactNode[] => {
    return Array.from({ length: count }, (_, index) => (
        <li key={index} className="project w-100% h-100%">
            <Image className="project-image" src="/images/unicon.png" alt="Project Unicon Image" width={5000} height={5000} priority/>
            <div className="invert-shadow"></div>
            <div className="project-info-container">
            <h3>
                Project Title
            </h3>
            {/* Project Tech Stack List */}
            <ol className="project-tech-stack-list flex justify-start items-center">
                <li>
                <p>
                    Python
                </p>
                </li>
                <li>
                <p>
                    Python
                </p>
                </li>
                <li>
                <p>
                    Python
                </p>
                </li>
            </ol>
            <p>The Project Description</p>
            <p>Learn More</p>
            </div>
        </li>
    ));
};

export default generateProjects;