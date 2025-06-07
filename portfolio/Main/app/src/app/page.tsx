
import Navigation from "./Navigation/navbar"
import About from "./components/About/about"
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Contacts from "./components/Contacts/contacts";
import "./page.css"

export default function Home() {
  return (
    <div className="home-box">
      <Navigation/>
      <main className="main-box">
        <About/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </main>
      <footer className="footer-box">
          <ol>
            <li>Contact 1</li>
            <li>Contact 2</li>
            <li>Contact 3</li>
          </ol>
      </footer>
    </div>
  );
}
