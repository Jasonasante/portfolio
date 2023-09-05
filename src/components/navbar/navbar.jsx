import './navbar.css'
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiFillLinkedin, AiFillGithub, AiOutlineContacts } from 'react-icons/ai'
import { BiArrowToBottom, BiFolderOpen } from 'react-icons/bi'
import { TbAccessPoint } from 'react-icons/tb'
import { LuFolderCog } from 'react-icons/lu'
import { SiAboutdotme } from 'react-icons/si'
import CV from '../../assets/cv.pdf'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const BottomNavBar = () => {
    const [active, setActive] = useState('/')
    const [disabled, setDisabled] = useState(false)

    const location = useLocation();

    useEffect(() => {
      setActive(location.pathname)
    }, [location]);

    useEffect(() => {
        if (active=="/bio" || active=="/other") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [active]);

    useEffect(() => {
        const handleScroll = () => {
            const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
            const position = window.scrollY;
            const top = document.getElementById("top")

            if (position < top.offsetTop + top.offsetHeight) {
                bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "none")
            } else {
                bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
            }
            if (document.getElementById("about") !== null) {
                const about = document.getElementById("about")
                const experience = document.getElementById("experience")
                const recents = document.getElementById("recent-projects")
                const contact = document.getElementById("contact")

                if (position < about.offsetTop) {
                    setActive("#intro");
                } else if (position >= about.offsetTop && position < experience.offsetTop) {
                    setActive("#about");
                } else if (position >= experience.offsetTop && position < recents.offsetTop - 32) {
                    setActive("#experience");
                } else if (position >= recents.offsetTop && position < contact.offsetTop) {
                    setActive("#recent-projects");
                } else if (position >= contact.offsetTop) {
                    setActive("#contact");
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className='bottom-navbar blur'>
                <button ><BiFolderOpen /></button>
                {disabled &&
                    <>
                        <button ><SiAboutdotme /></button>
                        <button><LuFolderCog /></button>
                        <button ><AiOutlineUser /></button>
                        <button ><AiOutlineFundProjectionScreen /></button>
                    </>
                }
                <button ><TbAccessPoint /></button>
                <button ><BiArrowToBottom /></button>
                <button ><AiOutlineContacts /></button>
                <button><AiFillLinkedin /></button>
                <button ><AiFillGithub /></button>
            </nav>
            <nav className='bottom-navbar'>
                <NavLink to="/" onClick={() => setActive("/")} ><BiFolderOpen /></NavLink>
                {disabled &&
                    <>
                        <a href="#about" className={active === "#about" ? "active" : ""} onClick={() => setActive("#about")}><SiAboutdotme /></a>
                        <a href="#experience" className={active === "#experience" ? "active" : ""} onClick={() => setActive("#experience")}><LuFolderCog /></a>
                        <a href="#recent-projects" className={active === "#recent-projects" ? "active" : ""} onClick={() => setActive("#recent-projects")}><AiOutlineFundProjectionScreen /></a>
                        <a href="#contact" className={active === "#contact" ? "active" : ""} onClick={() => setActive("#contact")}><AiOutlineContacts /></a>
                    </>
                }
                <NavLink to="/bio" onClick={() => setActive("/bio")}><AiOutlineUser /></NavLink>
                <NavLink to="/other" onClick={() => setActive("/other")}><TbAccessPoint /></NavLink>
                <a href={CV} download><BiArrowToBottom /></a>
                <a href="https://www.linkedin.com/in/jason-asante/"><AiFillLinkedin /></a>
                <a href="https://github.com/Jasonasante"><AiFillGithub /></a>
            </nav>
        </>
    )
}

export default BottomNavBar
