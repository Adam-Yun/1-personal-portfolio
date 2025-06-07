import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav-box">
        <a className="nav-title">Adam Yun</a>
        <ol className="nav-lists">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ol>
    </div>
  );
};

export default Navbar;
