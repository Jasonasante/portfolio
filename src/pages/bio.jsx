import React from "react";
import DetailsABoutMe from "../components/biography/biography";


const Biography = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <DetailsABoutMe />
    )
}

export default Biography