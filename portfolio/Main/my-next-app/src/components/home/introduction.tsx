import "./styles/introduction.css";

const introductionSection = (
    <section className="intro-section p-4 border border-zinc-800">
            <div className="md:flex md:justify-between md:items-center">
              <header>
                <h2 className="name font-bold text-4xl">Adam Yun</h2>
              </header>
              <div className="icons text-xl">
                <a href="https://github.com/" target="_blank">
                  <i className="fa fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/naelyun/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>

                <a href="mailto:naelyunn@gmail.com">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>

            <div className="pt-1 pb-2 flex justify-start items-center">
              <i className="fa fa-map-marker mr-2 mb-0.5"></i>
              <p>Sydney, Australia</p>
            </div>

            <div className="pb-1.5">
              <p className="text-lg font-semibold">I&#39;m Full-Stack Developer and I like to build.</p>
            </div>
          </section>
);

export default introductionSection