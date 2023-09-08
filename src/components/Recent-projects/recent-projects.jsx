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
import ImageWithLoader from '../Image/image'

const RecentProjects = () => {
    const projectArr = [
        {
            title: "Bomberman", image: Bomberman,
            summary: "A multi-player last-man standing video game where users can interact via messaging",
            description: {
                para1: `Bomberman is a classic 4-player multiplayer game that combines strategy and
                fast-paced action. Players find themselves in an exhilarating arena, where the objective is to outsmart
                opponents by strategically placing bombs. The game begins in a player waiting room, complete with comprehensive
                instructions and essential game details. A live player counter keeps track of who has joined the match, building
                anticipation as the countdown timer ticks down to the game's commencement. Once the action starts, a chatroom feature
                 comes to life, enabling players to strategize, celebrate victories, and exchange friendly banter.`,
                para2: `To power this engaging experience, we employed Node.js and vanilla JavaScript, ensuring a
                responsive gameplay environment. The integration of socket.io was pivotal, handling websockets and acting as a
                robust server backbone, ensuring smooth communication between players. Notably, Bomberman operates at
                60 frames per second, providing a visually engaging and highly responsive gaming experience. Additionally, we
                developed our own custom mini-framework, enhancing the game's functionality and demonstrating a deeper level of
                technical proficiency in web development.`},
            languages: "JavaScript, custom mini-framework",
            links: { "GitHub": "https://github.com/Jasonasante/bomberman" }
        },
        {
            title: "Social Network", image: SocialNetwork,
            summary: `A Single-page web forum allowing user interactions via followings, posts, comments, and
             likes and communicate via group or private messaging.`,
            description: {
                para1: `The Social Network application mirrors the essence of popular platforms like Reddit, offering a range
             of features that facilitate user engagement and community building. Users can create, share, and interact with posts as well
              as create events and groups, creating vibrant discussions and exchanges.`,
                para2: `A tailored feed of content is curated due to the ability to follow other users- allowing users to dictate who can view and interact with posts.
            by maintaining private or public profiles.`,
                para3: `We created a robust messaging system, offering both private and group chat options by utilizing Gorilla WebSocket, Go routines,
              and RESTful API calls;  ensuring concurrency, real-time updates, and user interactions on a scalable level. To guarantee data consistency, we integrated
               an SQLite3 database, streamlining the storage of user information, posts, and messages ensuring that user data remains reliable and accurate.` },
            languages: "React, Go, RESTful API, and SQLite3 Migrations",
            links: { "GitHub": "https://github.com/Jasonasante/social-network-01" }
        },
        {
            title: "Student's GraphQL", image: GraphQL,
            summary: `A web application allowing signed-in students to track their progress.`,
            description: {
                para1: `The Student Progress Tracker is a web application tailored for signed-in students to monitor and assess their
                academic journey. It grants access to the 01founders GraphQL API through secure JWT authentication, facilitating the 
                retrieval of crucial information regarding student progress. Users can glean insights on projects completed, 
                acquired skills, and their progression through different proficiency levels.`,
                para2: `The cornerstone of this application lies in the crafting of precise and efficient GraphQL queries. These queries are
                tailored to fetch targeted information from the API, offering students a comprehensive overview of their achievements and growth. 
                Whether it's projects undertaken, skills acquired, or the level of proficiency attained, the Student Progress Tracker provides a nuanced 
                understanding of the academic journey.` },
            languages: "JavaScript, GraphQL, HTML, CSS",
            links: { Play: "https://jasonasantegql.netlify.app" }
        },
        {
            title: "Mini-Framework", image: TodoMVC,
            summary: "Designed and implemented a personalized JavaScript framework to create a unique TodoMVC page.",
            description: {
                para1: `We created own own miniature JavaScript Framework  to streamline the creation
                and manipulation of a Virtual DOM (VDOM) representation of an HTML structure. At its core, the framework
                revolves around an object known as 'orbital,' featuring crucial keys 'obj' and 'rootEl'.`,
                para2: `The 'obj' key acts as a repository for the nested object representing the HTML structure, while
                'rootEl' holds the corresponding real DOM node generated from the VDOM. These keys play a pivotal role in
                maintaining a seamless connection between the VDOM and the real DOM. This mechanism enables the framework to
                efficiently compare previous VDOM states with new ones, facilitating precise updates in the real DOM.`,
                para3: `Orbital is also a global variable and so only manages state changes but also serves as a central hub 
                for orchestrating and refreshing the application's user interface. This results in a remarkably smooth and responsive
                user experience.` },
            languages: "JavaScript, HTML, CSS",
            links: {
                GitHub: "https://github.com/RJNA-Rangers/mini-framework",
                Use: "https://app.netlify.com/sites/todomvc-rjna/overview"
            }
        },
        // {
        //     title: "Real-Time Forum", image: RealTimeForum,
        //     summary: `A Single-page web forum allowing user interactions via posts, comments, and likes and 
        //     communicate via private messaging.`,
        //     description: { para1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum reiciendis voluptatem facilis ex explicabo, ad eveniet sint obcaecati expedita libero perferendis soluta placeat deserunt dolores pariatur tempore vel eum!` },
        //     languages: "JavaScript, Go, RESTful API, and SQLite3",
        //     links: { "GitHub": "https://github.com/Jasonasante/real-time-forum" }
        // },
        {
            title: "Brick Invaders", image: MakeYourGame,
            summary: `Video Game infusion of brick-breaker and space-invaders.`,
            description: {
                para1: `Brick Invaders is a thrilling video game that seamlessly blends the best elements
                of brick breaker and space invaders. Players are challenged with the objective of demolishing
                all the bricks while strategically targeting and taking down space invaders for additional points. 
                The game offers a dynamic and engaging experience that keeps players on the edge of their seats.`,
                para2: `The gameplay runs at an impressive 60 frames per second, ensuring a smooth and immersive 
                experience for players. With its single-player mode and a total of six challenging levels, Brick Invaders
                provides hours of entertainment and excitement.`,
                para3: `To enhance the gaming experience, we utilized DOM elements to implement collision detection. This 
                innovative approach allows the game to accurately detect interactions between various elements in real-time. 
                When collisions occur, the game reacts appropriately, providing a seamless and responsive gaming experience for players.`
            },
            languages: "JavaScript, HTML, CSS",
            links: { Play: "https://01f-make-your-game-public.vercel.app/?lvl=1" }
        }
    ]

    const [visible, setVisible] = useState(false)
    const [projectIndex, setProjectIndex] = useState(null)
    const OpenProject = (index) => {
        setVisible(visible => !visible)
        setProjectIndex(index)
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
                <ProjectDescription onClose={CloseProject} index={projectIndex} projects={projectArr} />
            }
            <section id="recent-projects">
                <h5>Get To Know</h5>
                <h2>My Recent Projects</h2>
                <div className="container recent-projects-container">
                    <div className="recent-projects-cards">
                        {
                            projectArr.map((project, index) => {
                                return (
                                    <article className='recent-project-card' >
                                        <div className='recent-project-image'>
                                            <ImageWithLoader src={project.image} />
                                            {/* <img src={} alt={project.title} loading='lazy' /> */}
                                        </div>
                                        <div className="recent-project-content">
                                            <h4>{project.title}</h4>
                                            <p> {project.summary}</p>
                                            <small className='text-light'>{project.languages}</small>
                                        </div>
                                        <div className="read-more-button">
                                            <button type="button" className="btn-primary" onClick={() => OpenProject(index)}>Read More...</button>
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