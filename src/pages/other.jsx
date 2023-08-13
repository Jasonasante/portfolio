import React from "react";
import GDSlider from "../components/GDSlider/gdSlider";
import OtherLinks from "../components/Other/other";

const Other = () => {
    const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
    return (
        <section className="other-container">
            <h5>Get To Know</h5>
            <h2>Other Things About Me</h2>
            <div className="other-items">
                <GDSlider />
                <OtherLinks/>
            </div>
        </section>
    )
}

export default Other