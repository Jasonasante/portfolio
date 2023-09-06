import React from "react";
import Introduction from '../components/Intro/introduction';
import About from "../components/About/about";
import Experience from "../components/Experience/experience";
import Contact from "../components/Contact/contact";
import RecentProjects from "../components/Recent-projects/recent-projects";

const Portfolio = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior for a smooth transition
    });

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