import "./page.css";
import projectSection from "../components/project";
export default function Home() {
  return (
    <div id="divBody" className="box-border">
      
      <nav className="px-8 py-4 flex justify-between items-center">
        <a className="name text-xl flex justify-between items-center font-bold">A.Y.</a>
        <ol id="navbarList" className="w-1/2 py-4 px-4 text-xl flex justify-between items-center">
          <li className="">
            <a>Home</a>
          </li>
          <li className="">
            <a>Projects</a>
          </li>
          <li className="">
            <a>Experience</a>
          </li>
          <li className="">
            <a>About</a>
          </li>
          <li className="">
            <a>Contact</a>
          </li>
        </ol>
        <button className="text-xl flex justify-between items-center">English</button>
      </nav>

      <main id="main" className="p-4 flex justify-center items-center">
        <div id="sectionContainer" className="w-full max-w-5/10 p-4">
          {/* Introduction */}
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

          {/* Experience */}
          <section className="p-4">
            <header>
              <h2 className="font-bold text-4xl">Experience</h2>
            </header>
            <ol className="experience-list py-1">
              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  NATT
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  Software Engineer
                </h4>

                <div className="experience-end-date text-sm flex justify-start items-center">
                   <p><time>November, 2023</time> - Present</p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>

              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  UBTS Academy
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  Customer Service Representative
                </h4>

                <div className="experience-end-date text-sm">
                  <p><time>July, 2023</time> - <time>November, 2023</time></p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>

              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  BMW FM Autohaus
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  IT Intern
                </h4>

                <div className="experience-end-date text-sm">
                  <p><time>February, 2018</time> - <time>July, 2018</time></p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>
            </ol>
          </section>

          {/* Projects */}
          {projectSection}

          {/* About Me */}
          <section className="p-4 border border-zinc-800">
            <header>
              <h2 className="font-bold text-4xl">About Me</h2>
            </header>
          </section>
        </div>
      </main>

      <footer className="px-2 py-4 flex justify-center items-center border-1 border-red-500">
        <a target="_blank" rel="noopener noreferrer"> &copy; 2024 Adam Yun </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Github </a>
        <a href="" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Email </a>
      </footer>

    </div>
  );
}