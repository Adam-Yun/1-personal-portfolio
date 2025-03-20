import "./styles/navbar.css";

const navbar = (
    <nav className="desktop-navbar p-4 flex justify-between items-center">
        <a className="name ml-8 text-2xl flex justify-center items-center font-bold">AY</a>
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
        <button className="text-xs mr-8 flex justify-between items-center">Language Options Coming Soon!</button>
    </nav>
);

export default navbar