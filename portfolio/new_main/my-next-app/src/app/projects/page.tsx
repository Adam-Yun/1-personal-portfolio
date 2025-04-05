import "../../components/navigation/styles/navbar.css";
import Link from 'next/link';
import navbar from "../../components/navigation/navbar"

import "../page.css";

export default function Home() {
  return (
    <div id="divBody">
    {/* Navigation Bar */}
    {navbar}
    Project
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