import './navbar.css'
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiFillLinkedin, AiFillGithub, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineContacts } from 'react-icons/ai'
import { BiArrowToBottom, BiFolderOpen } from 'react-icons/bi'
import { TbAccessPoint } from 'react-icons/tb'
import { LuFolderCog } from 'react-icons/lu'
import { SiAboutdotme } from 'react-icons/si'
import CV from '../../assets/cv.pdf'
import { useEffect, useState } from 'react'

const BottomNavBar = () => {
    const [active, setActive] = useState('#/')
    const [disabled, setDisabled] = useState(false)
    const hrefsToWatch = ["#/", "#about", "#experience", "#contact"];

    useEffect(() => {
        if (hrefsToWatch.includes(active)) {
            const handleScroll = () => {
                const position = window.scrollY;
                const about = document.getElementById("about").getBoundingClientRect()
                const experience = document.getElementById("experience").getBoundingClientRect()
                const contact = document.getElementById("contact").getBoundingClientRect()
                const sectionHeight = window.innerHeight;
                if (position < about.top) {
                    setActive("#intro");
                } else if (position >= about.top && position < experience.top + sectionHeight) {
                    setActive("#about");
                } else if (position >= experience.top + sectionHeight && position < contact.top + sectionHeight) {
                    setActive("#experience");
                } else if (position >= contact.top + sectionHeight) {
                    setActive("#contact");
                }
            };
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, []);
    useEffect(() => {
        if (active === "#/bio" || active === "#/projects" || active === "#/other") {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [active]);
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
                    </>
                }
                <button ><AiOutlineFundProjectionScreen /></button>
                <button ><TbAccessPoint /></button>
                <button ><BiArrowToBottom /></button>
                <button ><AiOutlineContacts /></button>
                <button><AiFillLinkedin /></button>
                <button ><AiFillGithub /></button>
                <button><AiOutlineArrowDown /></button>
            </nav>
            <nav className='bottom-navbar'>
                <a href="#top"><AiOutlineArrowUp /></a>
                <a href="#intro" className={active === "#intro" ? "active" : ""} onClick={() => setActive("#intro")}><BiFolderOpen /></a>
                {disabled &&
                    <>
                        <a href="#about" className={active === "#about" ? "active" : ""} onClick={() => setActive("#about")}><SiAboutdotme /></a>
                        <a href="#experience" className={active === "#experience" ? "active" : ""} onClick={() => setActive("#experience")}><LuFolderCog /></a>
                        <a href="#contact" className={active === "#contact" ? "active" : ""} onClick={() => setActive("#contact")}><AiOutlineContacts /></a>
                    </>
                }
                <a href="#/bio" className={active === "#/bio" ? "active" : ""} onClick={() => setActive("#/bio")}><AiOutlineUser /></a>
                <a href="#/projects" className={active === "#/projects" ? "active" : ""} onClick={() => setActive("#/projects")}><AiOutlineFundProjectionScreen /></a>
                <a href="#/other" className={active === "#/other" ? "active" : ""} onClick={() => setActive("#/other")}><TbAccessPoint /></a>
                <a href={CV} className={active === "#cv" ? "active" : ""} onClick={() => setActive("#cv")} download><BiArrowToBottom /></a>
                <a href="https://www.linkedin.com/in/jason-asante/"><AiFillLinkedin /></a>
                <a href="https://github.com/Jasonasante"><AiFillGithub /></a>
                <a href="#down"><AiOutlineArrowDown /></a>
            </nav>
        </>
    )
}

export default BottomNavBar
