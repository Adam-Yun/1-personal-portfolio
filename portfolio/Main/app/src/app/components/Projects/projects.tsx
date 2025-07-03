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
              <div className="project-title-container">
                <h2 className="project-title">AI Chatbot & Analytics</h2>
                <a className="project-link" href="https://www.ubts.academy/en/" target="_blank">
                  <i className="fa fa-globe"></i>
                </a>
              </div>
              
              <p className="project-description">An AI chatbot developed with a fine tuned LLM and integrated with Python and Flask. Also has a React built analytics dashboard for monitoring model and product performance. It uses MongoDB to store conversation data and runs on a Raspberry Pi and Ngrok for hosting and tunnel services.</p>
              <ol className="project-techstack">
                <li className="project-stack">Python</li>
                <li className="project-stack">React</li>
                <li className="project-stack">Flask</li>
                <li className="project-stack">MongoDB</li>
                <li className="project-stack">Raspberry Pi</li>
                <li className="project-stack">Ngrok</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/unicon-analytics.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <div className="project-title-container">
                <h2 className="project-title">WitAI Chatbot</h2>
                <a className="project-link" href="https://www.ubts.academy/en/" target="_blank">
                  <i className="fa fa-globe"></i>
                </a>
              </div>
              <p className="project-description">A Java and Spring Boot chatbot utilising WitAI API to reply users using intent recognition, creating a human-like chatting experience. It&apos;s built on vanilla web dev, and deployed on a Raspberry Pi and Ngrok for hosting and tunnel services.</p>
              <ol className="project-techstack">
                <li className="project-stack">Java</li>
                <li className="project-stack">Spring Boot</li>
                <li className="project-stack">JavaScript</li>
                <li className="project-stack">HTML</li>
                <li className="project-stack">CSS</li>
                <li className="project-stack">Raspberry Pi</li>
                <li className="project-stack">Ngrok</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/unicon.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <div className="project-title-container">
                <h2 className="project-title">DerbyGPT</h2>
                <a className="project-link" href="https://derby-gpt-chi.vercel.app/" target="_blank">
                  <i className="fa fa-globe"></i>
                </a>
              </div>
              <p className="project-description">A ChatGPT clone that lets users chat with an LLM. built with CrewAI, for fast response making use of low computing resource on user&apos;s hardware.</p>
              <ol className="project-techstack">
                <li className="project-stack">TypeScript</li>
                <li className="project-stack">Next.js</li>
                <li className="project-stack">React</li>
                <li className="project-stack">CSS</li>
                <li className="project-stack">Vercel</li>
                <li className="project-stack">CrewAI</li>
              </ol>
            </div>

            <div className="project-image-box">
              <Image src="/images/derbygpt.png" alt="A project image" width={300} height={300} priority/>
            </div>
          </li>

          <li className="project-list">
            <div className="project-information">
              <div className="project-title-container">
                <h2 className="project-title">Camping Site Landing Page</h2>
                <a className="project-link" href="https://tombotuon-camping-ground.netlify.app/" target="_blank">
                  <i className="fa fa-globe"></i>
                </a>
              </div>
              <p className="project-description">A camping site landing page for a camping business, built with vanilla web dev and deployed on Netlify.</p>
              <ol className="project-techstack">
                <li className="project-stack">JavaScript</li>
                <li className="project-stack">HTML</li>
                <li className="project-stack">CSS</li>
                <li className="project-stack">Netlify</li>
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
