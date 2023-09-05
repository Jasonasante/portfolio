import React from "react"
import "./headerNavbar.css"
import { NavLink} from 'react-router-dom'

const HeaderNavbar = () => {
    return (
        <nav className="top-navbar" id="top">
            <div className="top-navbar-links">
                <NavLink to="/">Portfolio</NavLink>
                <NavLink to="/bio">Bio</NavLink>
                <NavLink to="/other">Other</NavLink>
            </div>
        </nav>
    )
}

export default HeaderNavbar;