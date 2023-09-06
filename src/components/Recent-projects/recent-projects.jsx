import React, { useState } from 'react'
import './recent-projects.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MakeYourGame from '../../assets/make-your-game.jpg'
import SocialNetwork from '../../assets/social-network.png'
import RealTimeForum from '../../assets/real-time-forum.png'
import Bomberman from '../../assets/bomberman-dom.png'
import TodoMVC from '../../assets/todo.png'
import GraphQL from '../../assets/GQL.png'
import ProjectDescription from '../ProjectDescription/projectDescription'
import { bottomNavbarDisplay } from '../navbar/navbar'

const RecentProjects = () => {
    const projectArr = [
        {
            title: "Bomberman", image: Bomberman,
            summary: "A multi-player last-man standing video game where users can interact via messaging",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "JavaScript, custom mini-framework",
            links: { "GitHub": "https://github.com/Jasonasante/bomberman" }
        },
        {
            title: "Social Network", image: SocialNetwork,
            summary: `A Single-page web forum allowing user interactions via followings, posts, comments, and
             likes and communicate via group or private messaging.`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "React, Go, RESTful API, and SQLite3 Migrations",
            links: { "GitHub": "https://github.com/Jasonasante/social-network-01" }
        },
        {
            title: "Student's GraphQL", image: GraphQL,
            summary: `A web application allowing signed-in students to track their progress.`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "JavaScript, GraphQL, HTML, CSS",
            links: { Play: "https://jasonasantegql.netlify.app" }
        },
        {
            title: "Mini-Framework", image: TodoMVC,
            summary: "Designed and implemented a personalized JavaScript framework to create a unique TodoMVC page.",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "JavaScript, HTML, CSS",
            links: {
                GitHub: "https://github.com/RJNA-Rangers/mini-framework",
                Use: "https://app.netlify.com/sites/todomvc-rjna/overview"
            }
        },
        {
            title: "Real-Time Forum", image: RealTimeForum,
            summary: `A Single-page web forum allowing user interactions via posts, comments, and likes and 
            communicate via private messaging.`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "JavaScript, Go, RESTful API, and SQLite3",
            links: { "GitHub": "https://github.com/Jasonasante/real-time-forum" }
        },
        {
            title: "Brick Invaders", image: MakeYourGame,
            summary: `Video Game infusion of brick-breaker and space-invaders.`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!`,
            languages: "JavaScript, HTML, CSS",
            links: { Play: "https://01f-make-your-game-public.vercel.app/?lvl=1" }
        }
    ]

    const [visible, setVisible] = useState(false)
    const [openedProject, setOpenedProject] = useState(0)
    const OpenProject = (openedProject) => {
        setOpenedProject(openedProject)
        setVisible(visible => !visible)
        document.body.style.overflowY = "hidden"
        const bottomNavbarArr = Array.from(document.querySelectorAll(".bottom-navbar"))
        bottomNavbarArr.forEach(bottomNavbar => bottomNavbar.style.display = "none")
    }

    const CloseProject = () => {
        setVisible(visible => !visible)
        document.body.style.overflowY = "auto"
        bottomNavbarDisplay()
    }
    return (
        <>
            {visible &&
                <ProjectDescription project={openedProject} onClose={CloseProject} />
            }
            <section id="recent-projects">
                <h5>Get To Know</h5>
                <h2>My Recent Projects</h2>
                <div className="container recent-projects-container">
                    <div className="recent-projects-cards">
                        {
                            projectArr.map(project => {
                                return (
                                    <article className='recent-project-card' >
                                        <div className='recent-project-image'>
                                            <img src={project.image} alt={project.title} loading='lazy' />
                                        </div>
                                        <div className="recent-project-content">
                                            <h4>{project.title}</h4>
                                            <p> {project.summary}</p>
                                            <small className='text-light'>{project.languages}</small>
                                        </div>
                                        <div className="read-more-button">
                                            <button type="button" className="btn-primary" onClick={() => OpenProject(project)}>Read More...</button>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className='more-projects'>
                <a href="#/projects" className='btn-primary'>Projects <AiOutlineArrowRight className='recent-projects-icon' /></a>
            </div> */}
            </section>
        </>
    )
}

export default RecentProjects