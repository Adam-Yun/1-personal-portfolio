import Image from 'next/image';
import "./projects.css"

const Projects = () => {
  return (
    <div className="projects-box">
        <h2 id="id-projects" className="projects-anchor">Projects Anchor</h2>
        <h2 className="projects-title">Projects</h2>
        <ol className="project-lists">

          <li className="project-list">
            <div className="project-information">
              <h2 className="project-title">AI Assistant & Analytics</h2>
              <p className="project-description"></p>
              <ol className="techstack">
                <li className="stack">Python</li>
                <li className="stack">React</li>
                <li className="stack">Flask</li>
                <li className="stack">MongoDB</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/unicon.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <h2 className="project-title">WitAI Chatbot</h2>
              <p className="project-description">Build and maintain critical components used to construct Klaviyo&#39;s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
              <ol className="techstack">
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/unicon.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <h2 className="project-title">DerbyGPT</h2>
              <p className="project-description">Build and maintain critical components used to construct Klaviyo&#39;s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
              <ol className="techstack">
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/derbygpt.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <h2 className="project-title">Camping Site Landing Page</h2>
              <p className="project-description">Build and maintain critical components used to construct Klaviyo&#39;s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
              <ol className="techstack">
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
                <li className="stack">Python</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/camping.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

        </ol>
    </div>
  );
};

export default Projects;
