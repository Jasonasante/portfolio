import './navbar.css'
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiFillLinkedin, AiFillGithub, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineContacts } from 'react-icons/ai'
import { BiArrowToBottom, BiFolderOpen } from 'react-icons/bi'
import { TbAccessPoint } from 'react-icons/tb'
import { LuFolderCog } from 'react-icons/lu'
import { SiAboutdotme } from 'react-icons/si'
import CV from '../../assets/cv.pdf'
import { useEffect, useState } from 'react'

const BottomNavBar = () => {
    const [active, setActive] = useState('#intro')
    const [disabled, setDisabled] = useState(false)
    const hrefsToWatch = ["#intro", "#about", "#experience", "#contact", "#recent-projects"];

    useEffect(() => {
        if (typeof window !== 'undefined' && !hrefsToWatch.includes(window.location.href.split("/").at(-1))) {
            setActive("#/" + window.location.href.split("/").at(-1))
        }
    }, [window.location.href])

    useEffect(() => {
        if (active === "#/bio" || active === "#/other") {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [active]);

    useEffect(() => {
        const handleScroll = () => {
            if (document.getElementById("about") !== null) {
                const position = window.scrollY;
                const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
                const top = document.getElementById("top")
                const about = document.getElementById("about")
                const experience = document.getElementById("experience")
                const recents = document.getElementById("recent-projects")
                const contact = document.getElementById("contact")

                if (position < top.offsetTop + top.offsetHeight) {
                    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "none")
                } else {
                    bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "flex")
                }

                if (position < about.offsetTop-32) {
                    setActive("#intro");
                } else if (position >= about.offsetTop && position < experience.offsetTop) {
                    setActive("#about");
                } else if (position >= experience.offsetTop && position < recents.offsetTop-32) {
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
                <button ><AiOutlineArrowUp /></button>
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
                <button><AiOutlineArrowDown /></button>
            </nav>
            <nav className='bottom-navbar'>
                <a href="#top"><AiOutlineArrowUp /></a>
                <a href="#intro" className={active === "#intro" || "" ? "active" : ""} onClick={() => setActive("#intro")}><BiFolderOpen /></a>
                {disabled &&
                    <>
                        <a href="#about" className={active === "#about" ? "active" : ""} onClick={() => setActive("#about")}><SiAboutdotme /></a>
                        <a href="#experience" className={active === "#experience" ? "active" : ""} onClick={() => setActive("#experience")}><LuFolderCog /></a>
                        <a href="#recent-projects" className={active === "#recent-projects" ? "active" : ""} onClick={() => setActive("#recent-projects")}><AiOutlineFundProjectionScreen /></a>
                        <a href="#contact" className={active === "#contact" ? "active" : ""} onClick={() => setActive("#contact")}><AiOutlineContacts /></a>
                    </>
                }
                <a href="#/bio" className={active === "#/bio" ? "active" : ""} onClick={() => setActive("#/bio")}><AiOutlineUser /></a>
                <a href="#/other" className={active === "#/other" ? "active" : ""} onClick={() => setActive("#/other")}><TbAccessPoint /></a>
                <a href={CV} className={active === "#cv" ? "active" : ""} onClick={() => setActive("#cv")} download><BiArrowToBottom /></a>
                <a href="https://www.linkedin.com/in/jason-asante/"><AiFillLinkedin /></a>
                <a href="https://github.com/Jasonasante"><AiFillGithub /></a>
                <a href="#bottom"><AiOutlineArrowDown /></a>
            </nav>
        </>
    )
}

export default BottomNavBar
