import React from "react";
import DetailsABoutMe from "../components/biography/biography";


const Biography = () => {
    const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
    return (
        <DetailsABoutMe />
    )
}

export default Biography