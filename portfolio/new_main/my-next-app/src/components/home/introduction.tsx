import "./styles/introduction.css";

const introductionSection = (
    <section className="intro-section p-4 border border-zinc-800">
            <div className="flex justify-between items-center">
              <header>
                <h2 className="name font-bold text-4xl">Adam Yun</h2>
              </header>
              <div className="icons text-xl">
                <i className="fa fa-github"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-envelope-o"></i>
              </div>
            </div>

            <div className="pt-1 pb-2 flex justify-start items-center">
              <i className="fa fa-map-marker mr-2 mb-0.5"></i>
              <p>Kota Kinabalu, Malaysia</p>
            </div>

            <div className="pb-1.5">
              <p className="text-lg font-semibold">I&#39;m Full-Stack Developer and I like to build.</p>
            </div>
          </section>
);

export default introductionSection