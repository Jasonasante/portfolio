import React from "react";
import GDSlider from "../components/GDSlider/gdSlider";
import OtherLinks from "../components/Other/other";

const Other = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <section className="other-container">
            <h5>Get To Know</h5>
            <h2>Other Things About Me</h2>
            <div className="other-items">
                <GDSlider />
                <OtherLinks />
            </div>
        </section>
    )
}

export default Other