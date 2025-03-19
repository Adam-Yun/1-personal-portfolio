import "./page.css";
import introductionSection from "../components/home/introduction";
import experienceSection from "../components/home/experience";
import projectSection from "../components/home/project";
import aboutMeSection from "../components/home/aboutme";
export default function Home() {
  return (
    <div id="divBody">
      
      <nav className="p-4 flex justify-between items-center">
        <a className="name text-xl flex justify-between items-center font-bold">A.Y.</a>
        <ol id="navbarList" className="w-full mx-40  py-4 px-4 text-xl flex justify-between items-center">
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
          {introductionSection}

          {/* Experience */}
          {experienceSection}

          {/* Projects */}
          {projectSection}

          {/* About Me */}
          {aboutMeSection}
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