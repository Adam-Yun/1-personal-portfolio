import "./styles/navbar.css";
import Link from 'next/link';

const navbar = (
    <nav className="desktop-navbar p-4 flex justify-between items-center">
        <a className="name ml-8 text-2xl flex justify-center items-center font-bold">AY</a>
        <ol id="navbarList" className="w-full mx-40  py-4 px-4 text-xl flex justify-between items-center">
        <li className="">
            <Link href="/">
                Home
            </Link>
        </li>
        <li className="">
            <Link href="/projects">
                Projects
            </Link>
        </li>
        <li className="">
            <Link href="/experience">
                Experience
            </Link>
        </li>
        <li className="">
            <Link href="/about">
                About
            </Link>
        </li>
        <li className="">
            <Link href="/contact">
                Contact
            </Link>
        </li>
        </ol>
        <button className="text-xs mr-8 flex justify-between items-center">Language Options Coming Soon!</button>
    </nav>
);

export default navbar