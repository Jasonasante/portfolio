import React from "react";

const Projects = () => {
    const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
    return (
        <div>
            projects here
        </div>
    )
}

export default Projects
