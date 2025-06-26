import "./about.css"

const About = () => {
  return (
    <div className="about-box">
        <h2 id="id-about" className="about-anchor">About Anchor</h2>
        <h2 className="about-title">About</h2>
        <div className="about-information">
          <p className="about-name">
            Adam Yun
          </p>

          <p className="about-job">
            AI Engineer
          </p>
          <p className="about-description">
            I build AI apps, large language model, and object detection models.
          </p>

          <ol>
            <li>
              <a href="mailto:adamyunau@gmail.com">
                <i className="fa fa-envelope-o" ></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/naelyun/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/Adam-Yun" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>

            <li>
              <a href="" target="">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ol>
        </div>
    </div>
  );
};

export default About;
