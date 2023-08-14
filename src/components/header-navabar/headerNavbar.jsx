import React from "react"
import "./headerNavbar.css"

const HeaderNavbar = () => {
    return (
        <nav className="top-navbar" id="top">
            <div className="top-navbar-links">
                <a href="#/">Portfolio</a>
                <a href="#/bio">Bio</a>
                <a href="#/other">Other</a>
            </div>
        </nav>
    )
}

export default HeaderNavbar;