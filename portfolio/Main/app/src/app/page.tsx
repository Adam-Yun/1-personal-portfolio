
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
          <p className="copyright-text">&copy; 2024 Adam Yun</p>
      </footer>
    </div>
  );
}
