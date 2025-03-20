import "./page.css";
import introductionSection from "../components/home/introduction";
import experienceSection from "../components/home/experience";
import projectSection from "../components/home/project";
import aboutMeSection from "../components/home/aboutme";
import navbar from "../components/navigation/navbar"
export default function Home() {
  return (
    <div id="divBody">
      
      {/* Navigation Bar */}
      {navbar}

      <main id="main" className="p-4 flex justify-center items-center">
        <div id="sectionContainer" className="md:max-w-5/10 md:p-4">
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

      <footer className="px-2 py-4 flex justify-center items-center">
        <a target="_blank" rel="noopener noreferrer"> &copy; 2024 Adam Yun </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Github </a>
        <a href="" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Email </a>
      </footer>

    </div>
  );
}

/**
 * 
 * responsive design layout
sm:	640px	Small screens (phones in landscape, tablets)
md:	768px	Medium screens (tablets)
lg:	1024px	Large screens (laptops)
xl:	1280px	Extra-large (desktops)
2xl:	1536px	Very large screens
 */