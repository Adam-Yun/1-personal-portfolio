import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav-box">
        <a className="nav-title" href="https://1-personal-portfolio.vercel.app/">Adam Yun</a>
        <ol className="nav-lists">
            <li><a href="#id-about">About</a></li>
            <li><a href="#id-experience">Experience</a></li>
            <li><a href="#id-projects">Projects</a></li>
            <li><a href="#id-contacts">Contacts</a></li>
        </ol>
    </div>
  );
};

export default Navbar;
