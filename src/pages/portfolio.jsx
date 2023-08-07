import React from "react";
import Introduction from '../components/Intro/introduction';
import About from "../components/About/about";
import Experience from "../components/Experience/experience";
import Contact from "../components/Contact/contact";
import RecentProjects from "../components/Recent-projects/recent-projects";

const Portfolio = () => {
    return (
        <>
            <Introduction />
            <About />
            <Experience />
            <RecentProjects/>
            <Contact />
        </>
    )
}

export default Portfolio