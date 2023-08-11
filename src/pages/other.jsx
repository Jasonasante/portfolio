import React from "react";


const Other = () => {
    const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
    return (
        <div>
            Other Here
        </div>
    )
}

export default Other