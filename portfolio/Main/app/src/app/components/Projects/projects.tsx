import Image from 'next/image';
import "./projects.css"

const Projects = () => {
  return (
    <div className="projects-box">
        <h2 id="id-projects" className="projects-anchor">Projects Anchor</h2>
        <h2 className="projects-title">Projects</h2>
        <ol className="project-lists">
          <li className="project-list">
            <div className="project-image-box">
              <Image src="/images/camping.png" alt="A project image" width={300} height={300} priority/>
            </div>
            <div className="project-information">
              <h2 className="project-title">A Project Title</h2>
              <p className="project-description">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
              <ol className="techstack">
                <li className="stack">Python</li>
              </ol>
            </div>
          </li>

        </ol>
    </div>
  );
};

export default Projects;
