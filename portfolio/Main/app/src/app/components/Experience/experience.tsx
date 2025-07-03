import "./experience.css"

const Experience = () => {
  return (
    <div className="experience-box">
        <h2 id="id-experience" className="experience-anchor">Experience Anchor</h2>
        <h2 className="experience-title">Experience</h2>
        <ol className="experience-lists">

          <li className="experience-list">
            <p className="job-period">JUNE, 2025 - PRESENT</p>
            <div className="job-information">
              <h3 className="job-title">Lead Software Engineer, NATT</h3>
              <p className="job-description">
                Research and develop web applications leveraging LLMs, SLMs, fine-tuned models, and computer vision models. Architect, build, and maintain scalable codebases. Design RESTful APIs and implement CI/CD pipelines for seamless integration and deployment. Mentor teammates in best practices for code quality, testing, and agile workflows. Balance research with pragmatic engineering to deliver AI applications that advance products and empower the team to innovate from preprocessing raw data to deploying the models.
              </p>
              <ol className="techstack">
                <li className="stack">
                  Python
                </li>
                <li className="stack">
                  JavaScript
                </li>
                <li className="stack">
                  React
                </li>
                <li className="stack">
                  Flask
                </li>
                <li className="stack">
                  HTML
                </li>
                <li className="stack">
                  CSS
                </li>
              </ol>
            </div>
          </li>

          <li className="experience-list">
            <p className="job-period">NOVEMBER, 2023 - JUNE, 2025</p>
            <div className="job-information">
              <h3 className="job-title">Full Stack Software Engineer, NATT</h3>
              <p className="job-description">
                Fine-tuned and deployed LLMs for NLP tasks like chatbots and search. Designed and trained computer vision models from scratch for a fly count detector. Created an automation for driver assignments and daily job orders for logistics workflows and also integrated chatbots powered by language models to handle user inquiries for enchanced customer experience. Deployed and maintain the projects on Raspberry Pi and Ngrok tunnels, and automated testing and deployment with GitHub Actions.
              </p>
              <ol className="techstack">
                <li className="stack">
                  Python
                </li>
                <li className="stack">
                  JavaScript
                </li>
                <li className="stack">
                  React
                </li>
                <li className="stack">
                  Flask
                </li>
                <li className="stack">
                  HTML
                </li>
                <li className="stack">
                  CSS
                </li>
              </ol>
            </div>
          </li>
          
        </ol>
    </div>
  );
};

export default Experience;
