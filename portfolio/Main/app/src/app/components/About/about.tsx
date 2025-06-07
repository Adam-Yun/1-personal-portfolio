import "./about.css"

const About = () => {
  return (
    <div className="about-box">
        <h2 id="id-about" className="about-anchor">About Anchor</h2>
        <h2 className="about-title">About</h2>
        <p className="about-name">
          Adam Yun
        </p>
        <p className="about-job">
          Software Engineer
        </p>
        <p className="about-description">
          I build various types of AI apps from Large Language Model Chatbots to Computer Vision object detecting webapps.
        </p>
        {/* <p className="about-description">
          Hi I&#39;m Adam! I&#39;m all about tech and innovation. With a degree in Computer Science from San Francisco State University, I bring a mix of creativity and analytical skills to the table. As a Software Developer, I love to think outside the box and explore new ideas. I have a curiosity for diving into the latest tech trends and off the clock you&#39;ll find me tinkering with side projects because building is what I love to do.
        </p> */}
    </div>
  );
};

export default About;
