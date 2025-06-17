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
              <h3 className="job-title">Project Manager, NATT</h3>
              <p className="job-description">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
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
              <h3 className="job-title">Software Engineer, NATT</h3>
              <p className="job-description">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
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
