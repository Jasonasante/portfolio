import React from "react";
import Introduction from '../components/Intro/introduction';
import About from "../components/About/about";
import Experience from "../components/Experience/experience";
import Contact from "../components/Contact/contact";
import RecentProjects from "../components/Recent-projects/recent-projects";

const Portfolio = () => {
    const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "none")
    return (
        <>
            <Introduction />
            <About />
            <Experience />
            <RecentProjects />
            <Contact />
        </>
    )
}

export default Portfolio